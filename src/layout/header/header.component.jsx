import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase.utils";
import { createStructuredSelector } from "reselect";

import CartIcon from "../../layout/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../state/redux/cart/cart.selectors";
import { selectCurrentUser } from "../../state/redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

import { SIGNIN } from "../../api";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOGOUT
          </div>
        ) : (
          <Link className="option" to={SIGNIN}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
