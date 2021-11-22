import React from "react";
import logofooter from '../assets/logofooter.png';
import {BsPersonCircle} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
// import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const logopersona =<BsPersonCircle className="logoperson"/>;


export default function Footer(){
    return (
        <Navbar bg="myFooter" variant="light" sticky="bottom">
              <Navbar.Toggle />
              <Navbar.Collapse>
              <Nav className="navfooter">
                  <Nav.Link href="#home">Home |</Nav.Link>
                  <Nav.Link href="#cities">Cities |</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            <div className="divfooter">
                <BsInstagram className="instagramfooter"/>
                <BsFacebook className="facebookfooter" />
                <BsYoutube className="youtubefooter" />
                <img height="110" width="140" className="logofooter" src={logofooter}/>{' '}
            </div>
                <p className="frasefooter"> All rights reserved Mytinerary Ⓒ</p>
                <p className="float-end"><a href="#"><BsFillArrowUpSquareFill className="backto"></BsFillArrowUpSquareFill></a></p>
          </Navbar>
    )
}