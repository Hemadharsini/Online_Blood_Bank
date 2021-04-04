
import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";

const Modal_Component = (props)=> {
    console.log(props)
   
  var dayDiff = 4
  if(typeof props.data.createdOn !== 'undefined')
  {
    var date = JSON.stringify(props.data.createdOn).substring(1,11)
    var today = new Date()
    console.log(date+"       "+today)
    var diff = today.getTime()-new Date(date).getTime()
     dayDiff = diff/(1000 * 60 * 60 * 24)
    console.log(diff+"       "+dayDiff)
    
  }


    return (
      <Modal
      {...props}
      
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title id="contained-modal-title-vcenter">
            Sample ID : {props.data.bloodBankID}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Blood Group</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodGroup} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Packs</Form.Label>
      <Form.Control type="text" placeholder={props.data.quantity} readOnly />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder={props.data.mobile} readOnly />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder={props.data.address} readOnly />
  </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>PH- Level</Form.Label>
      <Form.Control type="text" placeholder={props.data.phlevel} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Pressure</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodPressure} readOnly />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Availability</Form.Label>
      <Form.Control type="text" placeholder={(props.data.quantity)>0?("YES"):("No")} readOnly />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
  <Form.Label>No.of.Days</Form.Label>
  {/*<Form.Control type="text" placeholder={Math.round(this.daydiff)} readOnly />*/}
  <Form.Control type="text" placeholder={Math.round(dayDiff)} readOnly />
  </Form.Group>

   {/*<Button variant="primary" type="submit">
    
  </Button>*/}
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default Modal_Component;
  
  