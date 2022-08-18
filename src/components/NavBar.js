//Libraries
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
//Components
import Column from "./Column";
import JobEntryModal from "./JobEntryModal";


function NavBar({ setCardViewToggle }) {

    const [modalShow, setModalShow] = React.useState(false);

    const [columnToggle, setColumnToggle] = useState(true);

    const [boardViewToggle, setBoardViewToggle] = useState(false);

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

                        <JobEntryModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                    </li>

                </ul>

            </div>

            <ul className="bottomNavBar">

                <li>
                    <button>Sort</button>

                </li>

                <li>
                    <button>Filter</button>

                </li>
                <li>
                    {columnToggle && <Column />}

                </li>
            </ul>

        </nav>
    )
}

export default NavBar



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