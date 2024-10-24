import React from 'react'
import { Link } from 'react-router-dom'
import "./form.css"

const Signinpage = () => {
  return (
    <>
    <div className='register'>
    <div className="imgpage">
     <img
   src="amazon.png"
     alt="logo"
     className="amazon-logo"
   />
   </div>
     <div className="signup">
      
   <form action='' method='post'>
     <h2>Sign in</h2>
     <div className="input">
     <label>Mobile number</label>
     <input type="number" name='mobileno:' id='mobileno:' placeholder='Mobile number' required/>
     </div><div className="input">
     <label>Password</label>
    
     <input type="text" name='password' id='password' placeholder='Atleast 6 characters' required/>
     </div>
     <button type='submit'> Sign in</button>
   </form>
   <hr />

   <p>By creating an account or logging in, you agree to Amazon’s <a href="">Conditions of Use</a> and <a href="">Privacy Policy</a>.</p>


         </div>
        

     </div> 
     <button className="account">
        <Link to="/register" > Create Your Amazon Account</Link>
</button>
     </>
      
  )
}

export default Signinpage
