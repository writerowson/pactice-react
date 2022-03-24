import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';



// ১. তোমার পুরানো বন্ধু the meal db এর কাছে যাও। সেখানে সার্চ করে খাবারের এর ডাটা লোড করার একটা api আছে। সেটা খুঁজে বের করো। সিম্পলভাবেই আছে। একটু খুঁজলেই পাবে। তারপর প্রথমে একটা API লিংক সেট করে ফেলো। যেটা দিয়ে তুমি যত খাবারের মধ্যে "a" আছে সেই খাবার এর ডাটা লোড করতে পারবে। তারপর সেই url/api এর লিংক দিয়ে তোমার react প্রজেক্ট এর মধ্যে ডাটা লোড করো। শর্ত হচ্ছে App.js এর মধ্যে ডাটা লোড করতে পারবে না। অন্য কোন একটা কম্পোনেন্ট এ করতে হবে। কি কম্পোনেন্ট এ করবে। সেটা তোমার সিদ্ধান্ত।  
const Meals = () => {
    const [foods, setFoods] = useState([])

    const [cart, setcart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }, [foods])

    useEffect(() => {

    }, [])
    return (
        <div className='container   '>
            <div className='row d-flex '>
                <div className=' col-lg-8 col-md-8 col-6 '>
                    {
                        foods.map(food => <Meal food={food}></Meal>)
                    }

                </div>
                <div className=' col-lg-4 col-md-4 col-6 '>
                    {

                        <Cart cart={cart}></Cart>
                    }
                </div>
            </div>
        </div>

    );
};

export default Meals;