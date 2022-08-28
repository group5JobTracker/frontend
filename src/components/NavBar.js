//Libraries
import React, { useState } from "react";
//Components
import Column from "./Column";
//Images
import sortIcon from '../imgFiles/sort-vector.svg';
import filterIcon from '../imgFiles/filter-vector.svg';
import search_white from '../imgFiles/search_white.svg';
import add_white from "../imgFiles/add_white.svg"


function NavBar({ setCardViewToggle, cardViewToggle, setShowJobEntryModal, setShowCol1, setShowCol2, setShowCol3, setShowCol4, setSearchTerm }) {

    const [columnToggle, setColumnToggle] = useState(true);
    const [boardViewToggle, setBoardViewToggle] = useState(false);
    const [sortDropdown, setSortDropdown] = useState(false)


    const handleCardViewBtn = () => {
        setBoardViewToggle(false)
        setCardViewToggle(true)
        setColumnToggle(true)
    }

    const handleBoardViewBtn = () => {
        setCardViewToggle(false)
        setColumnToggle(false)
    }

    const handleSortBtn = () => {
        setSortDropdown(current => !current)
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
                        <button><img src={search_white} alt="search bottom" /></button>
                    </li>

                    <li className="newAppBtnContainer">
                        <button onClick={() => setShowJobEntryModal(true)}><img src={add_white} alt="add button" />
                        </button>
                    </li>

                </ul>

            </div>
            {cardViewToggle &&
                <ul className="bottomNavBar">

                    <li>
                        {columnToggle && <Column
                            setShowCol1={setShowCol1}
                            setShowCol2={setShowCol2}
                            setShowCol3={setShowCol3}
                            setShowCol4={setShowCol4}
                        />}

                    </li>
                    <li className="navBarList">

                        <button onClick={handleSortBtn}>Sort <img src={sortIcon} /></button>
                        {sortDropdown ?
                            <select>
                                <option disabled selected value></option>
                                <option value="company">Company</option>
                                <option value="Location">Location</option>
                                <option value="Date Applied">Date Applied</option>
                                <option value="Status">Status</option>
                                <option value="Job Name">Job Name</option>
                                <option value="Date Created">Date Created</option>
                            </select> : ""}

                    </li>

                    <li className="navBarList">
                        <button>Filter <img src={filterIcon} /></button>

                    </li >
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