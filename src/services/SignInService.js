import axios from "axios";
import { BASE_URL_API } from "./URLConstants";

class SignInService{

    //login employee based on role
    employeeLogin(userName,userPassword){

        return axios.get(BASE_URL_API+"/customer-master/login?userName="+userName+"&userPassword="+userPassword)
    }
}


export default new SignInService();