import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
    const { purchases } = props;
    return (
        <header className='header'>
            <div className='navigate-to-main'>
                <Link to={process.env.PUBLIC_URL + '/'}>
                    <span>Shop</span>
                </Link>
            </div>
            <div className='total-purchase'>
                <Link to={process.env.PUBLIC_URL + '/shop-list'}>
                    <span className='shopping-basket'>
                        Items: {purchases.length}
                    </span>
                </Link>
            </div>
        </header>
    )
}

function mapsStateToProps(state) {
    const { purchases } = state;
    return {
        purchases
    }
}

export default connect(mapsStateToProps)(Header);