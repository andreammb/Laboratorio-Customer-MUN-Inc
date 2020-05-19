const mongoose = require('mongoose')

const { LabHOST , LabDB } = process.env;

const mongoDBURI = 'mongodb://mongo:${LabHOST}/${LabDB}/docker-node-mongo';


    mongoose.connect( mongoDBURI, {

        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(db => console.log('base de datos conectada'))
        .catch(err => console.log(err));


