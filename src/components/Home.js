import React,{useState} from 'react';
import "./Home.css";


export default function Home(props) {

  return (
    <div className="container">
      <div className="left">
        <div className="tagline-div">
          <h3 className="tagline">School for Deep Tech founders</h3>
        </div>
      </div>

      <div className="right">
        <div className="login-register-div">
          <div className="login-register">
            <div
              className="login selected"
              onClick={(e) => {
                if (e.target.classList[1] !== "selected") {
                  e.target.classList.add("selected");
                  document
                    .querySelector(".register")
                    .classList.remove("selected");
                  document
                    .querySelector(".register-confirm-passwor-div")
                    .classList.add("display-toggle");
                }
              }}
            >
              Login
            </div>
            <div
              className="register"
              onClick={(e) => {
                if (e.target.classList[1] !== "selected") {
                  e.target.classList.add("selected");
                  document.querySelector(".login").classList.remove("selected");
                  document
                    .querySelector(".register-confirm-passwor-div")
                    .classList.remove("display-toggle");
                }
              }}
            >
              Register
            </div>
          </div>
          <div className="login-form">
            <div className="register-email-div">
              Email :{" "}
              <input
                className="email Input"
                type="email"
                placeholder="E-Mail"
              />
            </div>
            <div className="register-password-div">
              Password :{" "}
              <input
                className="password Input"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="register-confirm-passwor-div display-toggle">
              Confirm Password :{" "}
              <input
                className="confirm-password Input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
