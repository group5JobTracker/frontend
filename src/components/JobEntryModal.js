//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function JobEntryModal({ setShowJobEntryModal }) {

    const [selectedCor, setSelectedCor] = useState(null)
    const [appInfo, setAppInfo] = useState({});
    const [alertToggle, setAlertToggle] = useState(false)


    const currUser = window.localStorage.getItem("user")
    const parsedUser = JSON.parse(currUser)
    const userToken = window.localStorage.getItem('token');


    const handleCloseModal = () => {
        setShowJobEntryModal(false);
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
            "userId": parsedUser.user_id,
            "tagName": e.target.labels.value
        })
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

    const validLink = (parsedLinkInput) => {
        const regex = /^\d+$/
        if (parsedLinkInput.length >= 6) {
            if (parsedLinkInput[0] === "https:" && parsedLinkInput[1] === "" && parsedLinkInput[2] === "www.linkedin.com" && parsedLinkInput[3] === "jobs" && parsedLinkInput[4] === "view") {
                if (parsedLinkInput[5].length === 10 && regex.test(parsedLinkInput[5])) {
                    return true
                }
                return false;
            }
            return false;
        }
        return false;
    }

    const handleLinkChange = async (e) => {
        const parsedLink = e.target.value.split('/')

        if (validLink(parsedLink)) {
            const formattedLink = parsedLink.slice(0, 6).join('/')
            console.log(formattedLink)
            const reqBody = {
                url: formattedLink
            }
            const response = await fetch(`https://dragonfly.herokuapp.com/applications/auto`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reqBody)
            })
            const data = await response.json()
            console.log(data)
            // now that we have the data, we just have the update the input fields on the form with this data
            console.log(document.querySelector('#jobTitle'));
            document.querySelector('#jobTitle').value = data.scrapedData.title;
            document.querySelector('#company').value = data.scrapedData.company;
            document.querySelector('#location').value = data.scrapedData.location;
            document.querySelector('#jobDescription').value = data.scrapedData.description;
        }

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
                    {/* <div className="blur"><p>oi</p></div> */}
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
                                    <div className="minifield statusMinifield">
                                        <label htmlFor="status">Status</label>
                                        <select name="statusOfApplication" id="status" >
                                            <option value="Need to Apply">Need to Apply</option>
                                            <option value="Applied">Applied</option>
                                            <option value="Screened">Screened</option>
                                            <option value="Interview Set">Interview Set</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="Accepted">Accepted</option>
                                        </select>
                                    </div>
                                    {/* <div className="minifield">
                                        <label htmlFor="status">Status</label>
                                        <select name="statusOfApplication" id="status" >
                                            <option value="Need to Apply">Need to Apply</option>
                                            <option value="Applied">Applied</option>
                                            <option value="Screened">Screened</option>
                                            <option value="Interview Set">Interview Set</option>
                                            <option value="Rejected">Rejected</option>
                                            <option value="Accepted">Accepted</option>
                                        </select>
                                    </div> */}
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
                                    <div className="minifield workingStatus">
                                        <label htmlFor="labels">Labels</label>
                                        <select name="labels" id="cardLabel">
                                            <option value="Office">Office</option>
                                            <option value="Remote">Remote</option>
                                            <option value="Hybrid">Hybrid</option>
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
                                        <input type="checkbox" name="alert" className="alert" onClick={() => setAlertToggle(current => !current)} />
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
                                <input type="text" id="jobLink" placeholder="https//:...." onChange={handleLinkChange} />
                            </div>
                            <div className="leftBottomForm">
                                <label htmlFor="jobDescription">Job Description</label>
                                <textarea name="jobDescription" id="jobDescription" cols="30" rows="15"></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
}

export default JobEntryModal