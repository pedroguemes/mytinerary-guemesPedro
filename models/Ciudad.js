const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
  nombreCiudad: { type: String, required: true },
  pais: { type: String, required: true },
  imagenCiudad: { type: String },
});

const City = mongoose.model("city", CitySchema);

module.exports = City;
