import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbari() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="">
            <Link to="/"> Home</Link>
             <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbari;
