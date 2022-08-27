//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Context from "../context/context"
import { useContext } from "react";

function JobEntryModal({ setShowJobEntryModal }) {

    const [selectedCor, setSelectedCor] = useState(null)

    const [appInfo, setAppInfo] = useState({});

    const context = useContext(Context)

    const handleCloseModal = () => {
        setShowJobEntryModal(false);
    }

    const handleColorCard = (e) => {
        e.preventDefault();
        const cor = e.target.value;
        setSelectedCor(cor)
    }

    const handleJobSubmit = (e) => {
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
            "userId": context.userInfo.userInfo.user_id,
            "tagName": e.target.labels.value
        })
    }

    const example = {
        userId: 3, // the ID of the user that is creating the card
        status: 2, // the status of the application
        title: "UX Designer", // the title of the position
        company: "Figma",
        location: "San Diego, CA",
        date: "08/25/22",
        notes: "recruiter really likes pancakes", // can be empty
        contact: "recruiter@figma.com", // email of the recruiter for the job posting
        notif: false, // boolean indicating whether or not the user wants notifications for this application
        color: "#ff0000", // Hex Triplet Color Code for the accent of the card
        desc: "Looking for an entry level UX designer to...",
        tagName: "Remote" // or Office or Hybrid ONLY
    }




    const createCard = async (application) => {
        const response = await fetch("https://dragonfly.herokuapp.com/applications/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(application)
        });
        const data = await response.json();
        return data
    }

    useEffect(() => {
        if ("title" in appInfo) {
            createCard(appInfo).then(data => {
                setShowJobEntryModal(false)
            })
        }
    }, [appInfo])

    return (
        <>
            <div className="overlay_style"></div>

            <form action="Sumbit" onSubmit={handleJobSubmit}>
                <div className="modal_style">
                    <div
                        className={selectedCor === "#FE5A5A" ? "headerForm redCorBack" : selectedCor === "#FFAC4A" ? "headerForm orangeCorBack" : selectedCor === "#FFE24A" ? "headerForm yellowCorBack" : selectedCor === "#4AC9FF" ? "headerForm lightBlueCorBack" : selectedCor === "#4A52FF" ? "headerForm darkBlueCorBack" : selectedCor === "#AF4AFF" ? "headerForm purpleCorBack" : selectedCor === "#FF77C9" ? "headerForm pinkCorBack" : "headerForm redCorBack"}
                    >
                        <label htmlFor="jobTitle" className="sr-only" >Title</label>
                        <input type="text" id="jobTitle" name="title" placeholder="Position" />

                        <label htmlFor="company" className="sr-only" >Job Title</label>
                        <input type="text" id="company" name="company" placeholder="Company" />

                        <label htmlFor="location" className="sr-only" >Job Title</label>
                        <input type="text" id="location" name="location" placeholder="Location" />

                        <button type="submit" className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                        <button className="closeApplication" onClick={() => handleCloseModal()}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    {/* <div className="backgroundBlur"></div> */}
                    <div className="bodyForm">
                        <div className="bodyLeft">
                            <div className="inputForm">
                                <div className="inputLeft">
                                    <div className="minifield">
                                        <label htmlFor="status">Status</label>
                                        <select name="statusOfApplication" id="status" >
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
                                        <input type="text" id="dateApplied" name="dateApplied" placeholder="MM/DD/YYYY" />
                                    </div>
                                    <div className="minifield">
                                        <label htmlFor="contact">Contact</label>
                                        <input type="email" id="contact" name="contact" placeholder="youremail@email.com" />
                                    </div>
                                </div>

                                <div className="inputRight">
                                    <div className="minifield">
                                        <label htmlFor="labels">Labels</label>
                                        <select name="labels" id="cardLabel">
                                            <option value="office">Office</option>
                                            <option value="remote">Remote</option>
                                            <option value="hybrid">Hybrid</option>
                                        </select>
                                    </div>

                                    <div className="minifield">
                                        <label htmlFor="cardColor">Card Color</label>
                                        <select name="cardColor" id="cardColor"
                                            onChange={(e) => handleColorCard(e)}>
                                            <option value="#FE5A5A">Red</option>
                                            <option value="#FFAC4A">Orange</option>
                                            <option value="#FFE24A">Yellow</option>
                                            <option value="#4AC9FF">Light Blue</option>
                                            <option value="#4A52FF">Dark Blue</option>
                                            <option value="#AF4AFF">Purple</option>
                                            <option value="#FF77C9">Pink</option>
                                        </select>
                                    </div>

                                    <div className="minifield alertfield">
                                        <label htmlFor="alert" className="alertLabel">Reminder Alert</label>
                                        <input type="checkbox" name="alert" className="alert" />
                                    </div>


                                </div>
                            </div>

                            <div className="noteForm">
                                <label htmlFor="notes">Notes</label>
                                <textarea name="notes" id="notes" cols="30" rows="10" ></textarea>
                            </div>
                        </div>

                        <div className="bodyRight">
                            <div className="rightUpperForm">
                                <label htmlFor="jobLink">Application Link</label>
                                <input type="text" id="jobLink" placeholder="https//:...." />
                            </div>
                            <div className="leftBottomForm">
                                <label htmlFor="jobDescription">Job Description</label>
                                <textarea name="jobDescription" id="jobDescription" cols="30" rows="20"></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
}

export default JobEntryModal