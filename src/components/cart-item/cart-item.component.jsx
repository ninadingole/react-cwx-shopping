import React from 'react';
import { CartItemContainer, ItemDetailsConatiner } from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsConatiner>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x {price}
      </span>
    </ItemDetailsConatiner>
  </CartItemContainer>
);

export default CartItem;
