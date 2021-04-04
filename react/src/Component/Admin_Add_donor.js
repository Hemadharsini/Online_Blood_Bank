//console.log("in add modal")

import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";
import BloodbankService_admin from '../Service/BloodbankService_admin'
import BloodbankService_User from '../Service/BloodbankService_User'
const Admin_Add_donor = (props)=> {
    console.log(props)
    console.log("Table details")
   
   

  const[ID,setID] = useState('')
const[BloodGroup,setBloodGroup] = useState('')
  const[Weight,setWeight] = useState('')
  const[Mobile,setMobile] = useState('')
  const[Email,setEmail] = useState('')
  const[Active,setActive] = useState(1)
  const[Phlevel,setPhlevel] = useState('')
  const[Pressure,setPressure] = useState('')
  const[Age,setAge] = useState('')
  const[Availability,setAvailability] = useState(1)
  const[Fname,setFname] = useState('')
  const[Lname,setLname] = useState('')
  const[Role,setRole] = useState('donor')



  const getdid = () =>{setID(props.data.Id)}
  const getbg = (event) =>{setBloodGroup(event.target.value)}
  const getwei = (event) =>{setWeight(event.target.value)}
  const getmob = (event) =>{setMobile(event.target.value)}
  const getem = (event) =>{setEmail(event.target.value)}
  const getavail = (event) =>{setAvailability(event.target.value)}
  const getactiv = () =>{(props.data.donar_details !== undefined)?(setActive(props.data.donar_details.active)):setActive(' ')}
  const getph = (event) =>{setPhlevel(event.target.value)}
  const getpress = (event) =>{setPressure(event.target.value)}
  const getage = (event) =>{setAge(event.target.value)}
  const getfname = (event) =>{setFname(event.target.value)}
  const getlname = (event) =>{setLname(event.target.value)}
  const getrole = () =>{(props.data.donar_details !== undefined)?(setRole(props.data.donar_details.role)):setRole(' ')}
 
 
 
  const update = (e)=>
 {
     
     console.log("In update")
     
     if(ID === '' || BloodGroup ==='' ||Weight==='' || Mobile==='' ||Email ===''||Phlevel===''||Pressure === ''  || Age==='' || Fname==='' || Lname==='')
     {
        document.getElementById('error').innerHTML = "All data should be filled "
     }
     else
     {
        document.getElementById('error').innerHTML = " "
     }
     let sub = {
        'active': Active,
        'email': Email,
        'fname': Fname,
        'lname': Lname,
        'mobileNumber': Mobile,
        'role': Role

     }

     let details = {
        'age': Age,
        'availability': Availability,
        'bloodGroup': BloodGroup,
        'bloodPressure': Pressure,
        'phlevel': Phlevel,
        'weight': Weight,
        donar_details: sub
        
        
        
        
     }
     BloodbankService_admin.add_donor(details).then((res)=>
     {
        console.log(res.data)
        if(res.data == 'Added')
        {
          document.getElementById('error').innerHTML = " "
        }
        else
        {
          document.getElementById('error').innerHTML = "Not Added Try again"
          
        }

     });
     
    


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
              Enter Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div id="error" style={{backgroundColor: "red"}}></div>
          <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"  onChange={getfname}/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name"   onChange={getlname}/>
      </Form.Group>
  
      
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control type="text" placeholder="Blood Group"  onChange={getbg}/>
      </Form.Group>
    <Form.Group as={Col} controlId="formGridAddress1">
      <Form.Label>Weight</Form.Label>
      <Form.Control type="text" placeholder="Weight"  onChange={getwei}/>
    </Form.Group>
  
    <Form.Group as={Col} controlId="formGridAddress2">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="Age" onChange={getage}/>
    </Form.Group>
    </Form.Row>
  
    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>PH- Level</Form.Label>
        <Form.Control type="text" placeholder="PH - Level"  onChange={getph}/>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Pressure</Form.Label>
        <Form.Control type="text" placeholder="Pressure" onChange={getpress}/>
      </Form.Group>
  
      {/*<Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="text" placeholder="Availability"  onChange={getavail}/>
    </Form.Group>*/}
    </Form.Row>
  
    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text" placeholder = "Mobile Number" onChange={getmob} />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" onChange={getem}/>
      </Form.Group>
  
     
    </Form.Row>
  
 
  </Form>
          </Modal.Body>
          <Modal.Footer>
          < Button variant="primary" onClick ={update} >
     Add   </Button>
            <Button onClick={props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
  export default Admin_Add_donor  ;
  
  