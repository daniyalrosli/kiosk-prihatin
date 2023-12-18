// Login.js

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page" style={{ backgroundImage: `url('assets/img/logo/k2.png')`, backgroundSize: 'cover', minHeight: '11vh' }}>
      <div className="login-wrap">
        <h2>Login</h2>
        <div className="form">
          <input type="text" placeholder="Username" name="un" />
          <input type="password" placeholder="Password" name="pw" />
          <button>Login</button>
          <a href="#"></a>
          <center>
            <p>
              <Link to="/signup">Don't have an account yet? Sign Up</Link>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
