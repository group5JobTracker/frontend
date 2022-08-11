//Libraries
import { useState } from "react";
//Components
import CreateNewApplication from "./CreateNewApplication"
import JobIndex from "./JobIndex"
import Nav from "./Nav"

function Dashboard() {

    const [newApplic, setNewApplic] = useState(false)

    // const handleNewApplic = () => {
    //     if (newApplic === false) {
    //         setNewApplic(true)
    //     } else {
    //         setNewApplic(false)
    //     }
    // }

    return (
        <div className="dashboardStyle wrapper">
            <Nav setNewApplic={setNewApplic} newApplic={newApplic} />
            {newApplic ? <CreateNewApplication /> : "null"}
            <JobIndex />

        </div>
    )
}

export default Dashboard