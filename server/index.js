/*jshint esversion: 6 */
const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('port', process.env.PORT || 3000);


// middleware
app.use(morgan('dev'));
app.use(express.json());


// routes

// staring server goes here
app.listen(app.get('port'), (req, res) => {
   console.log("Server on port ", app.get('port')); 
});
