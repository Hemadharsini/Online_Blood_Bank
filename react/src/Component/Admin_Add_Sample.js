//console.log("in add modal")

import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";
import BloodbankService_admin from '../Service/BloodbankService_admin'
import BloodbankService_User from '../Service/BloodbankService_User'
const Admin_Add_Sample  = (props)=> {
    console.log(props)
    console.log("Table details")
    //console.log(props.tab_details )
   
  /*var dayDiff = 4
  if(typeof props.data.createdOn !== 'undefined')
  {
    var date = JSON.stringify(props.data.createdOn).substring(1,11)
    var today = new Date()
    console.log(date+"       "+today)
    var diff = today.getTime()-new Date(date).getTime()
     dayDiff = diff/(1000 * 60 * 60 * 24)
    console.log(diff+"       "+dayDiff)
    
  }*/

  const[BloodBankID,setBloodBankID] = useState('')
  const[BloodGroup,setBloodGroup] = useState('')
  const[Quantity,setQuantity] = useState('')
  const[Mobile,setMobile] = useState('')
  const[Address,setAddress] = useState('')
  const[Phlevel,setPhlevel] = useState('')
  const[Pressure,setPressure] = useState('')
  //const[Property,setProperty] = useState('')
  const[Availability,setAvailability] = useState('')

  //const getbid = () =>{setBloodBankID(props.data.bloodBankID)}
  const getbg = (event) =>{setBloodGroup(event.target.value)}
  const getq = (event) =>{setQuantity(event.target.value)}
  const getmob = (event) =>{setMobile(event.target.value)}
  const getadd = (event) =>{setAddress(event.target.value)}
  const getph = (event) =>{setPhlevel(event.target.value)}
  const getpres = (event) =>{setPressure(event.target.value)}
 const update = (e)=>
 {
     //console.log(this.BloodBankID)
     console.log("In update")
     //setBloodBankID(props.data.bloodBankID)
     //setBloodGroup(props.data.bloodGroup)
     /*if(typeof BloodBankID === 'undefined'  || )
     {
         setBloodBankID(props.data.bloodBankID)
     }
     if(typeof BloodGroup === 'undefined')
     {
         setBloodGroup(props.data.bloodGroup)
     }
     if(typeof Quantity === 'undefined')
     {
        setQuantity(props.data.quantity)
     }
     if(typeof Mobile === 'undefined')
     {
        setMobile(props.data.mobile)
     }
     if(typeof Address === 'undefined')
     {
        setAddress(props.data.address)
     }
     if(typeof Phlevel === 'undefined')
     {
        setPhlevel(props.data.phlevel)
     }
     if(typeof Pressure === 'undefined')
     {
        setPressure(props.data.bloodPressure)
     }*/
     
     //console.log(BloodBankID)

     
     if(parseInt(Quantity)>0)
     {
       setAvailability(1);
     }
     else
     {
       setAvailability(1);
     }
     if(BloodBankID === '' || BloodGroup ==='' || Quantity==='' || Mobile==='' ||Address ===''||Phlevel===''||Pressure === ''  || Availability==='')
     {
        document.getElementById('error').innerHTML = "All data should be filled "
     }
     else
     {
        document.getElementById('error').innerHTML = " "
     }
     console.log(BloodGroup)
     console.log(Quantity)
     console.log(Mobile)
     console.log(Address)
     console.log(Phlevel)
    // console.log(Mobile)
     console.log(Pressure )
     let id = BloodBankID
     let details = {
      
      'bloodGroup' : BloodGroup,
      'bloodPressure':Pressure,
      'phlevel': Phlevel,
      'address' :Address,
      'mobile' : Mobile,
      'quantity':Quantity,
      'availability' : Availability
       

     }

     BloodbankService_admin.add_sample(details).then((res)=>
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
          <Modal.Title id="bloodBankID" >
            Enter the Details
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        <div id="error" style={{backgroundColor: "red"}}></div>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="bloodGroup">
      <Form.Label>Blood Group</Form.Label>
      <Form.Control type="text" placeholder="Blood Group" onChange={getbg} />
    </Form.Group>

    <Form.Group as={Col} controlId="quantity">
      <Form.Label>No.of. Packs</Form.Label>
      <Form.Control type="text" placeholder="Quantity" onChange={getq} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="mobile">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Mobile" onChange={getmob} />
  </Form.Group>

  <Form.Group as={Col} controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Address"  onChange={getadd} />
  </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="phlevel">
      <Form.Label>PH- Level</Form.Label>
      <Form.Control type="text" placeholder="PH Level" onChange={getph} />
    </Form.Group>

    <Form.Group as={Col} controlId="bloodPressure">
      <Form.Label>Pressure</Form.Label>
      <Form.Control type="text" placeholder= "Pressure "onChange={getpres} />
    </Form.Group>

  </Form.Row>

 
  <Form.Row>
  {/*<Form.Group as={Col} controlId="update">
   
  </Form.Group>
    */}
  </Form.Row>

</Form>
        </Modal.Body>
        <Modal.Footer>
       < Button variant="primary" onClick ={update} >
   Add
  </Button>
          <Button onClick={props.close}>Close</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
  export default Admin_Add_Sample  ;
  
  