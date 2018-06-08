const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
     res.json({success: true, error: {message: '', data: []}});
});

module.exports = router;