import React from 'react';
import banner from '../img/banner-marca.png'
import '../styles/App.css';

const Logo = ()=>{
  return(
    <div className="logo-container">
        <a href="https:/quirogafacundo.com" target='_blanck'><img src={banner} alt="Logo de freeCodeCamp" className="logo" /></a>
      </div>
  )
}

export default Logo