import React from 'react';
import "./Cart.css"


const Cart = ({ newCart }) => {
    const { strMeal } = newCart
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {strMeal}</p>
        </div>
    );
};

export default Cart;
