import React from 'react';

const Meal = ({ food }) => {
    console.log(food);
    return (
        <div >
            <h1>{food.strMeal}</h1>
        </div>
    );
};

export default Meal;