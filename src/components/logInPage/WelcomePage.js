import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import logoIconLarge from '../../imgFiles/Dragonfly-Logo-Icon-Large.svg';
import './welcomePage.css';
export default function WelcomePage() {
    const navigate = useNavigate()
    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard')
        },3000)
    })
  return (
    <div className='wrapPage'>
        <div className='welcomeContent'>
            <img className = 'fadeInText'src={logoIconLarge} />
            <p className='fadeInText'>Welcome, {parsedUser.first_name} {parsedUser.last_name}</p>
        </div>
    </div>
  )
}
