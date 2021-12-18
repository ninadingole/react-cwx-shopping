import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CardDropDownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, dispatch }) => {

  const nav = useNavigate();
  const navToCheckout = () => {
    nav('/checkout');
    dispatch(toggleCartHidden());
  }

  return (<CardDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={navToCheckout}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CardDropDownContainer>);
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default (connect(mapStateToProps)(CartDropdown));
