import './boardViewPage/boardCard.css';
import { useContext } from "react";
import { useEffect } from 'react';
import JobEditModal from "./JobEditModal"
import { useState } from 'react';

const CardDisplayed = ({ cardInfo, showCol1, showCol2, showCol3, setCardEditModal, cardEditModal }) => {
    const formattedDate = cardInfo.created_at.split("T")[0];

    const [appKey, setAppKey] = useState("")

    const handleCardSelected = (e) => {
        console.log(e.target.__reactFiber$w92ix9nny8i.key);
        console.log(e.target.id);
        setAppKey(e.target.__reactFiber$w92ix9nny8i.key);
        console.log(appKey);
    }


    return (
        <div key={cardInfo.app_id} className={showCol1 ? "card col1" : showCol2 ? "card col2" : showCol3 ? "card col3" : "card col4"} onClick={(e) => {
            handleCardSelected(e)
            // setCardEditModal(true)
        }} >
            {/* <div className='cardHeader'> */}
            <div className="cardBody" key={cardInfo.app_id}>
                <div className="cardTags" key={cardInfo.app_id}>
                    <p className="tagPill" key={cardInfo.app_id} style={cardInfo.tagName === "Remote" ? { background: "#4AC9FF" } : cardInfo.tagName === "Office" ? { background: "#FFE24A" } : { background: "#63BF37" }}>{cardInfo.tagName}</p>
                </div>

                <div className="jobInfo" key={cardInfo.app_id}>
                    <p className="title" key={cardInfo.app_id}>{cardInfo.position}</p>
                    <p className="company" key={cardInfo.app_id}>{cardInfo.company}</p>
                    <p className="location" key={cardInfo.app_id}>{cardInfo.location}</p>
                </div>

                <div className="jobStatus" key={cardInfo.app_id}>
                    <p key={cardInfo.app_id}>Date Applied: {formattedDate}</p>
                    <p key={cardInfo.app_id}>Status: {cardInfo.status}</p>
                </div>
            </div>
            {/* </div> */}
            <div className="accentColor" key={cardInfo.app_id} style={{ background: cardInfo.card_color_hex }}></div>
            {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} appKey={appKey} cardEditModal={cardEditModal} /> : ""}
        </div>
    )
}

export default CardDisplayed;