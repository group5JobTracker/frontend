import './boardViewPage/boardCard.css';
import { useContext } from "react";
import { useEffect } from 'react';
import JobEditModal from "./JobEditModal"
import { useState } from 'react';

const CardDisplayed = ({ cardInfo, showCol1, showCol2, showCol3, setCardEditModal, cardEditModal }) => {
    const formattedDate = cardInfo.created_at.split("T")[0];

    const [appKey, setAppKey] = useState("")

    const handleCardSelected = (e) => {
        console.log(e);
        // setAppKey(e.target.__reactFiber$a9o0hl4c2ta.key);
        // console.log(e);
    }

    // console.log(appKey);

    // key={cardInfo.app_id}

    return (
        // <div className='cardOverlay'>
        <div className={showCol1 ? "card1 col1" : showCol2 ? "card col2" : showCol3 ? "card col3" : "card col4"} onClick={(e) => {
            // handleCardSelected(e)
            setCardEditModal(true)
        }} >
            {/* <div className='cardHeader'> */}
            <div className="cardBody">
                <div className="cardTags">
                    <p className="tagPill" style={cardInfo.tagName === "Remote" ? { background: "#4AC9FF" } : cardInfo.tagName === "Office" ? { background: "#FFE24A" } : { background: "#63BF37" }}>{cardInfo.tagName}</p>
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
            {/* </div> */}
            <div className="accentColor" style={{ background: cardInfo.card_color_hex }}></div>
            {/* {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} appKey={appKey} cardEditModal={cardEditModal} /> : ""} */}
        </div>
        // </div>
    )
}

export default CardDisplayed;