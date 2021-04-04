import logo from './logo.svg';
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import '@fortawesome/fontawesome-free/css/all.min.css';
 //import 'bootstrap-css-only/css/bootstrap.min.css'; 
//import FormPage from "./component/Login"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./Component/Login";
import SignUp from "./Component/SignUp"
import profile from "./Component/profile"
import View_Samples from "./Component/View_Samples"
import View_Donors from "./Component/View_Donors"
import Logout_User from "./Component/Logout_User"
import history from "./Component/history"
import Admin_View_Samples from "./Component/Admin_View_Sample"
import Admin_Donor_View_page from "./Component/Admin_Donor_View_page"
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
function App() {
  return (
    <div className="App">
      <Router history={history}>
              
             {/*<div className="container">*/ } 
                  <Switch> 
                        <Route path = "/" exact component = {Login}></Route>
                        <Route path = "/login" component = {Login}></Route>
                        <Route path = "/SignUp" component = {SignUp}></Route>
                         <Route path = "/profile" component = {profile}></Route>
                        <Route path = "/viewsamples" component = {View_Samples}></Route>
                        <Route path = "/viewdonors" component = {View_Donors}></Route>
                        <Route path = "/logout" component = {View_Donors}></Route>
                        <Route path = "/logout" component = {View_Donors}></Route>
                        <Route path = "/admin_view_sample" component = {Admin_View_Samples}></Route>
                        <Route path = "/admin_view_Donor" component = {Admin_Donor_View_page}></Route> 
                  </Switch>
             {/* </div>*/}
           
      </Router>
  
    </div>
  );
}

export default App;
