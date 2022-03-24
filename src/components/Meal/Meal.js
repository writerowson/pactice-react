import React from 'react';
import Cart from '../Cart/Cart';
import './Meal.css'

// ৩. প্রত্যেকটা meal দেখাও। meal এর মধ্যে meal রিলেটেড কিছু তথ্য দেখাও এবং ছবি দেখাও। 
const Meal = ({ food }) => {
    console.log(food);
    return (
        <div className='row'>
            <div className='food '>
                <div className="card  m-5 ">
                    <img className='w-100' src={food.strMealThumb} alt="" />
                    <div className='p-3  m-3'>
                        <h3>{food.strMeal}</h3>
                        <p><b>Category: </b>{food.strCategory}</p>
                        <p><b>Ingredients:</b> {food.strIngredient1}</p>
                        <p><b>Recipe: </b>{food.strInstructions.slice(0, 300)}...</p>
                    </div>
                    <button className='baton p-2'>ADD to cart</button>
                </div>
            </div>


        </div>

    );
};

export default Meal;