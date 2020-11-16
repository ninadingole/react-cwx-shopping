import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CardDropDownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CardDropDownContainer>
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
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CardDropDownContainer>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
