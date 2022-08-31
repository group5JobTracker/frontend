//Libraries
import React, { useState } from "react";
//Components
import Column from "./Column";
//Images
import sortIcon from '../imgFiles/sort-vector.svg';
import filterIcon from '../imgFiles/filter-vector.svg';
import search_white from '../imgFiles/search_white.svg';
import add_white from "../imgFiles/add_white.svg"


function NavBar({ setCardViewToggle, cardViewToggle, setShowJobEntryModal, showCol1, showCol2, showCol3, showCol4, setShowCol1, setShowCol2, setShowCol3, setShowCol4, setSearchTerm }) {

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

    const handleClickCol1 = () => {
        setShowCol1(true);
        setShowCol2(false);
        setShowCol3(false);
        setShowCol4(false);
    }
    const handleClickCol2 = () => {
        setShowCol1(false);
        setShowCol2(true);
        setShowCol3(false);
        setShowCol4(false);
    }
    const handleClickCol3 = () => {
        setShowCol1(false);
        setShowCol2(false);
        setShowCol3(true);
        setShowCol4(false);
    }
    const handleClickCol4 = () => {
        setShowCol1(false);
        setShowCol2(false);
        setShowCol3(false);
        setShowCol4(true);
    }


    return (
        <nav className="navBar wrapper">
            <div className="topNavBar">
                <ul className="viewBtns">
                    <li>
                        <button className={cardViewToggle ? "btnSelectedUnderline" : ""} onClick={(e) => handleCardViewBtn(e)} >Card View</button>
                    </li>

                    <li>
                        <button className={boardViewToggle ? "btnSelectedUnderline" : ""} onClick={(e) => handleBoardViewBtn(e)}>Board View</button>
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
                        <div className="columnGrid">
                            <p>Columns</p>
                            <button className={showCol1 ? "bntSelected" : ""} onClick={() => handleClickCol1()}>1</button>
                            <button className={showCol2 ? "bntSelected" : ""} onClick={() => handleClickCol2()}>2</button>
                            <button className={showCol3 ? "bntSelected" : ""} onClick={() => handleClickCol3()}>3</button>
                            <button className={showCol4 ? "bntSelected" : ""} onClick={() => handleClickCol4()}>4</button>
                        </div>

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