//Libraries
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
//Components
import JobList from "./JobList"
import NavBar from "./NavBar"
import JobEntryModal from "./JobEntryModal";

function Dashboard() {
    const [cardViewToggle, setCardViewToggle] = useState(true);
    const [showJobEntryModal, setShowJobEntryModal] = useState(false);
    const [cardEditModal, setCardEditModal] = useState(false)
    const [showCol1, setShowCol1] = useState(false);
    const [showCol2, setShowCol2] = useState(false);
    const [showCol3, setShowCol3] = useState(true);
    const [showCol4, setShowCol4] = useState(false);
    const navigate = useNavigate();


    const [searchTerm, setSearchTerm] = useState("");

    const currUser = window.localStorage.getItem("user");
    const parsedUser = JSON.parse(currUser);
    const userTolken = window.localStorage.getItem("tolken");



    const handleLogOut = () => {
        window.localStorage.clear()
        navigate('/', { replace: true })
    }

    return (
        <div className={showJobEntryModal || cardEditModal ? "dashboardStyle overflowH" : "dashboardStyle"}>
            <div className="wrapper">
                <NavBar
                    setShowJobEntryModal={setShowJobEntryModal}
                    setCardViewToggle={setCardViewToggle}
                    cardViewToggle={cardViewToggle}
                    showCol1={showCol1}
                    showCol2={showCol2}
                    showCol3={showCol3}
                    showCol4={showCol4}
                    setShowCol1={setShowCol1}
                    setShowCol2={setShowCol2}
                    setShowCol3={setShowCol3}
                    setShowCol4={setShowCol4}
                    setSearchTerm={setSearchTerm} />
                {cardViewToggle ? <JobList showCol1={showCol1} showCol2={showCol2} showCol3={showCol3} showCol4={showCol4} searchTerm={searchTerm} cardEditModal={cardEditModal} setCardEditModal={setCardEditModal} /> : <Navigate to={"/boards"} />}

                {showJobEntryModal ? <JobEntryModal setShowJobEntryModal={setShowJobEntryModal} /> : ""}

                <button className='logOutButton' onClick={handleLogOut}>LOG OUT</button>

            </div>

        </div>
    )
}

export default Dashboard

