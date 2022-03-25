
import { RiShoppingCartFill } from "react-icons/ri"
import './Meal.css'

// ৩. প্রত্যেকটা meal দেখাও। meal এর মধ্যে meal রিলেটেড কিছু তথ্য দেখাও এবং ছবি দেখাও। 
const Meal = ({ foodData, handleCart }) => {


    const { strMeal, strMealThumb, strCategory, strIngredient1, strInstructions } = foodData

    return (
        <div className='row'>
            <div className='food '>
                <div className="card  m-5 ">
                    <img className='w-100' src={strMealThumb} alt="" />
                    <div className='p(-3  m-3'>
                        <h3>{strMeal}</h3>
                        <p><b>Category: </b>{strCategory}</p>
                        <p><b>Main Ingredients:</b> {strIngredient1}</p>
                        <p><b>Recipe: </b>{strInstructions.slice(0, 300)}...</p>
                    </div>
                    {/* যে বাটনে ক্লিক করবে সেই বাটনে font awesome দিয়ে কোন একটা আইকন যোগ করো।  */}

                    <button onClick={() => handleCart(foodData)} className='baton p-2'> ADD to cart <RiShoppingCartFill></RiShoppingCartFill> </button>
                </div>
            </div>


        </div>

    );
};

export default Meal;