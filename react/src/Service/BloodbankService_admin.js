import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/admin";

class BloodbankService_admin   {

    delete_sample_by_id(id)
    {
        return axios.delete(API_BASE_URL + '/sample/' + id);
    }
    delete_donor_by_id(id)
    {
        return axios.delete(API_BASE_URL + '/donor/' + id);
    }
    update_sample(bloodBankID,bloodbank)
    {
        let url = API_BASE_URL+'/sample/'+bloodBankID;
        return axios.put(url,bloodbank);
    }
    update_donor(id,donor)
    {
        let url = API_BASE_URL+'/donor/'+id;
        return axios.put(url,donor);
    }
    add_sample(bloodbank)
    {
        let url = API_BASE_URL+'/addSample';
        return axios.post(url,bloodbank)
    }
    add_donor(donor)
    {
        let url = API_BASE_URL+'/addDonor';
        return axios.post(url,donor)
    }
    //delete_donor_by_id

    /*checkUser(login){
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
    */



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

export default  new BloodbankService_admin();