const Router = require('express').Router();

const { cargarCity } = require('../controllers/citiesControllers');
const citiesControllers = require('../controllers/citiesControllers')

const{obtenerCities, obtenerCity} = citiesControllers

Router.route('/cities')
.get(obtenerCities)
.post(cargarCity)

Router.route('/cities/:id').get(obtenerCity)

// Router.route('/api/itineraries')
// .get((req, res)=>{
//     res.json({ Response: { itineraries: itineraries } })};

module.exports = Router