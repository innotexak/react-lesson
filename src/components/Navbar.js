import React from 'react'
import Logo from './assets/logo192.png'
export const Navbar = ()=>{
    return(
        <header className='header'>
            <nav className='navbar'>
                <span>
                    <img src={Logo} alt="logo" />   
                </span>  
                <ul className='navbar-menu'>
                    <li className='menu-item'><a href="/#landing">Home</a></li>
                    <li className='menu-item'><a href="#service">Service</a></li>
                    <li className='menu-item'><a href="#about">About</a></li>
                    <li className='menu-item'><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}



