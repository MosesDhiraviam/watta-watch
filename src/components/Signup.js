import React from 'react'
import "../assets/css/Form.css"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"

const Signup = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: null
    });

    const submitForm=(e)=>{

        e.preventDefault();

        fetch("https://watta-watch-api.herokuapp.com/auth/register",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            alert(`the user ${data.firstName} registered successfully`);
        }).catch(err=>{
            console.log(`ERROR : ${err}`);
        })
    }

    return (
        <div>
        
        
         
        <div className="registerContainer">
        <h1>
            Register Here
        </h1>
        <form action="/" method="POST" onSubmit={submitForm}>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" required value={user.firstName} onChange={(event)=>{
                setUser({
                    ...user,
                    firstName:event.target.value
                })
            }} />

            <label for="email">Email:</label>
            <input type="email" placeholder="Enter email" name="email" required value={user.email} onChange={(event)=>{
                setUser({
                    ...user,
                    email:event.target.value
                })
            }}/><br></br><br></br>

            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" required value={user.lastName} onChange={(event)=>{
                setUser({
                    ...user,
                    lastName:event.target.value
                })
            }}/>

            <label for="password">Password:</label>
            <input type="password" placeholder="Enter password" name="password" required value={user.password} onChange={(event)=>{
                setUser({
                    ...user,
                    password:event.target.value
                })
            }}/><br></br><br></br>



            <label for="terms">Terms and Conditions:</label>
            <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required></input>
            <label type="terms">I have read and agreed to the <a href="/">terms and conditions.</a></label><br></br>

           
            <Link to="/"><button type="goback">CANCEL</button></Link>
            <button type="submit">SUBMIT</button>
            </form>
        </div>
    
    </div>
    )
}

export default Signup
