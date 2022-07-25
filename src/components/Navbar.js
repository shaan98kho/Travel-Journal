import React from 'react'
import '../css/component.css'
import Logo from '../images/earth-icon.png'

export default function Navbar() {
    return (        
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <img src={Logo} alt='earth'></img>
                    <p>my travel journal</p>
                </div>
            </nav>        
    )
}