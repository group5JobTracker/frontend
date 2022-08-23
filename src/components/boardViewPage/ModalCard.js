import React, { useState } from 'react'
import './boardCard.css';
export default function ModalCard({cardInfo}) {
    const formattedDate = cardInfo.created_at.split("T")[0]
    const [hovering, setHovering] = useState(false)
    console.log(hovering)
    return (
        <div className="card" key={cardInfo.app_id} onMouseEnter = {() => setHovering(true)} onMouseLeave = {() => setHovering(false)}>
            <div className="cardBody">
              <div className='cardHeader'>
                <span className='selectDot'></span>
                <div className="cardTags">
                    <p className="tagPill">Remote</p>
                </div>
              </div>

                <div className="jobInfo">
                    <p className="title">{cardInfo.position}</p>
                    <p className = "company">{cardInfo.company}</p>
                    <p className="location">{cardInfo.location}</p>
                </div>

                <div className="jobStatus">
                    <p>Date Applied: {formattedDate}</p>
                    <p>Status: {cardInfo.status}</p>
                </div>
            </div>
            <div className="accentColor" style={{background : cardInfo.card_color_hex}}></div>
        </div>       
  )
}
