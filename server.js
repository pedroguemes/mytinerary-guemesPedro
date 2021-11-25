const amigos = ["satan", "lucifer", "Putin", "Trump"];
const express = require("express");

// const cors = require("cors");

const app = express();

// app.use(cors());

app.get("/pruebas/datos", (req, res) => {
  console.log("me llego un pedido GET");
  res.json({ respuesta: "ola k ase" });
});

app.get("/api/amigos", (req, res) => {
  res.json({ Response: { amigos: amigos } });
});

app.get("/api/cities", (req, res) => {
  res.json({ Response: { cities: cities } });
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});

let cities = [
  [
    {
      nombreCiudad: "Kuala Lumpur",
      pais: "Malaysia",
      imagenCiudad: ("../assets/kualalumpur.jfif")
    },
    {
      nombreCiudad: "Paris",
      pais: "France",
      imagenCiudad: ("../assets/paris.jfif")
    },
    {
      nombreCiudad: "New York",
      pais: "United States",
      imagenCiudad: ("../assets/newyork.jfif")
    },
    {
      nombreCiudad: "Singapore Harbour",
      pais: "Singapore",
      imagenCiudad: ("../assets/singapore.jfif")
    },
  ],
  {
    nombreCiudad: "Dubai",
    pais: "United Arab Emirates",
    imagenCiudad: ("../assets/dubai.jfif")
  },
  {
    nombreCiudad: "Macau",
    pais: "China",
    imagenCiudad: ("../assets/macau.jpg")
  },
  {
    nombreCiudad: "Bangkok",
    pais: "Thailand",
    imagenCiudad: ("../assets/bangkok.jfif")
  },
  {
    nombreCiudad: "Buenos Aires",
    pais: "Argentina",
    imagenCiudad: ("../assets/buenosaires.jpg")
  },
  {
    nombreCiudad: "Sydney",
    pais: "Australia",
    imagenCiudad: ("../assets/sydney.jfif")
  },
  {
    nombreCiudad: "London",
    pais: "England",
    imagenCiudad: ("../assets/london.jfif")
  },
  {
    nombreCiudad: "Berlin",
    pais: "Germany",
    imagenCiudad: ("../assets/berlin.jfif")
  },
  {
    nombreCiudad: "New Delhi",
    pais: "India",
    imagenCiudad: ("../assets/newdelhi.jfif")
  },
  {
    nombreCiudad: "Edinburgh",
    pais: "Scotland",
    imagenCiudad: ("../assets/edinburgh.jfif")
  },
  {
    nombreCiudad: "Istanbul",
    pais: "Turquia",
    imagenCiudad: ("../assets/istanbul.jfif")
  },
  {
    nombreCiudad: "Rome",
    pais: "Italy",
    imagenCiudad: ("../assets/rome.jfif")
  },
];
