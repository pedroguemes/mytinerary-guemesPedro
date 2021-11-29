const Router = require('express').Router();

// const { cargarCity, modificarCity } = require('../controllers/citiesControllers');
const citiesControllers = require('../controllers/citiesControllers')

const{obtenerCities, obtenerCity, modificarCity, cargarCity} = citiesControllers

Router.route('/cities')
.get(obtenerCities)
.post(cargarCity)


Router.route('/cities/:id')
.get(obtenerCity)
.put(modificarCity)

// Router.route('/api/itineraries')
// .get((req, res)=>{
//     res.json({ Response: { itineraries: itineraries } })};

module.exports = Router