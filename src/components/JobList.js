// import { useEffect, useState } from "react";
// import { axios } from "axios"
import JobSummary from "./JobSummary"

function JobList() {
    //make api call
    // const [jobs, setJobs] = useEffect([])
    // useEffect(() => {
    //     axios({
    //         url: "",
    //         method: "GET",
    //         params:{

    //         }
    //     }).then((data)=>{
    //          const dataREady = data.response
    //          
    // })
    // }, [])

    const jobArr = [
        { title: "Frontend Developer", company: "Shopify", location: "Toronto", dateApplied: "02/14/2022", stats: "Applied" },
        { title: "Backend Developer", company: "Amazon", location: "New York", dateApplied: "03/10/2022", stats: "Applied" },
        { title: "Web Designer", company: "Google", location: "San Francisco", dateApplied: "06/21/2022", stats: "Applied" },
        { title: "Project Manager", company: "Microsoft", location: "Vancouver", dateApplied: "10/24/2022", stats: "Aceepted" }
    ]

    return (
        <div className="jobDisplayed">
            {jobArr.map((jobPos, i) => <JobSummary title={jobPos.title} company={jobPos.company} location={jobPos.location} dateApplied={jobPos.dateApplied} stats={jobPos.stats} index={i} />)}

        </div>
    )
}

export default JobList