import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ItemsCountContainer, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer as={ShoppingIcon} />
    <ItemsCountContainer>{itemCount}</ItemsCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
