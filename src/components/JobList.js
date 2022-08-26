import React, { useEffect, useState } from "react";
import Context from '../context/context';
// import { axios } from "axios"
import JobEditModal from "./JobEditModal"
import CardDisplayed from "./CardDisplayed"


function JobList({ showCol1, showCol2, showCol3, showCol4, searchTerm }) {

    const [cardEditModal, setCardEditModal] = useState(false)
    const [cardEdited, setCardEdited] = useState({});
    const [userCards, setUserCards] = useState([]);
    const context = React.useContext(Context)


    const getCards = async (user_id) => {
        const res = await fetch(`https://dragonfly.herokuapp.com/applications/users/${user_id}`);
        const data = await res.json();
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




    return (
        <div className={showCol1 ? "jobDisplayed cardsCont1" : showCol2 ? "jobDisplayed cardsCont2" : showCol3 ? "jobDisplayed cardsCont3" : "jobDisplayed cardsCont4"}>
            {userCards.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (
                    val.position.toLowerCase().includes(searchTerm.toLowerCase()) || val.company.toLowerCase().includes(searchTerm.toLowerCase()) || val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((cardInfo) =>
                <CardDisplayed cardInfo={cardInfo} showCol1={showCol1} showCol2={showCol2} showCol3={showCol3} setCardEditModal={setCardEditModal} key={cardInfo.app_id} />
            )}
            {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} /> : ""}

        </div>
    )
}


export default JobList

