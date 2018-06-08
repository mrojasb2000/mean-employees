
const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');


// settings
app.set('port', process.env.PORT || 3000);


// middleware
app.use(morgan('dev'));
app.use(express.json());


// routes
app.use(require('./routes/employee.routes'));

// staring server goes here
app.listen(app.get('port'), (req, res) => {
   console.log("Server on port ", app.get('port')); 
});
