//Libraries
import React, { useState } from "react";
//Components
import JobList from "./JobList"
import NavBar from "./NavBar"
import Context from "../context/context";

function Dashboard() {
    const context = React.useContext(Context)
    const [cardViewToggle, setCardViewToggle] = useState(true)
    console.log(context)

    return (
        <div className="dashboardStyle">
            <div className="wrapper">
                <NavBar
                    setCardViewToggle={setCardViewToggle} />
                {cardViewToggle ? <JobList /> : ""}

            </div>

        </div>
    )
}

export default Dashboard