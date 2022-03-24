
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Meals from './components/Meals/Meals';


// ৪. কোন একটা meal এ ক্লিক করলে সেই meal এর নাম ডানপাশে যোগ হয়ে যাবে। অনেকটা ema-john এর ডানপাশে যে শপিং কার্ট ছিল (যেখানে টোটাল দেখানো হতো ) সেখানে টোটাল হিসাব করবে না। বরং যে যে মিল এ ক্লিক করেছে সেটার নাম দেখাবে। কিভাবে দেখাবে। চেষ্টা করে দেখো। না পারলে আমাদের গ্রুপে জিজ্ঞেস করো। 


function App() {


  return (
    <div className="">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
