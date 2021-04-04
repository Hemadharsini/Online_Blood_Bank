
import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";
//import history from '../Component/history';

import {useHistory}  from "react-router-dom"
const Logout_Modal_Component = (props)=> {
    console.log(props)
    
    
   /*const func = () =>
    {
        /*props.history.push({
            pathname:"/login"
        })*/
       // window.location.href = "/login"
   // }


    return (
      <Modal
      {...props}
      
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title id="contained-modal-title-vcenter">
           Do you want to logout
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
        <Button onClick={() => window.location.href = "/login"}>Yes</Button>
          <Button onClick={props.close}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default Logout_Modal_Component;
  
  