import React from 'react';
import "./Cart.css"


const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h4>Order Summary : {cart.length}</h4>

            {/* <ul>  {cart.map(p => <li key={idMeal}>{p.strMeal}</li>)}  </ul> */}
            <ul >  {cart.map(p => <li key={p.idMeal}>{p.strMeal}</li>)}  </ul>
        </div>
    );
};

export default Cart;
