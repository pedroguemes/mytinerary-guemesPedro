const Router = require('express').Router();

// const { cargarCity, modificarCity } = require('../controllers/citiesControllers');
const citiesControllers = require('../controllers/citiesControllers');

const{obtenerCities, obtenerCity, modificarCity, cargarCity, borrarCity} = citiesControllers

const itinerariesControllers = require('../controllers/itinerariesControllers')
const { obtenerItineraries, modificarItinerary, cargarItinerary, borrarItinerary } = itinerariesControllers




Router.route('/cities')
.get(obtenerCities)
.post(cargarCity)


Router.route('/cities/:id')
.get(obtenerCity)
.put(modificarCity)
.delete(borrarCity)

Router.route('/itineraries')
.get(obtenerItineraries)
.post(cargarItinerary)

module.exports = Router