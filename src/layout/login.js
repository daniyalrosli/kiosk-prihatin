import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Login() {
    
    return (
        <Fragment>

        <div className="login-wrap">
  <h2>Login</h2>
  <div className="form">
    <input type="text" placeholder="Username" name="un" />
    <input type="password" placeholder="Password" name="pw" />
    <button>Login </button>
    
 
              
  <p><Link to="/signup">Dont have an account yet? Sign Up </Link></p>
    
  </div>
</div>



        </Fragment>
    )
}

export default Login;