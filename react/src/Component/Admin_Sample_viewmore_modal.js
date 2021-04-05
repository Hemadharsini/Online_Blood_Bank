
import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";
import BloodbankService_admin from '../Service/BloodbankService_admin'
import BloodbankService_User from '../Service/BloodbankService_User'
const Admin_Sample_viewmore_modal = (props)=> {
    console.log(props)
    console.log("Table details")
    //console.log(props.tab_details )
   
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

  /*const[BloodBankID,setBloodBankID] = useState(props.data.bloodBankID)
  const[BloodGroup,setBloodGroup] = useState(props.data.bloodGroup)
  const[Quantity,setQuantity] = useState(props.data.quantity)
  const[Mobile,setMobile] = useState(props.data.Mobile)
  const[Address,setAddress] = useState(props.data.address)
  const[Phlevel,setPhlevel] = useState(props.data.phlevel)
  const[Pressure,setPressure] = useState(props.data.bloodPressure)
  const[Created,setCreated] = useState(props.data.createdOn)
  const[Availability,setAvailability] = useState(props.data.availability)

  const getbid = () =>{setBloodBankID(props.data.bloodBankID)}
  const getbg = (event) =>{setBloodGroup(event.target.value)}
  const getq = (event) =>{setQuantity(event.target.value)}
  const getmob = (event) =>{setMobile(event.target.value)}
  const getadd = (event) =>{setAddress(event.target.value)}
  const getph = (event) =>{setPhlevel(event.target.value)}
  const getpres = (event) =>{setPressure(event.target.value)}*/
  //const[Phlevel,setPhlevel] = useState()

 var BloodBankID = (props.data.bloodBankID)
  var BloodGroup = (props.data.bloodGroup)
  var Quantity = (props.data.quantity)
  var Mobile = (props.data.mobile)
  var Address = (props.data.address)
  var Phlevel = (props.data.phlevel)
  var Pressure = (props.data.bloodPressure)
  var Created= (props.data.createdOn)
  var Availability = (props.data.availability)

  const getbid = () =>{BloodBankID = (props.data.bloodBankID)}
  const getbg = (event) =>{BloodGroup = (event.target.value)}
  const getq = (event) =>{Quantity = (event.target.value)}
  const getmob = (event) =>{Mobile = (event.target.value)}
  const getadd = (event) =>{ Address = (event.target.value)}
  const getph = (event) =>{Phlevel= (event.target.value)}
  const getpres = (event) =>{Pressure = (event.target.value)}
    /*if(props.data.bloodBankID !== 'undefined' )
    {
        setBloodBankID(props.data.bloodBankID)
    }
    if(props.data.bloodGroup !== 'undefined' )
    {
        
        setBloodGroup(props.data.bloodGroup)
    }
    if(props.data.quantity !== 'undefined' )
    {
        setQuantity(props.data.quantity)
    }
    if(props.data.address !== 'undefined' )
    {
        setAddress(props.data.address)
    }
    if(props.data.mobile !== 'undefined' )
    {
        setMobile(props.data.mobile)
    }
    if(props.data.phlevel !== 'undefined' )
    {
        setPhlevel(props.data.phlevel)
    }
    if(props.data.bloodPressure !== 'undefined' )
    {
        setPressure(props.data.bloodPressure)
    }*/
    //if(props.data !== 'undefined' )
    //{
        //setBloodBankID(props.data.bloodBankID)
        //setPressure(props.data.bloodPressure)
    //}
   /* useEffect(() => {
        console.log("In ussee")
        if(BloodBankID === ' ')
     {
         setBloodBankID(props.data.bloodBankID)
     }
     if(BloodGroup === ' ')
     {
         setBloodGroup(props.data.bloodGroup)
     }
     if(Quantity === ' ')
     {
        setQuantity(props.data.quantity)
     }
     if(Mobile === ' ')
     {
        setMobile(props.data.Mobile)
     }
     if(Address === ' ')
     {
        setAddress(props.data.address)
     }
     if(Phlevel === ' ')
     {
        setPhlevel(props.data.phlevel)
     }
     if(Pressure === ' ')
     {
        setPressure(props.data.bloodPressure)
     }
     console.log(BloodBankID)
     console.log(BloodGroup)
     console.log(Quantity)
     console.log(Mobile)
     console.log(Address)
     console.log(Phlevel)
    // console.log(Mobile)
     console.log(Pressure )
        
      });*/
 const update = (e)=>
 {
     //console.log(this.BloodBankID)
     console.log("In update")
     BloodBankID = (props.data.bloodBankID)
     //setBloodGroup(props.data.bloodGroup)
    /* if(typeof BloodBankID === 'undefined')
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
     }
     if(typeof Created === 'undefined')
     {
        setCreated(props.data.createdOn)
     }
     if(typeof Availability === 'undefined')
     {
      console.log("in avali")
       console.log(parseInt(Quantity))
       if(parseInt(Quantity)>0)
       {
        setAvailability(1)
       }
       else
       {
        setAvailability(0)
       }
        
     }*/
     if(parseInt(Quantity)>0)
     {
       Availability = (1);
     }
     else
     {
       Availability = (0);
     }
     
     
     
     console.log(BloodBankID)
     console.log(BloodGroup)
     console.log(Quantity)
     console.log(Mobile)
     console.log(Address)
     console.log(Phlevel)
    // console.log(Mobile)
     console.log(Pressure )
     console.log(Availability)
     console.log(Created)
     let id = BloodBankID
     let details = {
      'bloodBankID' :BloodBankID,
      'bloodGroup' : BloodGroup,
      'bloodPressure':Pressure,
      'phlevel': Phlevel,
      'address' :Address,
      'mobile' : Mobile,
      'quantity':Quantity,
      'createdOn':Created,
      'availability': Availability
       

     }

     BloodbankService_admin.update_sample(id,details).then((res)=>
     {
            console.log(res.data)
            if(res.data == 'Updated')
            {
              document.getElementById('error').innerHTML = " "
            }
            else
            {
              document.getElementById('error').innerHTML = "Not updated please try again!!"
              BloodbankService_User.viewall().then( (res) =>{
                let User_details = res.data;
                console.log(res.data)
                console.log("emplo")
                console.log(User_details)
               // props.setState({ table_details: res.data})
                //console.log(this.state.table_details)
                //this.props.up
              
                      });
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
            Sample ID : {props.data.bloodBankID}
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
        <div id="error" style={{backgroundColor: "red"}}></div>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="bloodGroup">
      <Form.Label>Blood Group</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodGroup}  onChange={getbg} />
    </Form.Group>

    <Form.Group as={Col} controlId="quantity">
      <Form.Label>Packs</Form.Label>
      <Form.Control type="text" placeholder={props.data.quantity} onChange={getq} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="mobile">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder={props.data.mobile} onChange={getmob} />
  </Form.Group>

  <Form.Group as={Col} controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder={props.data.address}  onChange={getadd} />
  </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="phlevel">
      <Form.Label>PH- Level</Form.Label>
      <Form.Control type="text" placeholder={props.data.phlevel} onChange={getph} />
    </Form.Group>

    <Form.Group as={Col} controlId="bloodPressure">
      <Form.Label>Pressure</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodPressure} onChange={getpres} />
    </Form.Group>

  </Form.Row>

 
  <Form.Row>
  <Form.Group as={Col} controlId="update">
   
  </Form.Group>
  
  </Form.Row>

</Form>
        </Modal.Body>
        <Modal.Footer>
       < Button variant="primary" onClick ={update} >
   Update 
  </Button>
          <Button onClick={props.close}>Close</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
  export default Admin_Sample_viewmore_modal ;
  
  