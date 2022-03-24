import React from 'react';
import "./Cart.css"


const Cart = ({ cart }) => {
    const { idMeal } = cart
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {idMeal}</p>
        </div>
    );
};

export default Cart;
