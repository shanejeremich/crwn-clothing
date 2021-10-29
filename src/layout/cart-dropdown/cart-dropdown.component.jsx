import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createStructuredSelector } from "reselect";
import { CHECKOUT } from "../../api/CONSTANTS";

import CustomButton from "../../common/custom-button/custom-button.component";
import CartItem from "../../components/cart-item/cart-item.component";
import { selectCartItems } from "../../state/redux/cart/cart.selectors";
import { toggleCartHidden } from "../../state/redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push(CHECKOUT);
        dispatch(toggleCartHidden());
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
