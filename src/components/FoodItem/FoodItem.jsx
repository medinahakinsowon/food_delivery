import React from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css';

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food_item'>
      <div className="food_item_img_container">
        <img className='food_item_img' src={image}/>
      </div>
      <div className="food_item_info">
        <div className="food_item_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt='/'/>
        </div>
        <p className='food_item_desc'>{description}</p>
        <p className="food_item_price">N{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
