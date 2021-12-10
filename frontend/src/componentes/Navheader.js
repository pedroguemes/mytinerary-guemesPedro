import React from "react";
import logosecundario from "../assets/logosecundario.png";
import { BsPersonCircle } from "react-icons/bs";
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
// import authActions from "../redux/actions/authActions";
import { connect } from "react-redux";


const logopersona = <BsPersonCircle className="logoperson" />;

function Navheader(props) {
 
const {loggedUser} = props;
 console.log(loggedUser)

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
            {/* <NavDropdown className="logopersona" title={loggedUser ? loggedUser. logopersona}> */}
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


const mapStateToProps = (state) => {
  return {
    loggedUser: state.authReducer.user
  }
};

export default connect(mapStateToProps, null)(Navheader);
// export default Navheader
