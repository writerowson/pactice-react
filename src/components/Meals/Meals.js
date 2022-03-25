import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';



// ১. তোমার পুরানো বন্ধু the meal db এর কাছে যাও। সেখানে সার্চ করে খাবারের এর ডাটা লোড করার একটা api আছে। সেটা খুঁজে বের করো। সিম্পলভাবেই আছে। একটু খুঁজলেই পাবে। তারপর প্রথমে একটা API লিংক সেট করে ফেলো। যেটা দিয়ে তুমি যত খাবারের মধ্যে "a" আছে সেই খাবার এর ডাটা লোড করতে পারবে। তারপর সেই url/api এর লিংক দিয়ে তোমার react প্রজেক্ট এর মধ্যে ডাটা লোড করো। শর্ত হচ্ছে App.js এর মধ্যে ডাটা লোড করতে পারবে না। অন্য কোন একটা কম্পোনেন্ট এ করতে হবে। কি কম্পোনেন্ট এ করবে। সেটা তোমার সিদ্ধান্ত।  
const Meals = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))

    }, [foods])

    // ৪. কোন একটা meal এ ক্লিক করলে সেই meal এর নাম ডানপাশে যোগ হয়ে যাবে। অনেকটা ema-john এর ডানপাশে যে শপিং কার্ট ছিল (যেখানে টোটাল দেখানো হতো ) সেখানে টোটাল হিসাব করবে না। বরং যে যে মিল এ ক্লিক করেছে সেটার নাম দেখাবে। কিভাবে দেখাবে। চেষ্টা করে দেখো। না পারলে আমাদের গ্রুপে জিজ্ঞেস করো। 

    const [cart, setcart] = useState([])
    const handleCart = (food) => {
        const newCart = [...cart, food]
        setcart(newCart)
        console.log(newCart)
    }
    return (
        <div className='container   '>
            <div className='row d-flex '>
                <div className=' col-lg-8 col-md-8 col-8 '>
                    {foods.map(food => <Meal
                        key={food.idMeal}
                        foodData={food}
                        handleCart={handleCart}></Meal>)}

                </div>
                <div className=' col-lg-4 col-md-4 col-4 '>
                    {/* {<Cart newCart={cart}></Cart>} */}

                    <Cart cart={cart} ></Cart>

                </div>
            </div>
        </div>

    );
};

export default Meals;