import './boardCard.css';

const BoardCard = () => {
    return (
        <div className="card">
            <div className="cardBody">
                <div className="cardTags">
                    <p className="tagPill">Remote</p>
                </div>

                <div className="jobInfo">
                    <p className="title">Software Engineer</p>
                    <p className = "company">Bloomberg</p>
                    <p className="location">New York, New York</p>
                </div>

                <div className="jobStatus">
                    <p>Date Applied: 08/19/22</p>
                    <p>Status: Applied</p>
                </div>
            </div>
            <div className="accentColor"></div>
        </div>        
    )
}

export default BoardCard;