import React, { useEffect, useState } from "react";
// import { axios } from "axios"
import JobEditModal from "./JobEditModal"


function JobList() {
    const [edited, setEdited] = useState(false)
    const [modalShow, setModalShow] = useState(false);


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



    const handleCardEdit = ((e) => {
        console.log(e)
    })

    return (
        <div className="jobDisplayed" >
            {jobArr.map((jobPos, i) =>
                // <JobSummary title={jobPos.title} company={jobPos.company} location={jobPos.location} dateApplied={jobPos.dateApplied} stats={jobPos.stats} index={i} />
                <div onClick={() => setModalShow(true)} key={i} id={i} className="cardsJob">
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

            <JobEditModal show={modalShow} onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />

        </div>
    )
}

// const Div = () => {
//     return (
//         <div>
//             <h4>{props.title}</h4>
//             <h5>{props.company}</h5>
//             <h6>{props.location}</h6>
//         </div>
//     )
// }

export default JobList