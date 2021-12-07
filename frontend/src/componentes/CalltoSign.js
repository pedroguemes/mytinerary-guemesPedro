import React from "react";
import { Alert } from "react-bootstrap";
import {Link} from 'react-router-dom'

function CalltoSign() {
  return (
    <Alert className="cartelsignup" variant="secondary">
      <Alert.Heading className="signupcarteltitle">Sign Up!</Alert.Heading>
      <p>Join us and post your own itineraries by filling these fields</p>
      <p className="cartelsignupPchico"> ..Already a member?, <Link to="/signin">Sign In here ⬅</Link></p>
    </Alert>
  );
}

export default CalltoSign;