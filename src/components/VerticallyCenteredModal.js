import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function VerticallyCenteredModal(props, { setModalShow }) {

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

                        <button className="saveApplication">Save </button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default VerticallyCenteredModal