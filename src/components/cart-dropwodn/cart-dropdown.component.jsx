import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropwodn.styles.scss';

function Cart() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default Cart;