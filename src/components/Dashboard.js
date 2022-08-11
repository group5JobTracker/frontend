
import CreateNewApplication from "./CreateNewApplication"
import JobIndex from "./JobIndex"
import Nav from "./Nav"

import { useState } from "react";

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
            <Nav />
            {/* if() */}
            {/* <CreateNewApplication /> */}
            <JobIndex />

        </div>
    )
}

export default Dashboard