import React, { useEffect, useState } from "react";
import Context from '../context/context';
// import { axios } from "axios"
import JobEditModal from "./JobEditModal"
import CardDisplayed from "./CardDisplayed"


function JobList({ showCol1, showCol2, showCol3, showCol4, searchTerm }) {

    const [cardEditModal, setCardEditModal] = useState(false)
    const [userCards, setUserCards] = useState([]);
    const context = React.useContext(Context)


    const getCards = async () => {
        const res = await fetch(`https://dragonfly.herokuapp.com/applications/users/4`);
        const data = await res.json();
        // console.log(data);
        return data.posts;
    }

    useEffect(() => {
        if (context.userInfo.userInfo) {
            getCards(context.userInfo.userInfo.user_id)
                .then(data => {
                    setUserCards(data);
                })
        }
    }, [])

    console.log(cardEditModal);
    const handleCardClick = () => {
        setCardEditModal(true)
    }

    return (
        <div className="jobDisplayed" >
            {userCards.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (
                    val.position.toLowerCase().includes(searchTerm.toLowerCase()) || val.company.toLowerCase().includes(searchTerm.toLowerCase()) || val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((cardInfo) =>
                <CardDisplayed cardInfo={cardInfo} showCol1={showCol1} showCol2={showCol2} showCol3={showCol3} setCardEditModal={setCardEditModal} />
            )}
            {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} /> : ""}

        </div>
    )
}


export default JobList


// <div
//     onClick={() => setCardEditModal(true)}
//     key={i}
//     id={i}
//     className={showCol1 ? "cardsJob col1" : showCol2 ? "cardsJob col2" : showCol3 ? "cardsJob col3" : "cardsJob col4"} >
//     <div className="principal">
//         <h4>{jobPos.position}</h4>
//         <h5>{jobPos.company}</h5>
//         <h6>{jobPos.location}</h6>
//     </div>
//     <div className="complement">
//         <p>Date Applied: {jobPos.dateApplied}</p>
//         <p>Status: {jobPos.stats}</p>
//     </div>
// </div>