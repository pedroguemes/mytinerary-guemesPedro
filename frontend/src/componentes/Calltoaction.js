import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Calltoaction() {
  return (
    <div className="contenedorcallto">
      <div className="calltoaction ">
        <Button as={Link} to="/Cities" className="buttoncallto">
          {" "}
          Click and explore! :){" "}
        </Button>
      </div>
    </div>
  );
}
