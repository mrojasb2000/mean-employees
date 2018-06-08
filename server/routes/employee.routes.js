const express = require('express');
const router = express.Router();

const employeeDB = require('../controllers/employee.controller');

router.get('/', employeeDB.getEmployees);

module.exports = router;