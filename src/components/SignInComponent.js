import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";

import SignInService from "../services/SignInService";
import logo from "../images/logo.jpg"
import back_v1 from "../images/back_v1.jpg";


export default function SignInComponent() {
    const [isSuccess, setIsSuccess] = useState(true)
    const [roleId, setRoleId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [meetings, setMeetings] = useState([])

    const [meetId, setMeetId] = useState('');
    const [meetStartDate, setMeetStartDate] = useState('');
    const [meetEndDate, setMeetEndDate] = useState('');
    const [meetCreatedByEmpId, setMeetCreatedByEmpId] = useState('');
    const [meetCreatedByEmpEId, setMeetCreatedByEmpEId] = useState('');
    const [meetCreatedByEmpName, setMeetCreatedByEmpName] = useState('');

    const [meetCreatedByRoleId, setMeetCreatedByRoleId] = useState('');
    const [meetCreatedByRoleName, setMeetCreatedByRoleName] = useState('');
    const [meetCreatedByDeptId, setMeetCreatedByDeptId] = useState('');
    const [meetCreatedByDeptName, setMeetCreatedByDeptName] = useState('');
    const [meetCreatedByDesigId, setMeetCreatedByDesigId] = useState('');
    const [meetCreatedByDesigName, setMeetCreatedByDesigName] = useState('');
    const [meetVenue, setMeetVenue] = useState('');
    const [meetTitle, setMeetTitle] = useState('');
    const [meetDescription, setMeetDescription] = useState('');
    const [meetStatus, setMeetStatus] = useState('');
    const [remark, setRemark] = useState('');


    const [announTypeId, setAnnounTypeId] = useState('');
    const [announTypeName, setAnnounTypeName] = useState('');
    const [announcements, setAnnouncements] = useState([])

    console.log(meetings)



    
    const employeeLogin = (e) => {

        SignInService.employeeLogin(userName, userPassword).then(res => {
            if (res.data.success) {

                Cookies.set('custId', res?.data?.responseData?.custId);
                Cookies.set('roleId', res?.data?.responseData?.roleId);
                Cookies.set('roleName', res?.data?.responseData?.roleName);              
                Cookies.set('custName', res?.data?.responseData?.custName);
                Cookies.set('custEmailId', res?.data?.responseData?.custEmailId);



                if (res.data.responseData.roleId === 1)  //for GM
                    window.location.replace("http://localhost:3004/");


                if (res.data.responseData.roleId === 3)  //for Employee
                    window.location.replace("http://localhost:3006/");

                if (res.data.responseData.roleId === 2)  //for HOD
                    window.location.replace("http://localhost:3004/");

                if (res.data.responseData.roleId === 4)  //for GM
                    window.location.replace("http://localhost:3005/");

                /*
                if (res.data.responseData.roleId === 1) //for GM 
                    window.location.replace("http://localhost:8080/ADMIN");

              
    
                if (res.data.responseData.roleId === 3) //for Employee 
                window.location.replace("http://localhost:8080/EMPLOYEE"); 
    
                    if (res.data.responseData.roleId === 2) //for HOD
                        window.location.replace("http://localhost:8080/HOD");
                        
                          if (res.data.responseData.roleId === 4) //for GM 
                    window.location.replace("http://localhost:8080/GM");
                    */


                /*
                if (res.data.responseData.roleId === 1) //for ADMIN 
                   window.location.replace("http://192.162.3.51:8080/ADMIN");
   
               if (res.data.responseData.roleId === 3) //for Employee 
               window.location.replace("http://192.162.3.51:8080/EMPLOYEE"); 
   
                   if (res.data.responseData.roleId === 2) //for HOD
                       window.location.replace("http://192.162.3.51:8080/HOD");
                       
                       if (res.data.responseData.roleId === 4) //for GM 
                   window.location.replace("http://192.162.3.51:8080/GM");
   
                       */

            }
            else {
                alert(res.data.responseMessage);
                setUserPassword('');
                setUserName('');
            }
        }

        ).catch((err) => {
            console.log("err=", err)
            //  console.log(err.response.data.details)
            alert(err?.response?.data?.details)
        });
        // window.location.reload(); 
    }


    const clearLoginDetails = (e) => {
        setUserName('')
        setUserPassword('')
                   }
            



    return (

        <div className="row container-fluid">
            <div className="row">
                <div align="center">
                    <img src={logo} className='img-responsive' style={{ height: 100, width: 500 }}></img>
                </div>
            </div>

            <div className="row" style={{ marginTop: 50, backgroundImage: `url(${back_v1})` }}>
                <div className="col-sm-4">
                
              
                </div>
                <div className="col-sm-4" style={{ marginTop: 100 }}>
                    <div class="jumbotron">
                        <h2 align="center">Login</h2>
                        <form className="form-horizontal" onSubmit={(e) => {
                            e.preventDefault(); // Prevent default form submission
                            employeeLogin(roleId, userName, userPassword);
                        }}>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="userName">User Name:</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="userName" placeholder="Enter User Name here" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="userPassword">Password:</label>
                                <div className="col-sm-5">
                                    <input type="password" className="form-control" id="userPassword" placeholder="Enter Passeord Name here" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                                </div>
                            </div>

                       
                        <div className="col-sm-offset-6">
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={() => employeeLogin(roleId, userName, userPassword)} > Submit</button>
                            <button type="reset" className="btn btn-danger col-sm-offset-1" data-dismiss="modal" onClick={()=>clearLoginDetails()}>Clear</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-4">
                 
                </div>

            </div>


        </div>
    );
}