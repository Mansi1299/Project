import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
  const [logdetail, setLogdetail] = useState({ password: "", mailid: "" });
  function changehandle(e) {
    setLogdetail({
      ...logdetail,
      [e.target.name]: e.target.value,
    });
  }
  function check(e) {
    e.preventDefault();
    const storedName = JSON.parse(localStorage.getItem("userinfo"));

    console.log(storedName);

    debugger;

    if (logdetail.mailid === storedName && logdetail.password === storedName) {
      alert("You are logged in.");
    } else {
      alert("Error on login");
    }
  }

  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={logdetail?.mailid}
              onChange={changehandle}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={logdetail?.mailid}
              onChange={changehandle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={check}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;
