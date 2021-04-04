import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/sample";
const Donor_URL = "http://localhost:8080/donor";


class BloodbankService_User   {

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
    }*/
    viewall()
    {
        let url = API_BASE_URL
        return axios.get(url);
    }
    view_by_group(group)
    {
        console.log("In user sev "+ group)
        let url = API_BASE_URL+"/"+group
        return axios.post(url);

    }
    get_by_id(id)
    {
        console.log("In user sev "+ id)
        let url = API_BASE_URL+"/"+id
        return axios.get(url);
    }
    view_donor()
    {
        let url = Donor_URL
        return axios.get(url);
    }
    view_donor_by_group(group)
    {
        console.log("In user sev "+ group)
        let url = Donor_URL+"/"+group
        return axios.post(url);

    }
    get_donor_by_id(id)
    {
        console.log("In user sev "+ id)
        let url = Donor_URL+"/"+id
        return axios.get(url);
    }



  
}

export default  new BloodbankService_User();