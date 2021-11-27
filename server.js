// require('.dotenv').config()
// require('./config/database')

// cities va a subir a la base de datos:
let cities = [
  
    {
      id:1,
      nombreCiudad: "Kuala Lumpur",
      pais: "Malaysia",
      imagenCiudad: ("./assets/kualalumpur.jfif")
    },
    {
      id:2,
      nombreCiudad: "Paris",
      pais: "France",
      imagenCiudad: ("./assets/paris.jfif")
    },
    {
      id:3,
      nombreCiudad: "New York",
      pais: "United States",
      imagenCiudad: ("./assets/newyork.jfif")
    },
    {
      id:4,
      nombreCiudad: "Singapore Harbour",
      pais: "Singapore",
      imagenCiudad: ("./assets/singapore.jfif")
    },
  
  {
    id:5,
    nombreCiudad: "Dubai",
    pais: "United Arab Emirates",
    imagenCiudad: ("./assets/dubai.jfif")
  },
  {
    id:6,
    nombreCiudad: "Macau",
    pais: "China",
    imagenCiudad: ("./assets/macau.jpg")
  },
  {
    id:7,
    nombreCiudad: "Bangkok",
    pais: "Thailand",
    imagenCiudad: ("./assets/bangkok.jfif")
  },
  {
    id:8,
    nombreCiudad: "Buenos Aires",
    pais: "Argentina",
    imagenCiudad: ("./assets/buenosaires.jpg")
  },
  {
    id:9,
    nombreCiudad: "Sydney",
    pais: "Australia",
    imagenCiudad: ("./assets/sydney.jfif")
  },
  {
    id:10,
    nombreCiudad: "London",
    pais: "England",
    imagenCiudad: ("./assets/london.jfif")
  },
  {
    id:11,
    nombreCiudad: "Berlin",
    pais: "Germany",
    imagenCiudad: ("./assets/berlin.jfif")
  },
  {
    id:12,
    nombreCiudad: "New Delhi",
    pais: "India",
    imagenCiudad: ("./assets/newdelhi.jfif")
  },
  {
    id:13,
    nombreCiudad: "Edinburgh",
    pais: "Scotland",
    imagenCiudad: ("./assets/edinburgh.jfif")
  },
  {
    id:14,
    nombreCiudad: "Istanbul",
    pais: "Turquia",
    imagenCiudad: ("./assets/istanbul.jfif")
  },
  {
    id:15,
    nombreCiudad: "Rome",
    pais: "Italy",
    imagenCiudad: ("./assets/rome.jpg")
  }
];


// const amigos = ["satan", "lucifer", "Putin", "Trump"];
const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

// app.get("/pruebas/datos", (req, res) => {
//   console.log("me llego un pedido GET");
//   res.json({ respuesta: "ola k ase" });
// });

// app.get("/api/amigos", (req, res) => {
//   res.json({ Response: { amigos: amigos } });
// });

app.get("/api/mytinerary/cities", (req, res) => {
  res.json({ Response: { cities: cities } });
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});

