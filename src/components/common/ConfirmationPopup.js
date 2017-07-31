/**
 * Created by sagardalvi on 14/07/17.
 */
import React, {PureComponent} from 'react';
import { Modal, Button } from 'react-bootstrap';
//import {connect} from 'react-redux';

export default class ConfirmationPopup extends PureComponent {


    render() {

        const {
            showPopup,
            message,
            handleOk,
            popupParams,
            handleCancel
            }=this.props;

        return (
            <div>
                <Modal
                    show={showPopup}
                    onHide={()=>handleCancel(popupParams)}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Confirm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {message}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>handleOk(popupParams)}>Yes</Button>
                        <Button onClick={()=>handleCancel(popupParams)}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
