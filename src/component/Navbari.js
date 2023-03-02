import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbari() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
            <Nav.Link href="/LoginPage">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>







/* 
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/Signup">Sign up 1</a>
            </li>
            <li>
              <a href="/LoginPage">Login 2</a>
            </li>
          </ul>
        </div>
      </nav> */
   
  );
}

export default Navbari;
