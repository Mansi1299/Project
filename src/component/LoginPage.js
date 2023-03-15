import React, { useState } from "react";
import "./mycss/log.css";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
// import { ProvideContext } from "./ContextAPi";
import axios from "axios";

const API_URL = "https://reqres.in/api";

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  toast.error("You have entered an invalid email address!")
  return (false)
}
const validatePassword = (password) => {

  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    toast.success('pass');
    return true;
  }
    return false;
}
const LoginPage=()=> {



  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData,[name]:value });
  }

  const handleOnFormSubmit = async (e) => {
    e.preventDefault();

    const reqData = {
      "email": loginFormData?.email,
      "password": loginFormData?.password
    }

    if (reqData.email !== "" && reqData.password !== "") {
      

      validateEmail(reqData.email)
      validatePassword(reqData.password)

      try {

        const resData = await axios.post(
          `${API_URL}/login`,
          reqData);
          if(resData.status === 200) {
            localStorage.setItem('token',resData.data.token)
            toast.success("you are successfully logged in.")
            navigate("/home");
          } else {
            localStorage.setItem('token', "")
            toast.error("something went wrong.")
          }

      } catch (e) {
        // console.log(e);
        toast.error("Form submited with error")
      }
    } else {
      toast.error("Email and Password should not be empty.")
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form">
            <input
              type="text"
              placeholder="username"
              // value={logdetail?.email}
              name="email"
              onChange={handleOnInputChange} 
            />
            <input
              type="password"
              placeholder="password"
              // value={logdetail?.password}
              name="password"
              onChange={handleOnInputChange} 
            />
          </form>
          <button onClick={handleOnFormSubmit}>login</button>
          <p className="message">
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
