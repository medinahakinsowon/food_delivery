import React from 'react';
import './Header.css';
import HeaderImage from '../../assets/header_img.png';

const Header = () => {
  return (
    <div className='header'>
     <img src={HeaderImage} className='header-image'/>
      <div className="header_contents">
        <h2>Order Your Favourite Food Here.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum eius officia tempora impedit deleniti sit quos repellendus aspernatur assumenda.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
