//Libraries
import React, { useState } from "react";
//Components
import NewJobEntry from "./NewJobEntry"
import JobList from "./JobList"
import Nav from "./Nav"
import Context from "../context/context";
function Dashboard() {
    const context = React.useContext(Context)
    const [newApplic, setNewApplic] = useState(false)
    const [cardViewToggle, setCardViewToggle] = useState(true)
    console.log(context)
    return (
        <div className="dashboardStyle">
            <div className="wrapper">
                <Nav
                    setNewApplic={setNewApplic}
                    newApplic={newApplic}
                    cardViewToggle={cardViewToggle}
                    setCardViewToggle={setCardViewToggle} />
                {/* {newApplic ? <NewJobEntry /> : ""} */}
                {cardViewToggle ? <JobList /> : ""}

            </div>

        </div>
    )
}

export default Dashboard