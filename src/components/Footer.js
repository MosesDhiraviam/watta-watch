import React from 'react'
import "../assets/css/Footer.css"
import { useHistory } from "react-router-dom";

const Footer = () => {
    let history = useHistory();
    return (
        <>
            <div className="foot_main">
                        
                <div className="foot_div1">
                    <ul className ="foot_ul1">
                        <li className ="content_li"><a className="links" onClick={()=>{
                            history.push("/");
                        }} >FAQ</a></li>
                        <li className ="content_li"><a  className="links" onClick={()=>{
                            history.push("/");
                        }} >
                            Investor Relations</a></li>
                        <li className ="content_li"><a className="links"  onClick={()=>{
                            history.push("/");
                        }} >Privacy</a></li>
                        <li className ="content_li"><a  className="links"  onClick={()=>{
                            history.push("/");
                        }} >Speed Test</a></li>
                    </ul>
                </div>
<div className="foot_div2">
                    <ul className ="foot_ul2">
                    <li className ="content_li"><a  className="links" onClick={()=>{
                            history.push("/loginPage");
                        }} >Login</a></li>
                        <li className ="content_li"><a  className="links" onClick={()=>{
                            history.push("/registerPage");
                        }} >Register</a></li>
                        <li className ="content_li"><a  className="links" onClick={()=>{
                            history.push("/moviesPage");
                        }} >Movies Section</a></li>
                        <li className ="content_li"><a  className="links" onClick={()=>{
                            history.push("/tvShowsPage");
                        }} >Tv Shows Section</a></li>
                    </ul>
                </div>

                
<div className="foot_div4">
                    <ul className ="foot_ul4">
                        <li className ="content_li"><a  className="links" href="https://www.linkedin.com/in/moses-dhiraviam/">Linked In</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.facebook.com/jebaraj.moses.7/">Facebook</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.instagram.com/_imno.prodigy/">Instagram</a></li>
                    </ul>
                </div>
                
            </div>
        </>

    )
}

export default Footer
