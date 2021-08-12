import React from 'react'
import '../assets/css/Navbar.css';
import Logo from "../assets/images/wattaWatch.jpeg"
import { useHistory } from "react-router-dom";
const Navbar = () => {
    let history = useHistory();

    function loginRedirect() {
      history.push("/loginPage");
    }
    function registerRedirect() {
        history.push("/registerPage");
      }
      function movieSectionRedirect() {
        history.push("/moviesPage");
      }
      function Tvshowssectionredirect() {
        history.push("/tvShowsPage");
      }
      function allSectionRedirect() {
        history.push("/showsPage");
      }
      function homeRedirect() {
        history.push("/");
      }
    
    return (
        <div className="navbar_main">
        <div className="app_logo">
        <img src={Logo} alt="neflix_logo" height="60px" onClick={()=>{
            homeRedirect();
        }}></img>
        <button className="moviesSection-btn" onClick={()=>{
                allSectionRedirect();
            }}>All</button>
        <button className="moviesSection-btn" onClick={()=>{
                movieSectionRedirect();
            }}>Movies</button>
        <button className="tvshowsSection-btn" onClick={()=>{
                Tvshowssectionredirect();
            }}>Tv Shows</button>
        <div className="nav_right">You Name it, We Have it.
            <button className="btn_join_now" onClick={()=>{
                registerRedirect();
            }}>JOIN NOW</button>
            <button className="btn_sign" onClick={()=>{
                loginRedirect();
            }}>SIGN IN</button>
            
        </div>
        </div>
    </div>
    )
}

export default Navbar
