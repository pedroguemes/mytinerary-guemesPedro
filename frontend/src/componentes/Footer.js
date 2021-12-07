import React from "react";
import logofooter from "../assets/logofooter.png";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Nav, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar bg="myFooter" variant="light" sticky="bottom">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navfooter">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Cities">
              Cities
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="divfooter">
          <a target="_blank" href={'https://www.instagram.com'}><BsInstagram  className="instagramfooter" /></a>
          <a target="_blank" href={'https://www.facebook.com'}> <BsFacebook as={Link} className="facebookfooter" /></a>
          <a target="_blank" href={'https://www.youtube.com'}><BsYoutube as={Link} className="youtubefooter"/></a>
          <img
            height="110"
            width="140"
            className="logofooter"
            src={logofooter}
          />{" "}
        </div>
        <p className="frasefooter"> All rights reserved Mytinerary Ⓒ</p>
        <p className="float-end">
          <a href="#">
            <BsFillArrowUpSquareFill className="backto"></BsFillArrowUpSquareFill>
          </a>
        </p>
      </Navbar>
    </div>
  );
}
