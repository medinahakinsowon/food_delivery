import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

   const {cartItems,addToCart,removeCartItem} = useContext(StoreContext)
   

  return (
    <div className='food_item'>
      <div className="food_item_img_container">
        <img className='food_item_img' src={image}/>

        {!cartItems[id] ? 
              <img src={assets.add_icon_white} className='add' onClick={() => addToCart(id)}/> 
               : 
               <div className='food_item_counter'>
                <img  onClick={() => removeCartItem(id)} src={assets.remove_icon_red} alt=''/>
                <p>{cartItems[id]}</p>
                <img  onClick={() => addToCart(id)} src={assets.add_icon_green} alt=''/>
               </div>
        }

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
