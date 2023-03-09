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
            <Link to="/login" style={{backgroundColor:'black',color:"white",padding:'14px 25px',textAlign:"center",display:'inline-block'}}> Home</Link>
           
             <Link to="/login" style={{backgroundColor:'black',color:"white",padding:'14px 25px',textAlign:"center",display:'inline-block'}}>Login</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbari;
