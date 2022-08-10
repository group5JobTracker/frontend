//Libraries
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";
import { faBarsSort, faBarsFilter, faPen } from "@fortawesome/free-regular-svg-icons";

//Components
import CreateNewApplication from "./CreateNewApplication";


function Nav({ newApplicPopup }) {

    const [newApplic, setNewApplic] = useState(false)

    const handleNewApplic = () => {
        if (newApplic === false) {
            setNewApplic(true)
        } else {
            setNewApplic(false)
        }
    }

    return (
        <nav className="navBar">
            <ul className="viewBtns">
                <li>
                    <button>Card View</button>
                </li>
                <li>
                    <button>List View</button>
                </li>
                <li>
                    <button>Board View</button>
                </li>
            </ul>
            <ul className="controlBtns">
                <li>
                    <form action="Submit">
                        <label htmlFor="search" className="sr-only" >Search</label>
                        <input type="search" id="search" placeholder="Search" />
                    </form>
                </li>

                <li>
                    <button onClick={(e) => handleNewApplic(e)}>Create</button>
                    {newApplic && <CreateNewApplication />}

                </li>

                <li>
                    <button>Sort</button>
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
                </li>

                <li>
                    <button>Filter</button>
                    {/* <form className="filteringJobs">
                        <label htmlFor="filterJobs" className="sr-only">Sort</label>
                        <select name="filterJobs" id="filterJobs">
                            <option value="labelAlpha">Label</option>
                            <option value="status">Status</option>
                            <option value="reminder">Reminder</option>
                            <option value="color">Color</option>
                        </select>
                    </form> */}
                </li>

                <li>
                    <button>Edit</button>
                </li>
            </ul>

        </nav>
    )
}

export default Nav