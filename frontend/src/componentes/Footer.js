import React from "react";
import logofooter from '../assets/logofooter.png';
import {BsInstagram, BsFacebook, BsYoutube} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Nav, Navbar} from 'react-bootstrap';


export default function Footer(){
    return (
        <div className="footer">
        <Navbar bg="myFooter" variant="light" sticky="bottom" >
              <Navbar.Toggle />
              <Navbar.Collapse>
              <Nav className="navfooter">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/Cities'>Cities</Nav.Link>
                  {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
              </Nav>
              </Navbar.Collapse>
            <div className="divfooter">
               {/* <button as={Link} to={'https://www.instagram.com'}><BsInstagram  className="instagramfooter"/></button> */}
                <BsInstagram  className="instagramfooter"/>
                <BsFacebook className="facebookfooter" />
                <BsYoutube className="youtubefooter" />
                <img height="110" width="140" className="logofooter" src={logofooter}/>{' '}
            </div>
                <p className="frasefooter"> All rights reserved Mytinerary Ⓒ</p>
                <p className="float-end"><a href="#"><BsFillArrowUpSquareFill className="backto"></BsFillArrowUpSquareFill></a></p>
          </Navbar>
          </div>
    )
}