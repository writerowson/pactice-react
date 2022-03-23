import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [foods, setFoods] = useState([])
    console.log(foods)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }, [foods])
    return (
        <div>
            {
                foods.map(food => <Meal food={food}></Meal>)
            }
        </div>
    );
};

export default Meals;