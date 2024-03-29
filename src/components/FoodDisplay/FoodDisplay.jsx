import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ({category}) => {

  const { food_list } = useContext(StoreContext)

  return (
    <div className='food_display' id='food_display'>
      <h2>GoodFood Near You...</h2>
      <div className="food_display_list">
        {food_list.map((food, index) => {
            return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
