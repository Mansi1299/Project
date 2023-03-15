import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const API_URL = "https://reqres.in/api";

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  toast.error("You have entered an invalid email address!");
  return false;
};
const validatePassword = (password) => {
  if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    toast.success("pass");
    return true;  
  }
  return false;
};
const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  // const [detail, setDetail] = useState({ name: "", password: "", mailid: "" });
  // States
  const [SignupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...SignupFormData, [name]: value });
  };
  const handleOnFormSubmit = async (e) => {
    e.preventDefault();

    const reqData = {
      email: SignupFormData?.email,
      password: SignupFormData?.password,
    };

    if (reqData.email !== "" && reqData.password !== "") {
      validateEmail(reqData.email);
      validatePassword(reqData.password);

      try {
        const resData = await axios.post(`${API_URL}/Register`, reqData);

        if (resData.status === 200) {
          localStorage.setItem("token", resData.data.token);
          toast.success("you are registered successfully.");
          navigate("/login");
        } else {
          localStorage.setItem("token", "");
          toast.error("something went wrong.");
        }
      } catch (e) {
        console.log(e);
        toast.error("Form submited with error");
        localStorage.setItem("token", "");
      }
    } else {
      toast.error("Email and Password should not be empty.");
    }
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Email"
            sx={{ margin: 1 }}
            placeholder="Enter your email"
            name="email"
            onChange={handleOnInputChange}
          />

          <TextField
            fullWidth
            label="Password"
            sx={{ margin: 1 }}
            placeholder="Enter your password"
            name="password"
            onChange={handleOnInputChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              margin: 2,
              textAlign: "center",
              backgroundColor: "#328f8a",
            }}
            onClick={handleOnFormSubmit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
