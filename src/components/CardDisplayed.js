import './boardViewPage/boardCard.css';
import JobEditModal from "./JobEditModal"

const CardDisplayed = ({ cardInfo, showCol1, showCol2, showCol3, setCardEditModal, cardEditModal, setAppKey }) => {

    const formattedDate = cardInfo.created_at.split("T")[0];

    const handleCardSelected = (e) => {
        setAppKey(e.target.id);
    }

    return (
        <div id={cardInfo.app_id} className={showCol1 ? "card1 col1" : showCol2 ? "card col2" : showCol3 ? "card col3" : "card col4"} onClick={(e) => {
            handleCardSelected(e)
            setCardEditModal(true)
        }} >

            <div className="cardBody" id={cardInfo.app_id}>
                <div className="cardTags" id={cardInfo.app_id}>
                    <p className="tagPill" id={cardInfo.app_id} style={cardInfo.tagName === "Remote" ? { background: "#4AC9FF" } : cardInfo.tagName === "Office" ? { background: "#FFE24A" } : { background: "#63BF37" }}>{cardInfo.tagName}</p>
                </div>

                <div className="jobInfo" id={cardInfo.app_id}>
                    <p className="title" id={cardInfo.app_id}>{cardInfo.position}</p>
                    <p className="company" id={cardInfo.app_id}>{cardInfo.company}</p>
                    <p className="location" id={cardInfo.app_id}>{cardInfo.location}</p>
                </div>

                <div className="jobStatus" id={cardInfo.app_id}>
                    <p id={cardInfo.app_id}>Date Applied: {formattedDate}</p>
                    <p id={cardInfo.app_id}>Status: {cardInfo.status}</p>
                </div>
            </div>

            <div className="accentColor" id={cardInfo.app_id} style={{ background: cardInfo.card_color_hex }}></div>

        </div>

    )
}

export default CardDisplayed;