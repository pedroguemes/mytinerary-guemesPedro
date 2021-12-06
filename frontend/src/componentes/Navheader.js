import React from "react";
import logosecundario from "../assets/logosecundario.png";
import { BsPersonCircle } from "react-icons/bs";
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

const logopersona = <BsPersonCircle className="logoperson" />;

export default function Navheader() {
  return (
    <div>
      <Navbar
        className="navbar"
        bg="myBlue"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand className="navbrand">
          <img
            height="180"
            width="210"
            className="logoheader"
            src={logosecundario}
          />{" "}
          Mytinerary
        </Navbar.Brand>
        <Navbar.Toggle className="toggleheader" />
        <Navbar.Collapse className="navbarcollapse">
          <Nav className="navheader">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cities">
              Cities
            </Nav.Link>
          </Nav>
          <div>
            <NavDropdown className="logopersona" title={logopersona}>
              <NavDropdown.Item className="sign">
               <Link to="/signin"> Sign In </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="sign">
               <Link to="/signup"> Sign Up </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
