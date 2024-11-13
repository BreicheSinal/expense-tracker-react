import React from "react";

import "../styles/base.css";
import "../styles/utilities.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/LoginForm.css";

import logo from "../assets/icons/LOGO.png";

const LoginForm = () => {
  return (
    <div>
      <div className="flex column center login white-bgColor">
        <img
          src={logo}
          alt="LOGO"
          width="100px"
          height="100px"
          className="align-self"
        />

        <h2 className="signUpt text-align primary-color">SIGN UP</h2>
        <h2 className="logint text-align primary-color">LOGIN</h2>

        <div className="flex column gap primary-color">
          <div className="flex column gap primary-color">
            <label for="username">Username</label>
            <input type="text" placeholder="Username" id="username" required />
          </div>

          <div className="flex column gap primary-color">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>

          <div>
            <hr className="primary-bgColor" />
          </div>

          <button
            type="submit"
            className="register button white-color"
            id="loginBttn"
          >
            LOG IN
          </button>
          <p className="text-align">OR</p>
          <button
            type="submit"
            className="register button white-color"
            id="signUpBttn"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
