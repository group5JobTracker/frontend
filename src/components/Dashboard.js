//Libraries
import React, { useState } from "react";
//Components
import JobList from "./JobList"
import NavBar from "./NavBar"
import Context from "../context/context";
import JobEntryModal from "./JobEntryModal";
import JobEditModal from "./JobEditModal";

function Dashboard() {
    const context = React.useContext(Context)
    const [cardViewToggle, setCardViewToggle] = useState(true)
    const [showJobEntryModal, setShowJobEntryModal] = useState(false)
    console.log(context)

    return (
        <div className="dashboardStyle">
            <div className="wrapper">
                <NavBar
                    setShowJobEntryModal={setShowJobEntryModal}
                    setCardViewToggle={setCardViewToggle} />
                {cardViewToggle ? <JobList /> : ""}
                {showJobEntryModal ? <JobEntryModal setShowJobEntryModal={setShowJobEntryModal} /> : ""}


            </div>

        </div>
    )
}

export default Dashboard