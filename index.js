//Requerido en todos
var express = require('express');
var cors = require('cors');
var morgan = require("morgan");
var app = express();
var router = express.Router();

// use it before all route definitions
app.use(morgan("dev"));
app.use(cors()); 

// routes
app.use(require('./routes/routes'));
var port = process.env.PORT || 5020; //Declarando puerto de inicio

// Server starts
app.listen(port); //Puerto de escucha
console.log('Usuario API Iniciado en el puerto : ' + port); //Mensaje de inicio de servicio