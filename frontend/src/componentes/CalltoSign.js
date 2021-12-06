import React from "react";
import { Alert } from "react-bootstrap";

function CalltoSign() {
  return (
    <Alert className="cartelsignin" variant="secondary">
      <Alert.Heading>Sign Up!</Alert.Heading>
      <p>Join us and post your own itineraries by filling these fields ➡</p>
    </Alert>
  );
}

export default CalltoSign;
