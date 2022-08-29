import React, { useState } from 'react'
import './boardCard.css';
export default function ModalCard({cardInfo, selectedCards, setSelectedCards}) {
    const formattedDate = cardInfo.created_at.split("T")[0]
    const [selected, setSelected] = useState(false)
    const handleCardClick = (e) => {
        if(!selected) {
            setSelectedCards([...selectedCards,e.target.id])
        } else {
            const removedArr = selectedCards.filter(card => card != e.target.id)
            setSelectedCards(removedArr);
        }
        setSelected(!selected);
    }

    return (
        <div className="card" id = {cardInfo.app_id} key={cardInfo.app_id} onClick={handleCardClick}>
              <div className='cardHeader' id = {cardInfo.app_id}>
                <span className='selectDot' id = {cardInfo.app_id} style={selected ? {background : "#84FF4A"} : {background : "transparent"} }></span>
                <div className="cardTags" id = {cardInfo.app_id}>
                    <p className="tagPill" style ={cardInfo.tagName === "Remote" ? {background : "#4AC9FF"} : cardInfo.tagName === "Office" ? {background : "#FFE24A"} : {background : "#63BF37"}}id = {cardInfo.app_id}>{cardInfo.tagName}</p>
                </div>
              </div>
              <div className="cardBody" id = {cardInfo.app_id}>
                <div className="jobInfo" id = {cardInfo.app_id}>
                    <p className="title" id = {cardInfo.app_id}>{cardInfo.position}</p>
                    <p className = "company" id = {cardInfo.app_id}>{cardInfo.company}</p>
                    <p className="location" id = {cardInfo.app_id}>{cardInfo.location}</p>
                </div>

                <div className="jobStatus" id = {cardInfo.app_id}>
                    <p id = {cardInfo.app_id}>Date Applied: {formattedDate}</p>
                    <p id = {cardInfo.app_id}>Status: {cardInfo.status}</p>
                </div>
            </div>
            <div className="accentColor" id = {cardInfo.app_id} style={{background : cardInfo.card_color_hex}}></div>
        </div>       
  )
}
