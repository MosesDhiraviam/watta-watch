import React from 'react'
import {useContext} from 'react'
  import UserContext from "../context/Videocontext"
  import "../assets/css/Form.css"

  

const UsersPage = () => {
    

    const {loggedinUsers}=  useContext(UserContext);

    
    return (
        <div className="userDash">
            <h1>USER DASHBOARD</h1>
            <label for="first Name">Fisrt Name : {loggedinUsers.firstName}</label><br/>
            <label for="last Name">Last Name : {loggedinUsers.lastName}</label><br/>
            <label for="email">Email : {loggedinUsers.email}</label>
            {console.log(loggedinUsers)}
           {loggedinUsers.firstName}
        </div>
    )
}

export default UsersPage