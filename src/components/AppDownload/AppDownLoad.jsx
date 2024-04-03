import React from 'react';
import './AppDownLoad.css';
import { assets } from '../../assets/assets';

const AppDownLoad = () => {
  return (
    <div className='app_download' id='app_download'>
      <p>For a better experience download <br/> GoodFood App</p>
      <div className="app_download_platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownLoad
