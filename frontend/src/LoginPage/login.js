import React, { useState } from "react";
import "./loginPage.css";
import Axios from "axios";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3333/api/v1/auth/sign-in", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.success === true) {
        console.log("Success========: " + response.data.success);
        console.log("In frontend register");
        window.location.pathname = "/";
      }
    });
  };
  return (
    <>
      <nav className="login_nav">
        <div className="icon">
          <Link to="/">
            <ChevronLeftIcon className="svg_icon" />
          </Link>
        </div>
        <div className="title_login">
          <h2>
            <span style={{ color: "#007fad" }}>Rad</span>
            <span style={{ color: "orange" }}>iss</span>
            <span style={{ color: "red" }}>on</span>
          </h2>
        </div>
        <div></div>
      </nav>
      <div className="login_body">
        <div className="login">
          <h2>Login or create account</h2>
          <p style={{ paddingTop: "10px" }}>
            Enter your e-mail address to start
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                className="email"
                id="email"
                placeholder="Email address"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>

            <button onClick={handleLogin} className="login_btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <p style={{ marginTop: "55px", fontFamily: "Arial", fontSize: "15px" }}>
          Reminder: by signing up, you are agreeing to our Privacy Policy and
          Terms of Use.
        </p>
      </div>
    </>
  );
}

export default Login;
