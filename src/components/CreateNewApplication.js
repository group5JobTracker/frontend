

function CreateNewApplication() {
    return (
        <div >
            <form action="">
                <fieldset className="topHeader">
                    <h3>Job Title</h3>
                    <h4>Company</h4>
                    <h5>Location</h5>

                    <button className="saveApplication">Save</button>

                </fieldset>

                <fieldset className="leftInput">

                    <label htmlFor="status">Status</label>
                    <select name="statusOfApplication" id="status">
                        <option value="needToApply">Need to Apply</option>
                        <option value="applied">Applied</option>
                        <option value="screened">Screened</option>
                        <option value="interviewSet">Interview Set</option>
                        <option value="rejected">Rejected</option>
                        <option value="accepted">Accepted</option>
                    </select>

                    <label htmlFor="labels">Labels</label>

                    <label htmlFor="dataApplied">Data Applied</label>
                    <input type="text" id="dataApplied" placeholder="MM/DD/YYYY" />

                    <label htmlFor="cardColor">Card Color</label>
                    <select name="cardColor" id="cardColor">
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="blueviolet">Blueviolet</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                    </select>

                    <label htmlFor="contact">Contact</label>
                    <input type="email" id="contact" placeholder="youremail@email.com" />

                    <label htmlFor="alerts">Reminder Alerts
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>

                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" id="notes" cols="30" rows="10"></textarea>

                </fieldset>

                <fieldset className="rightInput">
                    <label htmlFor="jobLink">Application Link</label>
                    <input type="text" id="jobLink" placeholder="https//:...." />

                    <label htmlFor="jobDescription">Job Description</label>
                    <textarea name="jobDescription" id="jobDescription" cols="30" rows="10"></textarea>

                </fieldset>
            </form>

        </div>
    )
}

export default CreateNewApplication