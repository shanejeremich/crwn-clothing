import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase.utils";
import { createStructuredSelector } from "reselect";

import CartIcon from "../../layout/cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../state/redux/cart/cart.selectors";
import { selectCurrentUser } from "../../state/redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ROOT, CONTACT, SHOP, SIGNIN } from "../../api";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to={ROOT}>
        <Logo className="logo" />
        <span className="title">Crown Clothing Ltd.</span>
      </Link>
      <div className="options">
        <Link className="option" to={SHOP}>
          SHOP
        </Link>
        <Link className="option" to={CONTACT}>
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
