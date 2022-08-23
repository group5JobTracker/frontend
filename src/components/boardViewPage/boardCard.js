import './boardCard.css';

const BoardCard = ({cardInfo}) => {
    const formattedDate = cardInfo.created_at.split("T")[0]
    return (
        <div className="card" key={cardInfo.app_id}>
            <div className="cardBody">
                <div className="cardTags">
                    <p className="tagPill">Remote</p>
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

export default BoardCard;