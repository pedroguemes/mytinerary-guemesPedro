// const cities = [
  
//     {
//       id:1,
//       nombreCiudad: "Kuala Lumpur",
//       pais: "Malaysia",
//       imagenCiudad: ("../assets/kualalumpur.jfif")
//     },
//     {
//       id:2,
//       nombreCiudad: "Paris",
//       pais: "France",
//       imagenCiudad: ("../assets/paris.jfif")
//     },
//     {
//       id:3,
//       nombreCiudad: "New York",
//       pais: "United States",
//       imagenCiudad: ("../assets/newyork.jfif")
//     },
//     {
//       id:4,
//       nombreCiudad: "Singapore Harbour",
//       pais: "Singapore",
//       imagenCiudad: ("../assets/singapore.jfif")
//     },
  
//   {
//     id:5,
//     nombreCiudad: "Dubai",
//     pais: "United Arab Emirates",
//     imagenCiudad: ("../assets/dubai.jfif")
//   },
//   {
//     id:6,
//     nombreCiudad: "Macau",
//     pais: "China",
//     imagenCiudad: ("../assets/macau.jpg")
//   },
//   {
//     id:7,
//     nombreCiudad: "Bangkok",
//     pais: "Thailand",
//     imagenCiudad: ("../assets/bangkok.jfif")
//   },
//   {
//     id:8,
//     nombreCiudad: "Buenos Aires",
//     pais: "Argentina",
//     imagenCiudad: ("../assets/buenosaires.jpg")
//   },
//   {
//     id:9,
//     nombreCiudad: "Sydney",
//     pais: "Australia",
//     imagenCiudad: ("../assets/sydney.jfif")
//   },
//   {
//     id:10,
//     nombreCiudad: "London",
//     pais: "England",
//     imagenCiudad: ("../assets/london.jfif")
//   },
//   {
//     id:11,
//     nombreCiudad: "Berlin",
//     pais: "Germany",
//     imagenCiudad: ("../assets/berlin.jfif")
//   },
//   {
//     id:12,
//     nombreCiudad: "New Delhi",
//     pais: "India",
//     imagenCiudad: ("../assets/newdelhi.jfif")
//   },
//   {
//     id:13,
//     nombreCiudad: "Edinburgh",
//     pais: "Scotland",
//     imagenCiudad: ("../assets/edinburgh.jfif")
//   },
//   {
//     id:14,
//     nombreCiudad: "Istanbul",
//     pais: "Turquia",
//     imagenCiudad: ("../assets/istanbul.jfif")
//   },
//   {
//     id:15,
//     nombreCiudad: "Rome",
//     pais: "Italy",
//     imagenCiudad: ("../assets/rome.jpg")
//   }
// ];

//convencion no es "obtener..", sino el array mismo (cities no obtenerCities)
const City = require('../models/Ciudad')

const citiesControllers = {
  obtenerCities:(req,res) => {
    City.find()
    .then((cities)=> res.json({cities}))
  },
      obtenerCity:(req,res) => {
       City.findOne({_id : (req.params.id)})
        .then((city)=> res.json({city}))
      },
      cargarCity: (req,res)=>{
        const {nombreCiudad, pais, imagenCiudad} = req.body
         new City({nombreCiudad, pais, imagenCiudad}).save()
          .then((resp) => res.json({resp}))         
          // cities.push(city)
          // res.json({cities});
        },
        modificarCity: async (req,res)=>{
          const bodyCity = req.body
          let modifyCity 
          try {
            modifyCity = await City.findOneAndUpdate({_id : req.params.id},bodyCity,{ new: true})
          } catch (error) {
          }
          res.json({success: modifyCity ? true : false });
        },
        borrarCity: async (req,res)=>{
          let city
          const id = req.params.id
          try{
            city = await City.findOneAndDelete({
              _id:id})}catch(error) {
              console.log(error)
            }
            res.json({response:city,success:true})
          }
        }


module.exports = citiesControllers