
import React  ,{ useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Form, Col } from "react-bootstrap";
import BloodbankService_admin from "../Service/BloodbankService_admin";

const Donor_Update_Component = (props)=> {
  console.log("props")
    console.log(props.data)
    /*const[ID,setID] = useState(props.data.Id)
  const[BloodGroup,setBloodGroup] = useState(props.data.bloodGroup)
  const[Weight,setWeight] = useState(props.data.weight)
  const[Mobile,setMobile] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.mobileNumber :' ')
  const[Email,setEmail] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.email :' ')
  const[Active,setActive] = useState()
  const[Phlevel,setPhlevel] = useState(props.data.phlevel)
  const[Pressure,setPressure] = useState(props.data.bloodPressure)
  const[Age,setAge] = useState(props.data.age)
  const[Availability,setAvailability] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.active :' ')
  const[Fname,setFname] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.fname :' ')
  const[Lname,setLname] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.lname :' ')
  const[Role,setRole] = useState(( props.data.donar_details !== undefined )? props.data.donar_details.role :' ')

/*const[ID,setID] = useState()
const[BloodGroup,setBloodGroup] = useState()
  const[Weight,setWeight] = useState()
  const[Mobile,setMobile] = useState()
  const[Email,setEmail] = useState()
  const[Active,setActive] = useState()
  const[Phlevel,setPhlevel] = useState()
  const[Pressure,setPressure] = useState()
  const[Age,setAge] = useState()
  const[Availability,setAvailability] = useState()
  const[Fname,setFname] = useState()
  const[Lname,setLname] = useState()
  const[Role,setRole] = useState()*/



  /*const getdid = () =>{setID(props.data.Id)}
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
  */

  var ID = (props.data.Id)
  var BloodGroup = (props.data.bloodGroup)
  var Weight = (props.data.weight)
  var Mobile = (( props.data.donar_details !== undefined )? props.data.donar_details.mobileNumber :' ')
  var Email = (( props.data.donar_details !== undefined )? props.data.donar_details.email :' ')
  var Active = (( props.data.donar_details !== undefined )? props.data.donar_details.active :' ')
  var Phlevel = (props.data.phlevel)
  var Pressure = (props.data.bloodPressure)
  var Age = (props.data.age)
  var Availability = (( props.data.donar_details !== undefined )? props.data.donar_details.active :' ')
  var Fname = (( props.data.donar_details !== undefined )? props.data.donar_details.fname :' ')
  var Lname = (( props.data.donar_details !== undefined )? props.data.donar_details.lname :' ')
  var Role = (( props.data.donar_details !== undefined )? props.data.donar_details.role :' ')

  const getdid = () =>{ ID = (props.data.Id)}
  const getbg = (event) =>{BloodGroup = (event.target.value)}
  const getwei = (event) =>{Weight = (event.target.value)}
  const getmob = (event) =>{Mobile = (event.target.value)}
  const getem = (event) =>{Email = (event.target.value)}
  const getavail = (event) =>{Availability = (event.target.value)}
  const getactiv = () =>{(props.data.donar_details !== undefined)?( Active = (props.data.donar_details.active)):Active =(' ')}
  const getph = (event) =>{Phlevel = (event.target.value)}
  const getpress = (event) =>{Pressure = (event.target.value)}
  const getage = (event) =>{Age = (event.target.value)}
  const getfname = (event) =>{Fname = (event.target.value)}
  const getlname = (event) =>{Lname = (event.target.value)}
  const getrole = () =>{(props.data.donar_details !== undefined)?(Role = (props.data.donar_details.role)):Role = (' ')}


  console.log("In begg")
  console.log(ID)
  console.log(BloodGroup)
  console.log(Weight)
  console.log(Mobile)
  console.log(Email)
  console.log(Active)
  console.log(Phlevel)
  console.log(Pressure)
  console.log(Age)
  console.log(Availability)
  console.log(Fname)
  console.log(Lname)
  console.log(Role)


  const update = (e)=>
  {
      /*console.log("In dono update")
      console.log(ID)
      console.log(BloodGroup)
      console.log(Weight)
      console.log(Mobile)
      console.log(Email)
      console.log(Active)
      console.log(Phlevel)
      console.log(Pressure)
      console.log(Age)
      console.log(Availability)
      console.log(Fname)
      console.log(Lname)
      console.log(Role)*/


      //console.log(this.BloodBankID)
      //console.log("In update")
      //setBloodBankID(props.data.bloodBankID)
      //setBloodGroup(props.data.bloodGroup)
      /*setID(props.data.Id)
      
      
      
      
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
          
      });*/
       /*if(typeof ID === 'undefined'  || ID !== props.data.Id) 
       {
        setID(props.data.Id)
       }
       if(typeof Fname ==='undefined' || Fname !== props.data.donar_details.fname)
       {
           setFname(props.data.donar_details.fname)
       }
       if(typeof Lname === 'undefined' || Lname !== props.data.donar_details.lname)
       {
           setLname(props.data.donar_details.Lname)
        }
        if(typeof BloodGroup === 'undefined' || BloodGroup !== props.data.donar_details.bloodGroup)
       {
           setBloodGroup(props.data.bloodGroup)
       
        }
        if(typeof Weight === 'undefined' || Weight !== props.data.weight)
        {
            setWeight(props.data.weight)
         }
         if(typeof Age === 'undefined' || Age !== props.data.age)
        {
            setWeight(props.data.age)
         }*/
         let sub = {
          'active': Active,
          'email': Email,
          'fname': Fname,
          'lname': Lname,
          'mobileNumber': Mobile,
          'role': Role
  
       }
  
       let details = {
         'Id': ID,
          'age': Age,
          'availability': 1,
          'bloodGroup': BloodGroup,
          'bloodPressure': Pressure,
          'phlevel': Phlevel,
          'weight': Weight,
          donar_details: sub
          
          
          
          
       }
       BloodbankService_admin.update_donor(ID,details).then((res)=>
       {
        console.log(res.data)
        if(res.data == "Updated")
        {
          document.getElementById('error').innerHTML = " "
        }
        else
        {
          document.getElementById('error').innerHTML = "Not Added Try again"
          
        }

       });
       /*BloodbankService_admin.add_donor(details).then((res)=>
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
  
       });*/
         

         console.log("In dono update")
         console.log(ID)
         console.log(BloodGroup)
         console.log(Weight)
         console.log(Mobile)
         console.log(Email)
         console.log(Active)
         console.log(Phlevel)
         console.log(Pressure)
         console.log(Age)
         console.log(Availability)
         console.log(Fname)
         console.log(Lname)
         console.log(Role)
        

     
     
 
 
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
            Donor ID : {props.data.Id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div id="error" style={{backgroundColor: "red"}}></div>
        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder={( props.data.donar_details !== undefined )? props.data.donar_details.fname :' '}  onChange={getfname}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder={( props.data.donar_details !== undefined )? props.data.donar_details.lname :' '}   onChange={getlname}/>
    </Form.Group>

    
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Blood Group</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodGroup}  onChange={getbg}/>
    </Form.Group>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Weight</Form.Label>
    <Form.Control type="text" placeholder={props.data.weight}  onChange={getwei}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder={props.data.age} onChange={getage}/>
  </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>PH- Level</Form.Label>
      <Form.Control type="text" placeholder={props.data.phlevel}  onChange={getph}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Pressure</Form.Label>
      <Form.Control type="text" placeholder={props.data.bloodPressure} onChange={getpress}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Availability</Form.Label>
      <Form.Control type="text" placeholder={(props.data.availability)}  onChange={getavail}/>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control type="text" placeholder = {( props.data.donar_details !== undefined )? props.data.donar_details.mobileNumber :' '} onChange={getmob} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder={( props.data.donar_details !== undefined )? props.data.donar_details.email :' '} onChange={getem}/>
    </Form.Group>

   
  </Form.Row>

 {/*} <Button variant="primary" type="submit">
    
    </Button>*/}
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
  export default Donor_Update_Component;
  
  