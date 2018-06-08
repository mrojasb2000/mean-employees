const express = require('express');
const router = express.Router();

const employeeDB = require('../controllers/employee.controller');

router.get('/', employeeDB.getEmployees);
router.post('/', employeeDB.createEmployee);
router.get('/:id', employeeDB.getEmployee);
router.put('/:id', employeeDB.updateEmployee);
router.delete('/:id', employeeDB.deleteEmployee);

module.exports = router;