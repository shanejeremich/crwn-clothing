import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./config/firebase.utils";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./layout/header/header.component";

import { setCurrentUser } from "./state/redux/user/user.actions";
import { selectCurrentUser } from "./state/redux/user/user.selectors";
import { ROOT, SHOP, SIGNIN, CHECKOUT } from "./api";

import "./sass/style.scss";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={ROOT} component={HomePage} />
          <Route path={SHOP} component={ShopPage} />
          <Route exact path={CHECKOUT} component={CheckoutPage} />
          <Route
            exact
            path={SIGNIN}
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
