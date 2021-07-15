import React from 'react'
import "../assets/css/Form.css"
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
        
        
         
        <div className="registerContainer">
        <h1>
            Register Here
        </h1>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" required />

            <label for="email">Email:</label>
            <input type="email" placeholder="Enter email" name="email" required /><br></br><br></br>

            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" required />

            <label for="psw">Password:</label>
            <input type="password" placeholder="Enter password" name="psw" required /><br></br><br></br>

            <label for="birthDate">Date of Birth:</label>
            <input type="date" name="birthDate" required />

            <label for="cpsw">Confirm Password:</label>
            <input type="password" placeholder="Confirm password" name="cpsw" required /><br></br><br></br>

            <label for="mobile">Mobile No:</label>
            <input type="tel" name="mobile" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" required /><br></br><br></br>

            <label for="terms">Terms and Conditions:</label>
            <input type="checkbox" id="termsCheckbox" name="termsCheckbox" value="termsCheckbox" required></input>
            <label type="terms">I have read and agreed to the <a href="/">terms and conditions.</a></label><br></br>

           
            <Link to="/"><button type="goback">CANCEL</button></Link>
            <button type="submit">SUBMIT</button>
        </div>
    
    </div>
    )
}

export default Signup
