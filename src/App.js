import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./scss/App.scss";

import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./layout/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { ROOT, SHOP, SIGNIN } from "./api";
import { auth } from "./config/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={ROOT} component={HomePage} />
          <Route path={SHOP} component={ShopPage} />
          <Route path={SIGNIN} component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
