const Router = require("express").Router();

const citiesControllers = require("../controllers/citiesControllers");

const usersControllers = require("../controller/userController")

const {obtenerUsers, obtenerUser, cargarUser } = usersControllers

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

Router.route("/users/:id").post(cargarUser).get(obtenerUser)

Router.route("/users").get(obtenerUsers);


module.exports = Router;