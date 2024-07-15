import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="sub_container">
        <div className="form_container">
          <div className="wrapper">
            <div className="login_form">
              <div className="login_form_top">
                <p className="first-child">ALREADY MEMBERS</p>
                <p className="second-child">Need Help ?</p>
              </div>
              <form>
                <input type="text" placeholder="Enter your name" />
                <input type="password" placeholder="Enter your password" />
              </form>
              <button>SIGN IN</button>
            </div>
            <div className="bottom">
              <p>don't have an account yet?</p>
              <p>create an acount </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
