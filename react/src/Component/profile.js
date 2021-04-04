
import React from "react";
import BloodbankService_Login from '../Service/BloodbankService_Login'
import { Link } from 'react-router-dom';
import {Nav_bar} from './Nav_bar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import pic from '../image/person-circle.svg'
import * as Icon from 'react-bootstrap-icons';
import '../Component/pic_style.css';

export default class Login extends React.Component {
    constructor(props)
    {
      super(props)
      //console.log(this.props.location.state.details);
      this.state = {
        email : '',
        password : '',
        details :this.props.location.state.details
      }
     console.log(this.state.details)
  
    }
    
  
    
  
      render() {
          return (
              
            <div className="container">
                
            <header >
            <Nav_bar data={this.state.details} ></Nav_bar>
            </header>
            <br></br>
            <Card  >
                {/*<Card.Img variant="top" src={pic} />*/}
                <div style={{ align: 'center' }}><Card.Img variant="top" src={pic} className="photo" style={{  }}/></div>
               
               
                {/*<Icon.ArrowRight />
                <img className="photo" src={pic} alt="BigCo Inc. logo"/>*/}
                <Card.Body>
                <Card.Text>
                   <div className="container">
                <Form>
  <Form.Group as={Row} controlId="ormPlaintextPassword">
    <Form.Label column sm="2">
    <strong>User Id </strong> 
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder={this.state.details.userId} readOnly />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <strong>First Name: </strong>
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder= {this.state.details.user_details.fname} readOnly />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <strong>Last Name: </strong>
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder= {this.state.details.user_details.lname} readOnly />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <strong>Email: </strong>
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder= {this.state.details.user_details.email} readOnly />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    <strong>Mobile Number: </strong>
    </Form.Label>
    <Col sm="10">
    <Form.Control type="text" placeholder= {this.state.details.user_details.mobileNumber} readOnly />
    </Col>
  </Form.Group>
  
</Form>
</div>
                </Card.Text>
              {/*  <p>
              <strong>User Id: </strong>  {this.state.details.userId}
              
            </p>
            <p>
              <strong>First Name: </strong>  {this.state.details.user_details.fname}
              
            </p>
            <p>
              <strong>Last Name: </strong>  {this.state.details.user_details.lname}
            </p>
            <p>
              <strong>Email:</strong>  {this.state.details.user_details.email}
            </p>
            <p>
            <strong>Mobile Number:</strong> {this.state.details.user_details.mobileNumber}
              </p>*/}
                
                </Card.Body>
            </Card>
        
          </div>
                      
                      );
      }
  }
  
  
  

//console.log(this.props.location.state.key);