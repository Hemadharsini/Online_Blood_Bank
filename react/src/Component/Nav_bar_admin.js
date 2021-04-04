import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavLink from 'react-bootstrap/NavLink'
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';
//import { IconName } from "react-icons/md";
import  Logout_Modal_Component from '../Component/Logout_User'
import history from '../Component/history';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

export class Nav_bar_admin extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.data);
        this.state = 
        {
            details : this.props.data,
            isopen : false
        }
    }
    openModal = () => this.setState({ isopen: true });
  closeModal = () => this.setState({ isopen: false });

    profile (event)
    {
        this.props.history.push({
            pathname:"/profile",
            state:{
                details: this.state.details
             }
           });
    }
    edit = (data) => { 
        // Do whatever you want
        console.log("in edti")
        //console.log(data)
       // console.log(data.id)
       this.setState({ isopen: true })
          //this.openModal()
          //this.setState({modal_data: res.data})
  }
    
    render()
    {
        return (
            <Navbar bg="primary" variant="dark">
 <Navbar.Brand > Blood Bank Service-Admin</Navbar.Brand>
 <Navbar.Brand >            {/*<MDBIcon icon="caret-right" />*/}   <Icon.ArrowRight /> </Navbar.Brand>
 
 <Navbar.Brand className="vl">  </Navbar.Brand>
 <Navbar.Brand > <Link to={{ pathname: '/admin_view_sample', state: { details: this.state.details} }} style={{ textDecoration: 'none', color: 'white' }}>View Sample</Link></Navbar.Brand>
 <Navbar.Brand className="vl">  </Navbar.Brand>
    <Navbar.Brand ><Link to={{ pathname: '/admin_view_Donor', state: { details: this.state.details} }} style={{ textDecoration: 'none', color: 'white' }}>View Donor</Link></Navbar.Brand>
    <Navbar.Brand className="vl">  </Navbar.Brand>
        <Navbar.Brand ><Button onClick={() => this.edit(this.state.details)} > Logout</Button></Navbar.Brand>
        < Logout_Modal_Component show={this.state.isopen} data = {this.state.details}  close = {this.closeModal}/>
    
         </Navbar>
  
    

        )
    }
}

export default Nav_bar_admin;
