const mongoose = require("mongoose");

// mongoose.conncect(adonde(el linkdenotasconmipass), {opciones})

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("databaseconnected!:)"))
  .catch((err) => console.log(err));
