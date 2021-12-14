const Router = require("express").Router();
const validator = require('../config/validator')
const citiesControllers = require("../controllers/citiesControllers");
const usersControllers = require("../controllers/usersControllers")
// const { obtenerUser, cargarUser } = usersControllers
const {cargarUser, obtenerUsers, cargarSignIn , verifytoken} = usersControllers
const { obtenerCities, obtenerCity, modificarCity, cargarCity, borrarCity } =
  citiesControllers;
const itinerariesControllers = require("../controllers/itinerariesControllers");
const {
  obtenerItineraryPorCity,
  obtenerItineraries,
  modificarItinerary,
  cargarItinerary,
  borrarItinerary,
  obtenerItinerary,
} = itinerariesControllers;
const passport = require('../config/passport')

Router.route("/cities").get(obtenerCities).post(cargarCity);

Router.route("/cities/:id")
  .get(obtenerCity)
  .put(modificarCity)
  .delete(borrarCity);

Router.route("/itineraries").post(cargarItinerary).get(obtenerItineraries);

Router.route("/itineraries/:id")
  .put(modificarItinerary)
  .delete(borrarItinerary)
  .get(obtenerItinerary);

Router.route("/itineraries/city/:id").get(obtenerItineraryPorCity);

// Router.route("/auth/:id").get(obtenerUser)

// Router.route("/auth/signUp").post(cargarUser)

Router.route("/auth/signUp").post(validator, cargarUser).get(obtenerUsers);

Router.route("/auth/signIn").post(cargarSignIn);


Router.route("/auth/verifytoken").get(passport.authenticate('jwt',{session:false}),verifytoken);


module.exports = Router;