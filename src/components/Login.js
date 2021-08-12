import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/Form.css"
import { useHistory } from "react-router-dom";
import {useState, useEffect} from "react"
import UserPage from "./userPage"
const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: null
    });

    const [loggedinUser, setLoggedinUser]= useState({
        firstName:"",
        lastName:"",
        email:""
    });

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
            
            setLoggedinUser({
                firstName:data.firstName,
        lastName:data.lastName,
        email:data.email
            })
            alert(`the user ${loggedinUser.firstName} registered successfully`);
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

                <label for="psw">Password:</label>
                <input type="password" placeholder="Enter Password" name="password" required value={loginUser.password} onChange={(event)=>{
                setLoginUser({
                    ...loginUser,
                    password:event.target.value
                })
            }}/><br></br>


                
<Link to={{
    pathname: '/users',
    state: {loggedinUser},
  }}><button type="submit">LOGIN</button></Link><br></br>
                
                <p>
                    <a href="#">Reset Password</a>
                </p>
                <Link to="/"><button type="goback">HOME</button></Link>
                <button type="cancel" onClick={refreshPage}>CLEAR</button>
                </form>
            </div>
        </>
       
    )
}

export default Login
