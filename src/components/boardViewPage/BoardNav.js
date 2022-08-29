import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './boardNav.css';

export default function BoardNav({setShowJobEntryModal}) {
    const navigate = useNavigate();
    const handleLogOut = () => {
        window.localStorage.clear()
        navigate('/', {replace : true})
    }
    return (
        <div className='navBarContainer'>
            <div className='navigationSection'>
                <Link className='cardViewLink' to="/dashboard">Card View</Link>
                <p>Board View</p>
            </div>
            <div className='buttonsSection'>
                <button className='logOutButton' onClick={handleLogOut}>Log off</button>
            </div>
        </div>
    )
}
