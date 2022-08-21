//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function JobEntryModal({ setShowJobEntryModal }) {

    const [redCor, setRedCor] = useState(true);
    const [orangeCor, setOrangeCor] = useState(false);
    const [yellowCor, setYellowdCor] = useState(false);
    const [lightBlueCor, setLightBlueCor] = useState(false);
    const [darkBlueCor, setDarkBlueCor] = useState(false);
    const [purpleCor, setPurpleCor] = useState(false);
    const [pinkCor, setPinkCor] = useState(false);

    const handleCloseModal = () => {
        setShowJobEntryModal(false);
    }

    const handleColorCard = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const cor = e.target.value;
        if (cor === "red") {
            setRedCor(true);
            setOrangeCor(false);
            setYellowdCor(false);
            setLightBlueCor(false);
            setDarkBlueCor(false);
            setPurpleCor(false);
            setPinkCor(false);
        } else if (cor === "orange") {
            setRedCor(false);
            setOrangeCor(true);
            setYellowdCor(false);
            setLightBlueCor(false);
            setDarkBlueCor(false);
            setPurpleCor(false);
            setPinkCor(false);
        } else if (cor === "yellow") {
            setRedCor(false);
            setOrangeCor(false);
            setYellowdCor(true);
            setLightBlueCor(false);
            setDarkBlueCor(false);
            setPurpleCor(false);
            setPinkCor(false);
        } else if (cor === "lightBlue") {
            setRedCor(false);
            setOrangeCor(false);
            setYellowdCor(false);
            setLightBlueCor(true);
            setDarkBlueCor(false);
            setPurpleCor(false);
            setPinkCor(false);
        } else if (cor === "darkBlue") {
            setRedCor(false);
            setOrangeCor(false);
            setYellowdCor(false);
            setLightBlueCor(false);
            setDarkBlueCor(true);
            setPurpleCor(false);
            setPinkCor(false);
        } else if (cor === "purple") {
            setRedCor(false);
            setOrangeCor(false);
            setYellowdCor(false);
            setLightBlueCor(false);
            setDarkBlueCor(false);
            setPurpleCor(true);
            setPinkCor(false);
        } else if (cor === "pink") {
            setRedCor(false);
            setOrangeCor(false);
            setYellowdCor(false);
            setLightBlueCor(false);
            setDarkBlueCor(false);
            setPurpleCor(false);
            setPinkCor(true);
        }
    }


    return (
        <>
            <div className="overlay_style"></div>
            <div className="modal_style">
                <div
                    className={redCor ? "headerForm redCorBack" : orangeCor ? "headerForm orangeCorBack" : yellowCor ? "headerForm yellowCorBack" : lightBlueCor ? "headerForm lightBlueCorBack" : darkBlueCor ? "headerForm darkBlueCorBack" : purpleCor ? "headerForm purpleCorBack" : pinkCor ? "headerForm pinkCorBack" : "headerForm"}
                >
                    <label htmlFor="jobTitle" className="sr-only" >Job Title</label>
                    <input type="text" id="jobTitle" placeholder="Job Title" />

                    <label htmlFor="company" className="sr-only" >Job Title</label>
                    <input type="text" id="company" placeholder="Company" />

                    <label htmlFor="location" className="sr-only" >Job Title</label>
                    <input type="text" id="location" placeholder="Location" />

                    <button className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                    <button className="closeApplication" onClick={() => handleCloseModal()}>Close <FontAwesomeIcon icon={faXmark} /></button>
                </div>

                <div className="bodyForm">
                    <div className="bodyLeft">
                        <div className="inputForm">
                            <div className="inputLeft">
                                <div className="field">
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
                                <div className="field">
                                    <label htmlFor="dateApplied">Date Applied</label>
                                    <input type="text" id="dateApplied" placeholder="MM/DD/YYYY" />
                                </div>
                                <div className="field">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="email" id="contact" placeholder="youremail@email.com" />
                                </div>
                            </div>

                            <div className="inputRight">
                                <label htmlFor="labels">Labels</label>
                                <label htmlFor="cardColor">Card Color</label>
                                <select name="cardColor" id="cardColor"
                                    onChange={(e) => handleColorCard(e)}
                                >
                                    <option value="red">Red</option>
                                    <option value="orange">Orange</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="lightBlue">Light Blue</option>
                                    <option value="darkBlue">Dark Blue</option>
                                    <option value="purple">Purple</option>
                                    <option value="pink">Pink</option>
                                </select>
                                <label htmlFor="alerts">Reminder Alerts
                                    <input type="checkbox" /><span className="slider"></span>
                                </label>
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
        </>
    );
}

export default JobEntryModal