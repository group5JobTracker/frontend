import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function NewJobEntry() {

    const userSubmitForm = (e) => {
        e.preventdefault();

        // const database = getDatabase("backend")
        // const dbref = ref("database")
    }

    const handleUserInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <div >
            {/* <div className="formContainer"> */}
            <form className="formContainer" onSubmit={(e) => userSubmitForm(e)}>

                <div className="headerForm">
                    <h3>Job Title</h3>
                    <h4>Company</h4>
                    <h5>Location</h5>

                    <button className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                </div>

                <div className="bottomForm">
                    <div className="bottomLeftForm">
                        <div className="inputForm">

                            <div className="inputLeftForm">
                                <label htmlFor="status">Status</label>
                                <select name="statusOfApplication" id="status" onChange={(e) => handleUserInput(e)}>
                                    <option value="needToApply">Need to Apply</option>
                                    <option value="applied">Applied</option>
                                    <option value="screened">Screened</option>
                                    <option value="interviewSet">Interview Set</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="accepted">Accepted</option>
                                </select>

                                <label htmlFor="dateApplied">Date Applied</label>
                                <input type="text" id="dateApplied" placeholder="MM/DD/YYYY" onChange={(e) => handleUserInput(e)} />

                                <label htmlFor="contact">Contact</label>
                                <input type="email" id="contact" placeholder="youremail@email.com" onChange={(e) => handleUserInput(e)} />
                            </div>

                            <div className="inputRightForm">
                                <label htmlFor="labels">Labels</label>

                                <label htmlFor="cardColor">Card Color</label>
                                <select name="cardColor" id="cardColor" onChange={(e) => handleUserInput(e)}>
                                    <option value="red">Red</option>
                                    <option value="orange">Orange</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="blueviolet">Blueviolet</option>
                                    <option value="purple">Purple</option>
                                    <option value="pink">Pink</option>
                                </select>
                                <label htmlFor="alerts">Reminder Alerts
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>

                        <div className="noteForm">
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" id="notes" cols="30" rows="10" onChange={(e) => handleUserInput(e)}></textarea>
                        </div>
                    </div>

                    <div className="bottomRightForm">
                        <div className="inputForm">
                            <label htmlFor="jobLink">Application Link</label>
                            <input type="text" id="jobLink" placeholder="https//:...." />
                        </div>

                        <div className="noteForm">
                            <label htmlFor="jobDescription">Job Description</label>
                            <textarea name="jobDescription" id="jobDescription" cols="30" rows="10"></textarea>
                        </div>

                    </div>

                </div>

            </form>
            {/* </div> */}

        </div>
    )
}

export default NewJobEntry