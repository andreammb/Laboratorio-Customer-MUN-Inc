const mongoose = require('mongoose')

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect before tests run
//before(function(done){ //activar para hacer test

const { LabHOST , LabDB } = process.env;

//const mongoDBURI = 'mongodb://mongo:${LabHOST}/${LabDB}/docker-node-mongo';//activar para test
const mongoDBURI = `mongodb://${LabHOST}/${LabDB}`;

    mongoose.connect( mongoDBURI, {

        useUnifiedTopology: true,
        useNewUrlParser: true

    })

        .then(db => console.log('base de datos conectada'))

        .catch(err => console.log(err));
   // done();//activar para hacer test

//});//activar para test