import React, { Fragment } from "react";
import { Link } from "react-router-dom";



function Signup() {

    return (
        
        <Fragment>
            

<div className="login-wrap">
  <h2>Sign Up</h2>
  <div className="form">
    <input type="text" placeholder="Full name" name="un" />
    <input type="text" placeholder="Email" name="em" />
    <input type="password" placeholder="Password" name="un" />
    <input type="password" placeholder="Username" name="un" />

                
    <button> Sign Up </button>
    <a href="#">
      {" "}
    <p><Link to="/login">Already have account ? Login now </Link></p>
    </a>
  </div>
</div>



     </Fragment>
    )
}

export default Signup