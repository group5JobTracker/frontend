import React from 'react'
import logoIconLarge from '../../imgFiles/Dragonfly-Logo-Icon-Large.svg';
import './welcomePage.css';
export default function WelcomePage() {
  return (
    <div className='wrapPage'>
        <div className='welcomeContent'>
            <img src={logoIconLarge} />
            <p>Welcome, John Doe</p>
        </div>
    </div>
  )
}
