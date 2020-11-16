import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { addItem, removeItem } from '../../redux/cart/cart.actions';
import { Arrow, Attribute, ButtonContainer, CheckoutItemContainer, ImageContainer, QuantityContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <Attribute>{name}</Attribute>
      <QuantityContainer>
        <Arrow onClick={() => removeItem(cartItem)}>
          &#10094;
        </Arrow>
        <div class="value">{quantity}</div>
        <Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </Arrow>
      </QuantityContainer>
      <Attribute>{price}</Attribute>
      <ButtonContainer
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </ButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
