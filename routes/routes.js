const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers')

const{obtenerCities, obtenerCity} = citiesControllers

Router.route('/cities')
.get(obtenerCities)

Router.route('/cities/:id').get(obtenerCity)

// Router.route('/api/itineraries')
// .get((req, res)=>{
//     res.json({ Response: { itineraries: itineraries } })};

module.exports = Router