import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory}) => {
  return (
    <div className='explore_menu' id='explore_menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore_menu_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora placeat at, aut perspiciatis eaque quia aperiam? Voluptate!</p>
      <div className="explore_menu_list">
        {menu_list.map((menu, index)=>{
          return (
            <div
            onClick={() => setCategory(prev=>prev===menu.menu_name ? "All" : menu.menu_name)} 
            key={index} className='explore_menu_list_item'>
                 <img className={category === menu.menu_name ? "active" : ""} src={menu.menu_image} alt='/'/>
                 <p>{menu.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
