import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({ hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}
    </div>
);


const mapStateToProps = ({cart: { hidden }}) => ({
    hidden,
})

export default connect(mapStateToProps)(Header);