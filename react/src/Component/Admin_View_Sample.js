
import React, { useEffect, useState }  from "react";
//import BloodbankService_Login from '../Service/BloodbankService_Login'
import { Link } from 'react-router-dom';
import {Nav_bar} from './Nav_bar'
import {Nav_bar_admin} from './Nav_bar_admin'
import Card from 'react-bootstrap/Card'
import pic from '../image/person-circle.svg'
import * as Icon from 'react-bootstrap-icons';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import BloodbankService_User from '../Service/BloodbankService_User'
import {RowComponent} from './Table_Component'
import C_Modal from '../Component/Modal_Component'
import '../Component/pic_style.css';
import Table_Component from '../Component/Table_Component'

import axios from "axios";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal} from "react-bootstrap";
import Modal_Component from "../Component/Modal_Component"
import Admin_Sample_viewmore_modal  from "../Component/Admin_Sample_viewmore_modal"
import Admin_Add_Sample  from "../Component/Admin_Add_Sample"
//import BloodbankService_User from '../Service/BloodbankService_User'
import BloodbankService_admin from '../Service/BloodbankService_admin'


export default class Admin_View_Samples extends React.Component {
    constructor(props)
    {
      super(props)
      //console.log(this.props.location.state.details);
      this.state = {
        Group: "All",
        isopen : false,
        details :this.props.location.state.details,
        modal_data:[],
        table_details: [],
        add_modal_isopen:false
      }
      BloodbankService_User.viewall().then( (res) =>{
        let User_details = res.data;
        console.log(res.data)
        console.log("emplo")
        console.log(User_details)
        this.setState({ table_details: res.data})
        console.log(this.state.table_details)
      
              });

              //this.table_d = this.update_table.bind(this);
             //const  table_data = this.update_table.bind(this);
             const tab = [];
             
     
     //console.log(this.state.details)
  
    }
    openModal = () => this.setState({ isopen: true });
  closeModal = () => 
  {
    this.setState({ isopen: false });
    /*BloodbankService_User.viewall().then( (res) =>{
      let User_details = res.data;
      console.log(res.data)
      console.log("emplo")
      console.log(User_details)
      this.setState({ table_details: res.data})
      console.log(this.state.table_details)
    
            });*/
            if(this.state.Group ==="All")
            {
              BloodbankService_User.viewall().then( (res) =>{
                let User_details = res.data;
                console.log(res.data)
                console.log("emplo")
                console.log(User_details)
                this.setState({ table_details: res.data})
                console.log(this.state.table_details)
              
                      });
            }
            else
            {
    
    
            BloodbankService_User.view_by_group(this.state.Group).then( (res) =>{
              let tab_details = res.data;
              console.log(res.data)
              console.log("emplo")
             console.log(tab_details)
              this.setState({ table_details: tab_details})
              console.log("table ")
              console.log(this.state.table_details)
            
                    });
           
           
    
          }

  }
  open_add_modal = () =>this.setState({add_modal_isopen: true});
  close_add_modal = () =>
  {
    this.setState({ add_modal_isopen: false});
    /*BloodbankService_User.viewall().then( (res) =>{
      let User_details = res.data;
      console.log(res.data)
      console.log("emplo")
      console.log(User_details)
      this.setState({ table_details: res.data})
      console.log(this.state.table_details)
    
            });*/
            if(this.state.Group ==="All")
            {
              BloodbankService_User.viewall().then( (res) =>{
                let User_details = res.data;
                console.log(res.data)
                console.log("emplo")
                console.log(User_details)
                this.setState({ table_details: res.data})
                console.log(this.state.table_details)
              
                      });
            }
            else
            {
    
    
            BloodbankService_User.view_by_group(this.state.Group).then( (res) =>{
              let tab_details = res.data;
              console.log(res.data)
              console.log("emplo")
             console.log(tab_details)
              this.setState({ table_details: tab_details})
              console.log("table ")
              console.log(this.state.table_details)
            
                    });
           
           
    
          }


  }
    update_table()
    {
      this.table_data = this.state.table_details
    }
    
  
   
      SearchHandler = (event) => {
        //console.log("email ha")
        this.setState({Group: event.target.value});
        console.log(this.state.Group)
      }

      update_table = (event) =>
      {
        console.log("In update table" + this.state.Group)
        if(this.state.Group ==="All")
        {
          BloodbankService_User.viewall().then( (res) =>{
            let User_details = res.data;
            console.log(res.data)
            console.log("emplo")
            console.log(User_details)
            this.setState({ table_details: res.data})
            console.log(this.state.table_details)
          
                  });
        }
        else
        {


        BloodbankService_User.view_by_group(this.state.Group).then( (res) =>{
          let tab_details = res.data;
          console.log(res.data)
          console.log("emplo")
         console.log(tab_details)
          this.setState({ table_details: tab_details})
          console.log("table ")
          console.log(this.state.table_details)
        
                });
       
       

      }
    }
   
  
    edit = (data) => { 
      // Do whatever you want
      console.log("in edti")
      console.log(data)
      console.log(data.bloodBankID)
      BloodbankService_User.get_by_id(data.bloodBankID).then((res)=>{
        let fetched = res.data
        console.log("fetch")
        console.log(fetched)
        //this.setState({isopen:true})
        this.openModal()
        this.setState({modal_data: res.data})
      })
  }

  del = (data) => { 
    // Do whatever you want
    console.log("in edti")
    console.log(data)
    console.log(data.bloodBankID)
    BloodbankService_admin.delete_sample_by_id(data.bloodBankID).then((res)=>{
      let fetched = res.data
      console.log("fetch")
      console.log(fetched)

      if(fetched === "del")
      {
        BloodbankService_User.viewall().then( (res) =>{
            let User_details = res.data;
            console.log(res.data)
            console.log("emplo")
            console.log(User_details)
            this.setState({ table_details: res.data})
            console.log(this.state.table_details)
          
                  });
       
      }

      /*this.props.history.push({
        pathname:"/admin_view_sample",
        state:{
            details: this.state.details
        }
    })*/
      //this.setState({isopen:true})
      //this.openModal()
      //this.setState({modal_data: res.data})
    })
}
      render() {

          return ( 
            <div className="container">
                
            <header >
            <Nav_bar_admin data={this.state.details} ></Nav_bar_admin>
            </header>
            
            <br></br>
           
                <div className="container">
                <Navbar  variant="light">
    <Navbar.Brand >       </Navbar.Brand>
    <Nav className="mr-auto">
    <Form inline>
     
      <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label><strong>Search by Blood Group</strong>  </Form.Label>
    <Form.Label>  </Form.Label>
    <Form.Control as="select" custom   defaultValue={'All'}  onChange={this.SearchHandler}>
    <option >All</option>
      <option>A+ve</option>
      <option>B+ve</option>
      <option>AB+ve</option>
      <option>A1B+ve</option>
      <option>A1+ve</option>
      <option>O+ve</option>
    </Form.Control>
  </Form.Group>
  
      <Button variant="outline-primary" onClick={this.update_table}>Search</Button>
     
    </Form>
    </Nav>
    
   
  </Navbar>

  { /*(<Table_Component  data = {this.state.table_details}/> )
  <Table_Component  data = {this.state.table_details}/>
  <Table_Component  data = {this.state.table_details}/>*/}
  
  
 
  <Table striped bordered hover>
  <thead bgcolor="#007bff">
    <tr >
      <th >Blood Bank Id</th>
      <th>Sample Group</th>
      <th>No.of.Packs</th>
      <th>Location</th>
      <th>Mobile Number</th>
      <th>View Details</th>
      <th>Delete</th>
      
    </tr>
  </thead>
  <tbody>
  {
                           this.state.table_details.map(
                              (table_details,key)=>
                              //let id = table_details.bloodBankID
                                <tr key={table_details.bloodBankID}  data-item={table_details} >
                                    <td>{table_details.bloodBankID}</td>
                                    <td>{table_details.bloodGroup}</td>
                                     <td>{table_details.quantity}</td>
                                    <td>{table_details.address}</td>
                                    <td>{table_details.mobile}</td>
                                    <td><center>
                           <button onClick={() => this.edit(table_details)}  className="btn btn-primary">View/Update</button>
                           
                        </center>
                        </td>
                        <td><center><button onClick={() => this.del(table_details)}  className="btn btn-primary">Delete</button>
                        </center></td>
                                    
                                   
                                   
                                </tr>
                              
                            
    
                            )
                            //this.renderResultRows()
                        }
  </tbody>
                      </Table>
                      <Admin_Sample_viewmore_modal  show={this.state.isopen} data = {this.state.modal_data}  close = {this.closeModal} up={this.update_table}/>
                      <button  className="btn btn-primary" onClick = {this.open_add_modal}>Add Samples</button>
                      {/*<Admin_Add_Sample  show={this.state.open_add_modal} close = {()=>this.setState({open_add_modal:false})} up={this.update_table}/>*/}
                      <Admin_Add_Sample  show={this.state.add_modal_isopen} close = {this.close_add_modal} up={this.update_table}/>

                </div>
                
            
            </div>
          );
      }
  }
  
  
  

