import React from "react";
import Navheader from "../componentes/Navheader";
import Herowelcome from "../componentes/Herowelcome";
import Calltoaction from "../componentes/Calltoaction";
import Carousel from "../componentes/Carousel";
import Footer from "../componentes/Footer";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Navheader/>
        <Herowelcome />
        <Calltoaction />
        <Carousel />
        <Footer />
      </>
    );
  }
}


//mail//contraseñas
//pablo@gmail.com//pablopablo
//pedro@gmail.com//pedroguemes
