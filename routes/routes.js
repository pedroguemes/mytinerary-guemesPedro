const Router = require("express").Router();
const validator = require("../config/validator");
const citiesControllers = require("../controllers/citiesControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const commentsControllers = require("../controllers/commentsControllers");
const usersControllers = require("../controllers/usersControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const { cargarUser, obtenerUsers, cargarSignIn, verifyToken } =
  usersControllers;
const { obtenerCities, obtenerCity, modificarCity, cargarCity, borrarCity } =
  citiesControllers;
const {
  obtenerItineraryPorCity,
  obtenerItineraries,
  modificarItinerary,
  cargarItinerary,
  borrarItinerary,
  obtenerItinerary,
  LikesAndDislikesController,
} = itinerariesControllers;
const {
  obtenerActivityPorItinerary,
  obtenerActivities,
  modificarActivity,
  cargarActivity,
  borrarActivity,
  obtenerActivity,
} = activitiesControllers;
const {
  obtenerComments,
  modificarComment,
  cargarComment,
  borrarComment,
  obtenerComment,
  obtenerCommentsPorItinerary
} = commentsControllers;

const passport = require("../config/passport");

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

Router.route("/itinerary/likes").put(LikesAndDislikesController)



Router.route("/activities").post(cargarActivity).get(obtenerActivities);

Router.route("/activities/:itineraryId")
.get(obtenerActivityPorItinerary);
// .put(modificarActivity)
// .delete(borrarActivity)

Router.route("/comments").post(cargarComment).get(obtenerComments);

Router.route("/comments/:id")
.put(modificarComment)
.delete(borrarComment)

Router.route("/comments/:itineraryId")
.get(obtenerCommentsPorItinerary);

Router.route("/auth/signUp").post(validator, cargarUser).get(obtenerUsers);
Router.route("/auth/signIn").post(cargarSignIn);
// Router.route("/auth/:id").get(obtenerUser)
// Router.route("/auth/signUp").post(cargarUser)

Router.route("/auth/verifytoken").get(
  passport.authenticate("jwt", { session: false }),
  verifyToken
);

module.exports = Router;
