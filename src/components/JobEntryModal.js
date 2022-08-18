//Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';


function JobEntryModal(props, { setModalShow }) {

    const handleClick = () => {
        setModalShow(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={handleClick}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="headerForm">
                        <h3>Job Title</h3>
                        <h4>Company</h4>
                        <h5>Location</h5>

                        <button className="saveApplication">Save <FontAwesomeIcon icon={faFloppyDisk} /></button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="bottomForm">
                    <div className="bottomLeftForm">
                        <div className="inputForm">

                            <div className="inputLeftForm">
                                <label htmlFor="status">Status</label>
                                <select name="statusOfApplication" id="status" >
                                    <option value="needToApply">Need to Apply</option>
                                    <option value="applied">Applied</option>
                                    <option value="screened">Screened</option>
                                    <option value="interviewSet">Interview Set</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="accepted">Accepted</option>
                                </select>

                                <label htmlFor="dateApplied">Date Applied</label>
                                <input type="text" id="dateApplied" placeholder="MM/DD/YYYY" />

                                <label htmlFor="contact">Contact</label>
                                <input type="email" id="contact" placeholder="youremail@email.com" />
                            </div>

                            <div className="inputRightForm">
                                <label htmlFor="labels">Labels</label>

                                <label htmlFor="cardColor">Card Color</label>
                                <select name="cardColor" id="cardColor" >
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
                            <textarea name="notes" id="notes" cols="30" rows="10" ></textarea>
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
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default JobEntryModal