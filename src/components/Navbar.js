import React from 'react';
import "./Navbar.css";
import logo from "../assests/logo.png";


export default function Navbar(props) {
    
  return (
    <div className="Header">
        <a href="/">
            <img className="logo" src={logo} alt="Logo" />
        </a>
        <div className="navigation-menu">
            <a href="about"> About Us</a>
            <a href="contact"> Contact</a>          
        </div>
    </div>
  )
}
