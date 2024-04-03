import React, { useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='/' className='logo'/></Link>
      <ul className='navbar_menu'>
       <Link to='/' onClick={() => setMenu("home")} className={ menu === "home" ? "active": ""}>home</Link>
       <a href='#explore_menu' onClick={() => setMenu("menu")} className={ menu === "menu" ? "active" : ""}>menu</a>
       <a href='#app_download' onClick={() => setMenu("mobile_app")} className={ menu === "mobile_app" ? "active" : ""}>mobile_app</a>
       <a href='#footer' onClick={() => setMenu("contact_us")} className={ menu === "contact_us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt='/'/>
        <div className="navbar_search_icon">
         <Link to='/cart'><img src={assets.basket_icon}/></Link> 
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
