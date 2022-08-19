import React, { useEffect, useState, useRef } from "react";
// import { axios } from "axios"
import JobEditModal from "./JobEditModal"


function JobList({ columnsCardView, showCol1, showCol2, showCol3, showCol4 }) {

    const [cardEditModal, setCardEditModal] = useState(false)


    // useEffect(() => {
    //     console.log("my columns Card View:", columnsCardView);
    // })

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

    // const columnsDisplayed = (e) => {
    //     if (showCol1) {
    //         columnsCardView.currentTarget.style.classList.add(".col1");
    //         columnsCardView.currentTarget.style.classList.remove(".col2", ".col3", ".col4");
    //     } else if (showCol2) {
    //         columnsCardView.currentTarget.style.classList.add(".col2");
    //         columnsCardView.currentTarget.style.classList.remove(".col1", ".col3", ".col4")
    //     } else if (showCol3) {
    //         columnsCardView.currentTarget.style.classList.add(".col3");
    //         columnsCardView.currentTarget.style.classList.remove(".col1", ".col2", ".col4")
    //     } else if (showCol4) {
    //         columnsCardView.currentTarget.style.classList.add(".col4");
    //         columnsCardView.currentTarget.style.classList.remove(".col1", ".col2", ".col3")
    //     }
    // }

    const jobArr = [
        { title: "Frontend Developer", company: "Shopify", location: "Toronto", dateApplied: "02/14/2022", stats: "Applied" },
        { title: "Backend Developer", company: "Amazon", location: "New York", dateApplied: "03/10/2022", stats: "Applied" },
        { title: "Web Designer", company: "Google", location: "San Francisco", dateApplied: "06/21/2022", stats: "Applied" },
        { title: "Project Manager", company: "Microsoft", location: "Vancouver", dateApplied: "10/24/2022", stats: "Aceepted" }
    ]


    return (
        <div className="jobDisplayed" >
            {jobArr.map((jobPos, i) =>
                // <JobSummary title={jobPos.title} company={jobPos.company} location={jobPos.location} dateApplied={jobPos.dateApplied} stats={jobPos.stats} index={i} />
                <div
                    onClick={() => setCardEditModal(true)}
                    key={i}
                    id={i}
                    className={showCol1 ? "cardsJob col1" : showCol2 ? "cardsJob col2" : showCol3 ? "cardsJob col3" : "cardsJob col4"} ref={columnsCardView}
                >
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