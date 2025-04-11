import React, { useState } from "react";
import "./Login.css";
function Login() {
  return (
    <div className="loginPage">
      <div className="container">
        <div className="formBack">
          <div className="signUp">
            <h2>Sign Up</h2>
            <form action="#">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="login ">
            <h2>Login</h2>
            <form action="#">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
