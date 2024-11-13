import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div
        id="errorMsg"
        class="center errorMsg text-align bold primary-bgColor white-color"
        style="display: none"
      ></div>
      <div class="flex column center login white-bgColor">
        <img
          src="assets/icons/LOGO.png"
          alt="LOGO"
          width="100px"
          height="100px"
          class="align-self"
        />

        <h2 class="signUpt text-align primary-color">SIGN UP</h2>
        <h2 class="logint text-align primary-color">LOGIN</h2>

        <div class="flex column gap primary-color">
          <div class="flex column gap primary-color">
            <label for="username">Username</label>
            <input type="text" placeholder="Username" id="username" required />
          </div>

          <div class="flex column gap primary-color">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>

          <div>
            <hr style="margin-top: 10px" class="primary-bgColor" />
          </div>

          <button
            type="submit"
            class="register button white-color"
            id="loginBttn"
          >
            LOG IN
          </button>
          <p class="text-align">OR</p>
          <button
            type="submit"
            class="register button white-color"
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
