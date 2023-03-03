import React, {  useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import "./mycss/sig.css";
function Signup() {
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
    navigateSearch("/loginpage");
  };
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div classNameName="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="mailid"
                    placeholder="Email"
                    required
                    value={detail?.mailid}
                    onChange={changehandle}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={detail?.password}
                    onChange={changehandle}
                  />
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={detail?.name}
                        onChange={changehandle}
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="button"
                  type="submit"
                  value="Register"
                  onClick={onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
