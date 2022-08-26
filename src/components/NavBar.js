//Libraries
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import sortIcon from '../imgFiles/sort-vector.svg';
import filterIcon from '../imgFiles/filter-vector.svg';
import search_mag24 from '../imgFiles/search_mag24.svg';
//Components
import Column from "./Column";


function NavBar({ setCardViewToggle, cardViewToggle, setShowJobEntryModal, setShowCol1, setShowCol2, setShowCol3, setShowCol4, setSearchTerm }) {

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
                        <button onClick={(e) => handleCardViewBtn(e)} >Card View</button>
                    </li>

                    <li>
                        <button onClick={(e) => handleBoardViewBtn(e)}>Board View</button>
                    </li>
                </ul>

                <ul className="searchCreate">
                    <li className="searchBar">
                        <label htmlFor="search" className="sr-only" >Search</label>
                        <input type="search" id="search" placeholder="Search" on onChange={(e) => setSearchTerm(e.target.value)} />
                        <button><img src={search_mag24} alt="search bottom" /></button>


                    </li>

                    <li className="newAppBtnContainer">

                        <Button onClick={() => setShowJobEntryModal(true)}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>

                    </li>

                </ul>

            </div>
            {cardViewToggle &&
                <ul className="bottomNavBar">

                    <li className="navBarList">
                        <button>Sort <img src={sortIcon} /></button>

                    </li>

                    <li className="navBarList">
                        <button>Filter <img src={filterIcon} /></button>

                    </li >
                    <li>
                        {columnToggle && <Column
                            setShowCol1={setShowCol1}
                            setShowCol2={setShowCol2}
                            setShowCol3={setShowCol3}
                            setShowCol4={setShowCol4}
                        // columnsCardView={columnsCardView}
                        />}

                    </li>
                </ul>}

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