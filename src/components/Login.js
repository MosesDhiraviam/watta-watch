import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/Form.css"
import { useHistory } from "react-router-dom";
import {useContext} from 'react'
import {useState, useEffect} from "react"
import UserContext from "../context/Videocontext"
const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: null
    });

    const {loggedinUsers,setLoggedinUsers}=  useContext(UserContext);

    const submitForm=(e)=>{

        e.preventDefault();

        fetch("https://watta-watch-api.herokuapp.com/auth/login",{
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin' ,
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        }).then(res=>res.json())
        .then(data=>{
            alert(`Successfully logged in as ${data.firstName} `);
            setLoggedinUsers({
                firstName:data.firstName,
        lastName:data.lastName,
        email:data.email
            })
            console.log(loggedinUsers)
        }).catch(err=>{
            console.log(`ERROR : ${err}`);
        })
    }

    let history = useHistory();
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            
            <div className="loginCreateAccount">
                <p>Don't have an account yet? Please <a onClick={()=>{
                    history.push("/registerPage");
                }}>sign up</a> to create an account.</p>
            </div>
            <div className="loginContainer">
            <h1>
            Login Here
        </h1>
        <form action="/" method="POST" onSubmit={submitForm}>
                <label for="email">Email:</label>
                <input type="email" placeholder="Enter Email" name="email" required value={loginUser.email} onChange={(event)=>{
                setLoginUser({
                    ...loginUser,
                    email:event.target.value
                })
            }}/><br/><br/>

                <label for="password">Password:</label>
                <input type="password" placeholder="Enter Password" autoComplete="on" name="password" required value={loginUser.password} onChange={(event)=>{
                setLoginUser({
                    ...loginUser,
                    password:event.target.value
                })
            }}/><br></br>


                
<button type="submit">LOGIN</button><br></br><br></br>
                
                
                <Link to="/users"><button type="goback">USER DASHBOARD</button></Link>
                <button type="cancel" onClick={refreshPage}>CLEAR</button>
                </form>
            </div>
        </>
       
    )
}

export default Login
