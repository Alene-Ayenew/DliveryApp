import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
function LoginPopUp({ setShowLogin }) {
  const [currState, settCurrState] = useState("login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your secret" required />
        </div>
        <button>{currState === "sign up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to thee terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            Create a new account? <span onClick={()=>settCurrState("sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=>settCurrState("login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
