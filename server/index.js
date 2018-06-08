
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

// default route http://localhost:3000
app.use(require('./routes/default.routes'));

// example: http://localhost:3000/api/employees
app.use('/api/employees', require('./routes/employee.routes'));

// staring server goes here
app.listen(app.get('port'), (req, res) => {
   console.log("Server on port ", app.get('port')); 
});
