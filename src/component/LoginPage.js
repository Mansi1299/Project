import React, { useState } from "react";
import "./mycss/log.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage=()=> {
  const navigate = useNavigate();

  const [logdetail, setLogdetail] = useState({ password: "", mailid: "" });
  function changehandle(e) {
    setLogdetail({
      ...logdetail,
      [e.target.name]: e.target.value,
    });
  }

  const check=(e)=> {
    e.preventDefault();
    const storedName = JSON.parse(localStorage.getItem("userinfo"));

    if (
      logdetail.mailid === storedName.mailid &&
      logdetail.password === storedName.password
    ) {
      navigate("/");
    } else {
      alert("Error on login");
    }
  }

  return (
    <>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              value={logdetail?.mailid}
              name="mailid"
              onChange={changehandle}
            />
            <input
              type="password"
              placeholder="password"
              value={logdetail?.password}
              name="password"
              onChange={changehandle}
            />
          </form>
          <button onClick={check}>login</button>
          <p class="message">
            Not registered?{" "}
            <button type="button" onClick={() => navigate("/signup")}>
              Create an account
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
