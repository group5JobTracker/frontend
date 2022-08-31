import './boardViewPage/boardCard.css';
import { useContext } from "react";
import { useEffect } from 'react';

const CardDisplayed = ({ cardInfo, showCol1, showCol2, showCol3, setCardEditModal }) => {
    const formattedDate = cardInfo.created_at.split("T")[0];


    const handleCardSelected = (e) => {
        console.log(e.target.parentElement.parentElement.id.value);
    }


    return (
        <div className={showCol1 ? "card col1" : showCol2 ? "card col2" : showCol3 ? "card col3" : "card col4"} onClick={(e) => {
            handleCardSelected(e)
            setCardEditModal(true)
        }} >
            <div className="cardBody">
                <div className="cardTags">
                    <p className="tagPill">Remote</p>
                </div>

                <div className="jobInfo">
                    <p className="title">{cardInfo.position}</p>
                    <p className="company">{cardInfo.company}</p>
                    <p className="location">{cardInfo.location}</p>
                </div>

                <div className="jobStatus">
                    <p>Date Applied: {formattedDate}</p>
                    <p>Status: {cardInfo.status}</p>
                </div>
            </div>
            <div className="accentColor" style={{ background: cardInfo.card_color_hex }}></div>
        </div>
    )
}

export default CardDisplayed;