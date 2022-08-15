//Libraries
import { useState } from "react";
//Components
import NewJobEntry from "./NewJobEntry"
import JobList from "./JobList"
import Nav from "./Nav"

function Dashboard() {

    const [newApplic, setNewApplic] = useState(false)
    const [cardViewToggle, setCardViewToggle] = useState(true)

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