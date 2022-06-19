import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

function ToastApp({show , ToastHandler , msg}) {
  return (
    <ToastContainer position="top-end" className="p-3">
    <Toast onClose={ToastHandler} show={show} bg={msg} delay={3000} autohide>
        <Toast.Header>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
        </Toast.Header>
        {msg=='success'? 
        <Toast.Body>UserLogged in Successfully</Toast.Body>:
        <Toast.Body>Invalid email/password</Toast.Body>

      }
    </Toast>
</ToastContainer>
  )
}

export default ToastApp