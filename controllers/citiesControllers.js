const City = require("../models/Ciudad");

const citiesControllers = {
  obtenerCities: (req, res) => {
    City.find().then((cities) => res.json({ cities }));
  },
  obtenerCity: (req, res) => {
    City.findOne({ _id: req.params.id }).then((city) => res.json({ city }));
  },
  cargarCity: (req, res) => {
    const { nombreCiudad, pais, imagenCiudad } = req.body;
    new City({ nombreCiudad, pais, imagenCiudad })
      .save()
      .then((resp) => res.json({ resp }));
    // cities.push(city)
    // res.json({cities});
  },
  modificarCity: async (req, res) => {
    const bodyCity = req.body;
    let modifyCity;
    try {
      modifyCity = await City.findOneAndUpdate(
        { _id: req.params.id },
        bodyCity,
        { new: true }
      );
    } catch (error) {}
    res.json({ success: modifyCity ? true : false });
  },
  borrarCity: async (req, res) => {
    let city;
    const id = req.params.id;
    try {
      city = await City.findOneAndDelete({
        _id: id,
      });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: city, success: true });
  },
};

module.exports = citiesControllers;
