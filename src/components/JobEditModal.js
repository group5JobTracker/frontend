//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Context from "../context/context"
import { useContext } from "react";
import arrow from "../imgFiles/arrow-up-vector.svg"

function JobEntryModal({ setCardEditModal }) {

    const [selectedCor, setSelectedCor] = useState(null)
    const [appInfo, setAppInfo] = useState({});
    const [alertToggle, setAlertToggle] = useState(false)
    // const context = useContext(Context)

    const [cardEdited, setCardEdited] = useState({});

    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');


    // const getCardInfo = async (user_id) => {
    //     const res = await fetch(`https://dragonfly.herokuapp.com/applications/${user_id}`);
    //     const data = await res.json();
    //     return data.posts;
    // }


    // const getCardInfo = async (appKey) => {
    //     const res = await fetch(`https://dragonfly.herokuapp.com/applications/${appKey}`);
    //     const data = await res.json();
    //     return data.posts;
    // }

    // useEffect(() => {
    //     if (parsedUser) {
    //         getCardInfo(appKey)
    //             .then(data => {
    //                 setCardEdited(data);
    //             })
    //     }
    // }, [])

    // useEffect(() => {
    //     if (parsedUser) {
    //         getCardInfo(parsedUser.user_id)
    //             .then(data => {
    //                 setCardEdited(data);
    //             })
    //     }
    // }, [])


    // console.log(cardEdited);

    const handleCloseModal = () => {
        setCardEditModal(false);
    }


    const handleColorCard = (e) => {
        e.preventDefault();
        const cor = e.target.value;
        setSelectedCor(cor)
    }

    const handleAlertToggle = () => {
        setAlertToggle(current => !current)
        console.log(alertToggle);
    }

    const handleJobChange = (e) => {
        e.preventDefault();

        setAppInfo({
            "title": e.target.title.value,
            "company": e.target.company.value,
            "location": e.target.location.value,
            "status": e.target.statusOfApplication.value,
            "date": e.target.dateApplied.value,
            "contact": e.target.contact.value,
            "color": e.target.cardColor.value,
            "notes": e.target.notes.value,
            "desc": e.target.jobDescription.value,
            "notif": false,
            "userId": parsedUser.user_id,
            "tagName": e.target.labels.value
        })
    }

    return (
        <>
            <div className="overlay_style"></div>

            <form action="Sumbit" onSubmit={handleJobChange}>
                <div className="modal_style">
                    <div
                        className={selectedCor === "#FE5A5A" ? "headerForm redCorBack" : selectedCor === "#FFAC4A" ? "headerForm orangeCorBack" : selectedCor === "#FFE24A" ? "headerForm yellowCorBack" : selectedCor === "#4AC9FF" ? "headerForm lightBlueCorBack" : selectedCor === "#4A52FF" ? "headerForm darkBlueCorBack" : selectedCor === "#AF4AFF" ? "headerForm purpleCorBack" : selectedCor === "#FF77C9" ? "headerForm pinkCorBack" : "headerForm redCorBack"}
                    >
                        <label htmlFor="jobTitle" className="sr-only" >Title</label>
                        <input type="text" id="jobTitle" name="title" placeholder="Position" value={cardEdited.title} />

                        <label htmlFor="company" className="sr-only" >Job Title</label>
                        <input type="text" id="company" name="company" placeholder="Company" value={cardEdited.company} />

                        <label htmlFor="location" className="sr-only" >Job Title</label>
                        <input type="text" id="location" name="location" placeholder="Location" value={cardEdited.location} />

                        <button type="submit" className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                        <button className="closeApplication" onClick={() => handleCloseModal()}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>

                    <div className="bodyForm">
                        <div className="bodyLeft">
                            <div className="inputForm">
                                <div className="inputLeft">
                                    <div className="minifield">
                                        <label htmlFor="status">Status</label>
                                        <select className="statusApp" name="statusOfApplication" id="status" value={cardEdited.status}>
                                            <option value="needToApply">Need to Apply</option>
                                            <option value="applied">Applied</option>
                                            <option value="screened">Screened</option>
                                            <option value="interviewSet">Interview Set</option>
                                            <option value="rejected">Rejected</option>
                                            <option value="accepted">Accepted</option>
                                        </select>
                                    </div>
                                    <div className="minifield">
                                        <label htmlFor="dateApplied">Date Applied</label>
                                        <input type="text" id="dateApplied" name="dateApplied" placeholder="MM/DD/YYYY" value={cardEdited.date} />
                                    </div>
                                    <div className="minifield">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="email" id="contact" name="contact" placeholder="youremail@email.com" value={cardEdited.contact} />
                                    </div>
                                </div>

                                <div className="inputRight">
                                    <div className="minifield">
                                        <label htmlFor="labels">Labels</label>
                                        <select name="labels" id="cardLabel" value={cardEdited.tagName}>
                                            <option value="office">Office</option>
                                            <option value="remote">Remote</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>

                                    <div className="minifield colorPicker">
                                        <legend>Card Color</legend>
                                        <div class="selectedColor" style={{ backgroundColor: `${selectedCor}` }}></div>
                                        <div class="colorOptions">
                                            <div className="redCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="red">Red</label>
                                                <input type="radio" name="color" value="#FE5A5A" />
                                            </div>
                                            <div className="orangeCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="orange">Orange</label>
                                                <input type="radio" name="color" value="#FFAC4A" />
                                            </div>
                                            <div className="yellowCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="yellow">Yellow</label>
                                                <input type="radio" name="color" value="#FFE24A" />
                                            </div>
                                            <div className="lightBlueCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="light blue">Light Blue</label>
                                                <input type="radio" name="color" value="#4AC9FF" />
                                            </div>
                                            <div className="darkBlueCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="dark blue">Dark Blue</label>
                                                <input type="radio" name="color" value="#4A52FF" />
                                            </div>
                                            <div className="purpleCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="purple">Purple</label>
                                                <input type="radio" name="color" value="#AF4AFF" />
                                            </div>
                                            <div className="pinkCorBack" onChange={(e) => handleColorCard(e)}>
                                                <label class="sr-only" for="pink">Pink</label>
                                                <input type="radio" name="color" value="#FF77C9" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="minifield alertfield">
                                        <label htmlFor="alert" className={alertToggle ? "alertLabel checked" : "alertLabel"}>Reminder Alert</label>
                                        <input type="checkbox" name="alert" className="alert" onClick={() => handleAlertToggle()} />
                                    </div>
                                </div>
                            </div>

                            <div className="noteForm">
                                <label htmlFor="notes">Notes</label>
                                <textarea value={cardEdited.notes} name="notes" id="notes" cols="30" rows="10" ></textarea>
                            </div>
                        </div>

                        <div className="bodyRight">
                            <div className="rightUpperForm">
                                <label htmlFor="jobLink">Application Link</label>
                                <input type="text" id="jobLink" placeholder="https//:...." />
                            </div>
                            <div className="leftBottomForm">
                                <label htmlFor="jobDescription">Job Description</label>
                                <textarea name="jobDescription" value={cardEdited.desc} id="jobDescription" cols="30" rows="15"></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </>
    );
}

export default JobEntryModal


