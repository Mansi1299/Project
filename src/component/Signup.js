// import React, {  useState } from "react";
// import { createSearchParams, useNavigate } from "react-router-dom";

// import "./mycss/sig.css";
// function Signup() {
//   const [detail, setDetail] = useState({ name: "", password: "", mailid: "" });
//   function changehandle(e) {
//     setDetail({
//       ...detail,
//       [e.target.name]: e.target.value,
//     });
//   }
//   const useNavigateSearch = () => {
//     const navigate = useNavigate();
//     return (pathname, params) =>
//       navigate({ pathname, search: `?${createSearchParams(params)}` });
//   };
//   const navigateSearch = useNavigateSearch();
//   const onSubmit = (e) => {
//     e.preventDefault();

//     localStorage.setItem(
//       "userinfo",
//       JSON.stringify({
//         name: detail.name,
//         password: detail.password,
//         mailid: detail.mailid,
//       })
//     );
//     console.log();
//     navigateSearch("/loginpage");
//   };
//   return (
//     <>
//       <div className="form_wrapper">
//         <div className="form_container">
//           <div className="title_container">
//             <h2>Responsive Registration Form</h2>
//           </div>
//           <div classNameName="row clearfix">
//             <div className="">
//               <form>
//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-envelope"></i>
//                   </span>
//                   <input
//                     type="email"
//                     name="mailid"
//                     placeholder="Email"
//                     required
//                     value={detail?.mailid}
//                     onChange={changehandle}
//                   />
//                 </div>
//                 <div className="input_field">
//                   {" "}
//                   <span>
//                     <i aria-hidden="true" className="fa fa-lock"></i>
//                   </span>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     required
//                     value={detail?.password}
//                     onChange={changehandle}
//                   />
//                 </div>
//                 <div className="row clearfix">
//                   <div className="col_half">
//                     <div className="input_field">
//                       {" "}
//                       <span>
//                         <i aria-hidden="true" className="fa fa-user"></i>
//                       </span>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="First Name"
//                         value={detail?.name}
//                         onChange={changehandle}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                   className="button"
//                   type="submit"
//                   value="Register"
//                   onClick={onSubmit}
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
//  import "./mycss/sig.css";
const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const [detail, setDetail] = useState({ name: "", password: "", mailid: "" });
  function changehandle(e) {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  }
  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };
  const navigateSearch = useNavigateSearch();
  const onSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "userinfo",
      JSON.stringify({
        name: detail.name,
        password: detail.password,
        mailid: detail.mailid,
      })
    );
    console.log();
    navigateSearch("/login", {
      name: detail.name,
    });
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
            label="Name"
            sx={{ margin: 1 }}
            placeholder="Enter your name"
            name="name"
            value={detail?.name}
            onChange={changehandle}
          />
          <TextField
            fullWidth
            label="Email"
            sx={{ margin: 1 }}
            placeholder="Enter your email"
            name="mailid"
            value={detail?.mailid}
            onChange={changehandle}
          />

          <TextField
            fullWidth
            label="Password"
            sx={{ margin: 1 }}
            placeholder="Enter your password"
            name="password"
            value={detail?.password}
            onChange={changehandle}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ margin:2, textAlign: "center" , backgroundColor: '#328f8a',
         }}
            onClick={onSubmit}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
