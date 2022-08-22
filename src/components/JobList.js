import React, { useEffect, useState, useRef } from "react";
// import { axios } from "axios"
import JobEditModal from "./JobEditModal"


function JobList({ showCol1, showCol2, showCol3, showCol4, searchTerm }) {

    const [cardEditModal, setCardEditModal] = useState(false)

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
        <div className="jobDisplayed" >
            {jobArr.filter((val) => {
                if (searchTerm == "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.company.toLowerCase().includes(searchTerm.toLowerCase()) || val.location.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((jobPos, i) =>
                <div
                    onClick={() => setCardEditModal(true)}
                    key={i}
                    id={i}
                    className={showCol1 ? "cardsJob col1" : showCol2 ? "cardsJob col2" : showCol3 ? "cardsJob col3" : "cardsJob col4"} >
                    <div className="principal">
                        <h4>{jobPos.title}</h4>
                        <h5>{jobPos.company}</h5>
                        <h6>{jobPos.location}</h6>
                    </div>
                    <div className="complement">
                        <p>Date Applied: {jobPos.dateApplied}</p>
                        <p>Status: {jobPos.stats}</p>
                    </div>
                </div>
            )}
            {cardEditModal ? <JobEditModal setCardEditModal={setCardEditModal} /> : ""}

        </div>
    )
}


export default JobList