import React from 'react';
import './header.styles.scss';
import {Link } from 'react-router-dom';
import Logo from '../../assets/images/icon.png'
import './header.styles.scss'

const Header = () => (
    <div className="header-area">
        <div className="logo-container">
            <Link className="logo" to="/">
                <img src={Logo} alt="" />
                <span>CRWN-CLOTHING</span>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option">CHECKOUT</Link>
            <Link className="option">CONTACT</Link>
        </div>

    </div>
)

export default Header;