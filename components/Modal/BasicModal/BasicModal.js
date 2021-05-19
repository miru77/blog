import React from 'react'

import {Modal, Button} from "react-bootstrap"
import LoginForm from '../../Auth/LoginForm/LoginForm'



export default function BasicModal(props) {
        const { onHide} = props
    return (
      <Modal className="basic-modal"     backdrop= 'static'   keyboard = {false}
    
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="header">
        <Modal.Title id="contained-modal-title-vcenter">
           <span>Inicia sesión</span>   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <LoginForm onHide={onHide} />
      </Modal.Body>
    </Modal>
    )
}
 