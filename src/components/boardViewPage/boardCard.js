import './boardCard.css';
import React, { useState } from 'react'
const BoardCard = ({ cardInfo, toBeRemovedCards, setToBeRemovedCards, cardSelectedStates, setCardSelectedStates }) => {
    const [hoveringState, setHoveringState] = useState(false)
    const handleDotClick = (e) => {
        if(!(cardSelectedStates[e.target.id])) {
            setToBeRemovedCards([...toBeRemovedCards,e.target.id])
            setCardSelectedStates(prevState => ({...prevState, [e.target.id] : true}))
        } else {
            const removedArr = toBeRemovedCards.filter(card => card != e.target.id)
            setToBeRemovedCards(removedArr);
            setCardSelectedStates(prevState => ({...prevState, [e.target.id] : false}))
        }
    }
    const handleHoverEnter = () => {
        setHoveringState(true);
    }

    const handleHoverExit = () => {
        setHoveringState(false)
    }

    return (
        <div className="card" key={cardInfo.app_id} onMouseEnter={handleHoverEnter} onMouseLeave = {handleHoverExit} style={hoveringState ? { borderRadius: '10px', border: `2px solid ${cardInfo.card_color_hex}`}: {}}>
            
                <div className='cardHeader' id = {cardInfo.app_id}>
                {(hoveringState || cardSelectedStates[cardInfo.app_id]) || toBeRemovedCards.length > 0? <span className='selectDot' id = {cardInfo.app_id} style={cardSelectedStates[cardInfo.app_id] ? {background : "#84FF4A"} : {background : "transparent"} } onClick= {handleDotClick}></span> : <span></span>}
                <div className="cardTags">
                    <p className="tagPill" style ={cardInfo.tagName === "Remote" ? {background : "#4AC9FF"} : cardInfo.tagName === "Office" ? {background : "#FFE24A"} : {background : "#63BF37"}}id = {cardInfo.app_id}>{cardInfo.tagName}</p>
                </div>
              </div>
              <div className="cardBody">
                <div className="jobInfo">
                    <p className="title">{cardInfo.position}</p>
                    <p className="company">{cardInfo.company}</p>
                    <p className="location">{cardInfo.location}</p>
                </div>

                <div className="jobStatus">
                    <p>Date Applied: {cardInfo.created_at}</p>
                    <p>Status: {cardInfo.status}</p>
                </div>
            </div>
            <div className="accentColor" style={hoveringState ? { backgroundColor: "#23295e" } :{ background: cardInfo.card_color_hex }}></div>
        </div>
    )
}

export default BoardCard;

