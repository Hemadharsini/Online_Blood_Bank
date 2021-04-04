
//import React from "react";
import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/";

class BloodbankService_Login   {

    checkUser(login){
        let url = API_BASE_URL+"login"
        console.log(url);
        console.log(login.email)
        console.log(login.password)
        return axios.post(url,login);
    }

    saveUser(loginModel)
    {
        let url = API_BASE_URL+"signup"
        return axios.post(url,loginModel);
    }
    viewall()
    {
        let url = API_BASE_URL+"all"
        return axios.get(url);
    }
    



    /*createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }*/
}

export default  new BloodbankService_Login();