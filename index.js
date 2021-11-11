//Requerido en todos
var express = require('express');
var cors = require('cors');
var morgan = require("morgan");

var app = express();

// use it before all route definitions
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan("dev"));
app.use(cors()); 

// routes
app.use(require('./routes/routes'));
const port = process.env.PORT || 4000; //Declarando puerto de inicio

// Server starts
app.listen(port, () => {
    //Puerto de escucha
    console.log("Server running on port: " + port); 
}); 