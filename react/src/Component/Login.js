
import React from "react";
import BloodbankService_Login from '../Service/BloodbankService_Login'
import {useHistory}  from "react-router-dom"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import { AlignMiddle } from "react-bootstrap-icons";

export default class Login extends React.Component {
  constructor()
  {
    super()
    this.state = {
      email : '',
      password : '',
      details :[]
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

  submit = (event) => {
    event.preventDefault();
    console.log("here check")
    console.log(this.state.email)
    console.log(this.state.password)
    let login = {email: this.state.email,
      password: this.state.password}
      BloodbankService_Login.checkUser(login).then( (res) =>{
        let User_details = res.data;
        console.log(res.data)
        console.log("emplo")
        console.log(User_details)
        if(Object.keys(User_details).length === 0)
        {
          console.log("here in obj")
          document.getElementById("error").innerHTML = "Incorrect email/password"
        }
        else
        {
          this.setState({details:User_details})
          document.getElementById("error").innerHTML = ""
          if(this.state.details.user_details.role === "User")
          {
            console.log("role")
            this.props.history.push({
              pathname:"/profile",
              state:{
                  details: this.state.details
              }
            });
          }
          else
          {
            this.props.history.push({
              pathname:"/admin_view_sample",
              state:{
                  details: this.state.details
              }
            });
          }
        }
              });
   // alert("You are submitting " + this.state.username);
  }

  

    render() {
        return (
          <div className="container">
            <div className="container">
              <header>      </header>
              <br></br>
              <br></br>
              <br></br>
          <Card   style={{ width: '60rem',  align: 'middle' }}>
             <Card.Body>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                  <div id="error" style={{backgroundColor: "red"}}></div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  onChange={this.emailHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  onChange={this.passwordHandler} />
                </div>

                
                <button type="submit" className="btn btn-primary btn-block" onClick={this.submit}>Submit</button>
                
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        
                        <p>Click here to  <a href="http://localhost:8081/SignUp">SignUp</a></p>
                       
                        
                    </div>
                 </div>
            </form>
            </Card.Body>
            </Card>
            </div>
            </div>
                    
                    );
    }
}


