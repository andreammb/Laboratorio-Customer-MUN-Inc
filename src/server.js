//const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const express = require('express');

const app = express();
//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'default',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares - funciones que se ejecutan cuando llegan las peticiones
app.use(express.urlencoded({extended: false}));//convertir datos de form en json

//Variables globales

//Rutas
app.use(require('./routes/rutas'));

//Static
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

