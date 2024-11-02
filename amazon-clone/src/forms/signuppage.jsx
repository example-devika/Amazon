import { Link } from 'react-router-dom'
import "./form.css"
import axios from "axios";
import React, { useState } from "react";

const Signuppage = () => {
 

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");

    const [Password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8888/api/amazon/auth/register", {
                username,
                email,
                mobilenumber,
                Password,

            });
            alert(response.data.message);  // Display server message
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

   

  return (
    <div className='register'>
       <div className="imgpage">
        <img
      src="amazon.png"
        alt="logo"
        className="amazon-logo"
      />
      </div>
        <div className="signup">
         
      <form action='' method='post' onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <div className="input">
        <label>Your name</label>
        <input type="text" name='name' id='name'placeholder='First and Last name' onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className="input">
        <label>Email</label>
        <input type="email" name='name' id='name'placeholder='First and Last name' onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="input">

        <label>Mobile number</label>
        <input type="number" name='mobileno:' id='mobileno:' placeholder='Mobile number' onChange={(e) => setMobilenumber(e.target.value)} required/>
        </div><div className="input">
        <label>Password</label>
       
        <input type="text" name='password' id='password' placeholder='Atleast 6 characters' onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <button type='submit' className='button'> Sign Up</button>
      </form>
      <hr />

      <p>Already have an Account?<Link to="/signin">Sign in</Link></p>
      <p>By creating an account or logging in, you agree to Amazon’s <a href="">Conditions of Use</a> and <a href="">Privacy Policy</a>.</p>


            </div>
        </div>
      
  )
}


export default Signuppage
