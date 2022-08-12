//Libraries
import { useState } from "react";
//Components
import CreateNewApplication from "./CreateNewApplication"
import JobIndex from "./JobIndex"
import Nav from "./Nav"

function Dashboard() {

    const [newApplic, setNewApplic] = useState(false)
    const [cardViewToggle, setCardViewToggle] = useState(true)

    return (
        <div className="dashboardStyle wrapper">
            <Nav
                setNewApplic={setNewApplic}
                newApplic={newApplic}
                ardViewToggle={cardViewToggle}
                setCardViewToggle={setCardViewToggle} />
            {newApplic ? <CreateNewApplication /> : ""}
            {cardViewToggle ? <JobIndex /> : ""}

        </div>
    )
}

export default Dashboard