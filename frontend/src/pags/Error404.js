import React, { Component } from "react";
import Navheader from "../componentes/Navheader";

export default class Error404 extends React.Component {
  render() {
    return (
      <>
        <Navheader />
        <h1 className="error">Sorry, .. - Error404 - , not found :/</h1>
      </>
    );
  }
}
