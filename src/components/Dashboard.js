//Libraries
import React, { useState } from "react";
//Components
import JobList from "./JobList"
import NavBar from "./NavBar"
import Context from "../context/context";
import JobEntryModal from "./JobEntryModal";
import { Navigate } from "react-router-dom";

function Dashboard() {
    const context = React.useContext(Context)
    const [cardViewToggle, setCardViewToggle] = useState(true);
    const [showJobEntryModal, setShowJobEntryModal] = useState(false);
    const [showCol1, setShowCol1] = useState(false);
    const [showCol2, setShowCol2] = useState(false);
    const [showCol3, setShowCol3] = useState(true);
    const [showCol4, setShowCol4] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");



    console.log(context)

    return (
        <div className="dashboardStyle">
            <div className="wrapper">
                <NavBar
                    setShowJobEntryModal={setShowJobEntryModal}
                    setCardViewToggle={setCardViewToggle}
                    cardViewToggle={cardViewToggle}
                    setShowCol1={setShowCol1}
                    setShowCol2={setShowCol2}
                    setShowCol3={setShowCol3}
                    setShowCol4={setShowCol4}
                    setSearchTerm={setSearchTerm} />
                {cardViewToggle ? <JobList showCol1={showCol1} showCol2={showCol2} showCol3={showCol3} showCol4={showCol4} searchTerm={searchTerm} /> : <Navigate to={"/boards"} />}

                {showJobEntryModal ? <JobEntryModal setShowJobEntryModal={setShowJobEntryModal} /> : ""}

            </div>

        </div>
    )
}

export default Dashboard

