import React, { useEffect, useState } from "react";
import Context from '../context/context';
import JobEditModal from "./JobEditModal"
import CardDisplayed from "./CardDisplayed"


function JobList({ showCol1, showCol2, showCol3, showCol4, searchTerm, cardEditModal, setCardEditModal, llave }) {


    const [cardEdited, setCardEdited] = useState({});
    const [userCards, setUserCards] = useState([]);

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');


    const getCards = async (user_id) => {
        const res = await fetch(`https://dragonfly.herokuapp.com/applications/users/${user_id}`);
        const data = await res.json();
        return data.posts;
    }

    useEffect(() => {
        if (parsedUser) {
            getCards(parsedUser.user_id)
                .then(data => {
                    setUserCards(data);
                })
        }
    }, [])


    return (
        <div className={showCol1 ? "jobDisplayed cardsCont1 wrapper" : showCol2 ? "jobDisplayed cardsCont2 wrapper" : showCol3 ? "jobDisplayed cardsCont3 wrapper" : "jobDisplayed cardsCont4 wrapper2"}>
            {userCards.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (
                    val.position.toLowerCase().includes(searchTerm.toLowerCase()) || val.company.toLowerCase().includes(searchTerm.toLowerCase()) || val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((cardInfo) =>
                <CardDisplayed cardInfo={cardInfo} showCol1={showCol1} showCol2={showCol2} showCol3={showCol3} setCardEditModal={setCardEditModal} cardEditModal={cardEditModal} key={cardInfo.app_id} />
            )}
            {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} /> : ""}

        </div>
    )
}


export default JobList

