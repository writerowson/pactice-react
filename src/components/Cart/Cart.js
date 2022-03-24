import React from 'react';
import "./Cart.css"


const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;
