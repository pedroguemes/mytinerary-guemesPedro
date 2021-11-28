const mongoose = require('mongoose')

// mongoose.conncect(adonde(el linkdenotasconmipass), opciones)

mongoose.conncect(  process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=> console.log('databaseconnected'))
.catch(err=> console.err(err))