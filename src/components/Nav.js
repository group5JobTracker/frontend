//Libraries
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faBarChart } from "@fortawesome/free-regular-svg-icons";
// import { faBarsSort, faBarsFilter, faPen } from "@fortawesome/free-regular-svg-icons";

//Components
import CreateNewApplication from "./CreateNewApplication";
import Column from "./Column";


function Nav({ setNewApplic, newApplic, cardViewToggle, setCardViewToggle }) {

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
                        <button onClick={(e) => handleNewApplic(e)}><FontAwesomeIcon icon={faCirclePlus} /></button>

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