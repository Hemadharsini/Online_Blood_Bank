
import React from "react";
import BloodbankService_Login from '../Service/BloodbankService_Login'
import { useHistory}  from "react-router-dom"

import { Redirect } from "react-router";

export default class SignUp extends React.Component {
  constructor()
  {
    super()
    this.state = {
      email : '',
      password : '',
      fname: '',
      lname: '',
      mobile: ''

    }
   // this.emailHandler = this.emailHandler.bind(this);
    //this.passwordHandler = this.passwordHandler.bind(this);

  }
  emailHandler = (event) => {
    //console.log("email ha")
    this.setState({email: event.target.value});
    //console.log(this.state.email)
  }

  passwordHandler = (event) => {
    //console.log("pass ha")
    this.setState({password: event.target.value});
   //console.log(this.state.password)
  }

  fnameHandler = (event) => {
    //console.log("pass ha")
    this.setState({fname: event.target.value});
   //console.log(this.state.password)
  }

  lnameHandler = (event) => {
    //console.log("pass ha")
    this.setState({lname: event.target.value});
  // console.log(this.state.lname)
  }

  mobileHandler = (event) => {
    //console.log("pass ha")
    this.setState({mobile : event.target.value});
   //console.log(this.state.password)
  }


  submit = (event) => {
    event.preventDefault();
    console.log("here check")
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.fname)
    console.log(this.state.lname)
    console.log(this.state.mobile)

  
    let lm  ={
        
        
        password: this.state.password,
        fname :this.state.fname,
        lname: this.state.lname,
        mobileNumber: this.state.mobile,
        email: this.state.email
        

        

    }
    console.log(lm)
   
console.log("data" )

   
    
    BloodbankService_Login.saveUser((lm)).then( (res) =>{
        let User_details = res.data;
        console.log(res.data)
        console.log("res")
        console.log(User_details)
        if(User_details === true)
        {
          document.getElementById("error").innerHTML = ""
          this.props.history.push({
            pathname:"/login",
            /*state:{
                key:"value"
             }*/
           });
         
        }
        else
        {
          document.getElementById("error").innerHTML = "Try Again"
        }
        
              });
              

   
  }


    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div id="error" style={{backgroundColor: "red"}}></div>
                <div className="form-group">
                 
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="Enter FirstName"  onChange={this.fnameHandler} required/>
                </div>
                <div className="form-group">
                 
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter LastName"  onChange={this.lnameHandler}required/>
                </div>

                <div className="form-group">
                 
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  onChange={this.emailHandler}required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={this.passwordHandler}required />
                </div>
                <div className="form-group">
                 
                    <label>Mobile Number</label>
                    <input type="tel" className="form-control" placeholder="Enter Mobile Number"  onChange={this.mobileHandler}required/>
                </div>

                

                <button type="submit" className="btn btn-primary btn-block" onClick={this.submit}>Submit</button>
                
               
            </form>
                    
                    );
    }
}
