const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);


// middleware

// routes

// staring server goes here
app.listen(app.get('port'), (req, res) => {
   console.log("Server on port ", app.get('port')); 
});
