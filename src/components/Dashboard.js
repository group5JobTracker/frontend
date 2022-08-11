//Libraries
import { useState } from "react";
//Components
import CreateNewApplication from "./CreateNewApplication"
import JobIndex from "./JobIndex"
import Nav from "./Nav"

function Dashboard() {

    const [newApplic, setNewApplic] = useState(false)

    const handleNewApplic = () => {
        if (newApplic === false) {
            setNewApplic(true)
        } else {
            setNewApplic(false)
        }
    }

    return (
        <div className="dashboardStyle wrapper">
            <Nav handleNewApplic={() => handleNewApplic(newApplic)} />
            {newApplic ? <CreateNewApplication newApplic={newApplic} /> : "null"}
            <JobIndex />

        </div>
    )
}

export default Dashboard