//Libraries
import { useState } from "react";
//Components
import JobList from "./JobList"
import NavBar from "./NavBar"

function Dashboard() {

    const [newApplic, setNewApplic] = useState(false)
    const [cardViewToggle, setCardViewToggle] = useState(true)

    return (
        <div className="dashboardStyle">
            <div className="wrapper">
                <NavBar
                    setNewApplic={setNewApplic}
                    newApplic={newApplic}
                    cardViewToggle={cardViewToggle}
                    setCardViewToggle={setCardViewToggle} />
                {cardViewToggle ? <JobList /> : ""}

            </div>

        </div>
    )
}

export default Dashboard