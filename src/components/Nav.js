//Libraries
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
// import { faBarChart } from "@fortawesome/free-regular-svg-icons";
// import { faBarsSort, faBarsFilter, faPen } from "@fortawesome/free-regular-svg-icons";

//Components
import NewJobEntry from "./NewJobEntry";
import Column from "./Column";

function MyVerticallyCenteredModal(props) {
    const handleUserInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="headerForm">
                        <h3>Job Title</h3>
                        <h4>Company</h4>
                        <h5>Location</h5>

                        <button className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bottomForm">
                    <div className="bottomLeftForm">
                        <div className="inputForm">

                            <div className="inputLeftForm">
                                <label htmlFor="status">Status</label>
                                <select name="statusOfApplication" id="status" onChange={(e) => handleUserInput(e)}>
                                    <option value="needToApply">Need to Apply</option>
                                    <option value="applied">Applied</option>
                                    <option value="screened">Screened</option>
                                    <option value="interviewSet">Interview Set</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="accepted">Accepted</option>
                                </select>

                                <label htmlFor="dateApplied">Date Applied</label>
                                <input type="text" id="dateApplied" placeholder="MM/DD/YYYY" onChange={(e) => handleUserInput(e)} />

                                <label htmlFor="contact">Contact</label>
                                <input type="email" id="contact" placeholder="youremail@email.com" onChange={(e) => handleUserInput(e)} />
                            </div>

                            <div className="inputRightForm">
                                <label htmlFor="labels">Labels</label>

                                <label htmlFor="cardColor">Card Color</label>
                                <select name="cardColor" id="cardColor" onChange={(e) => handleUserInput(e)}>
                                    <option value="red">Red</option>
                                    <option value="orange">Orange</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="blueviolet">Blueviolet</option>
                                    <option value="purple">Purple</option>
                                    <option value="pink">Pink</option>
                                </select>
                                <label htmlFor="alerts">Reminder Alerts
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <div className="noteForm">
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" id="notes" cols="30" rows="10" onChange={(e) => handleUserInput(e)}></textarea>
                        </div>
                    </div>

                    <div className="bottomRightForm">
                        <div className="inputForm">
                            <label htmlFor="jobLink">Application Link</label>
                            <input type="text" id="jobLink" placeholder="https//:...." />
                        </div>

                        <div className="noteForm">
                            <label htmlFor="jobDescription">Job Description</label>
                            <textarea name="jobDescription" id="jobDescription" cols="30" rows="10"></textarea>
                        </div>

                    </div>

                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}


function Nav({ setNewApplic, newApplic, cardViewToggle, setCardViewToggle }) {

    const [modalShow, setModalShow] = React.useState(false);

    const [columnToggle, setColumnToggle] = useState(true)
    const [boardViewToggle, setBoardViewToggle] = useState(false)

    const handleNewApplic = () => {
        if (newApplic === false) {
            setNewApplic(true)
        } else {
            setNewApplic(false)
        }
    }

    //need to refacture this code, make it concisely
    const handleCardViewBtn = () => {
        setBoardViewToggle(false)
        setCardViewToggle(true)
        setColumnToggle(true)
    }

    const handleBoardViewBtn = () => {
        setCardViewToggle(false)
        setColumnToggle(false)
    }


    return (
        <nav className="navBar">
            <div className="topNavBar">
                <ul className="viewBtns">
                    <li>
                        <button onClick={(e) => handleCardViewBtn(e)}>Card View</button>
                    </li>

                    <li>
                        <button onClick={(e) => handleBoardViewBtn(e)}>Board View</button>
                    </li>
                </ul>

                <ul className="searchCreate">
                    <li className="searchBar">
                        <label htmlFor="search" className="sr-only" >Search</label>
                        <input type="search" id="search" placeholder="Search" />
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                    </li>

                    <li className="newAppBtnContainer">
                        {/* <button onClick={(e) => handleNewApplic(e)}><FontAwesomeIcon icon={faCirclePlus} /></button> */}
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                    </li>

                </ul>

            </div>

            <ul className="bottomNavBar">
                <li>
                    {columnToggle && <Column />}

                </li>

                <li>
                    <button>Sort</button>

                </li>

                <li>
                    <button>Filter</button>

                </li>
            </ul>

        </nav>
    )
}

export default Nav



{/* <form className="sortingJobs">
                        <label htmlFor="sortJobs" className="sr-only">Sort</label>
                        <select name="sortJobs" id="sortJobs">
                            <option value="newestCreated">Date created (newest)</option>
                            <option value="oldestCreated">Date created (oldest)</option>
                            <option value="newestApplied">Date applied (newest)</option>
                            <option value="oldestApplied">Date applied (oldest)</option>
                            <option value="color">Color</option>
                            <option value="labelAlpha">Label (alphabetical)</option>
                            <option value="status">Status</option>
                            <option value="jobName">Job Name (alphabetical)</option>
                            <option value="company">Company (alphabetical)</option>
                            <option value="location">Location (alphabetical)</option>
                        </select>
                    </form> */}


{/* <form className="filteringJobs">
                            <label htmlFor="filterJobs" className="sr-only">Sort</label>
                            <select name="filterJobs" id="filterJobs">
                                <option value="labelAlpha">Label</option>
                                <option value="status">Status</option>
                                <option value="reminder">Reminder</option>
                                <option value="color">Color</option>
                            </select>
                        </form> */}