const employeeModel = require('../models/employee');
const employeeCtrl = {};


employeeCtrl.getEmployees = (req, res) => {        
    employeeModel.find()
        .then(emp =>  res.json(emp))
        .catch(err => console.log(err));
};

/*
employeeCtrl.getEmployees = async (req, res) => {    
    const employees = await employeeModel.find();        
    res.json(employees);
};*/
   

employeeCtrl.getEmployee =  (req, res) => {       
    employeeModel.findById(req.params.id)
        .then(emp =>  res.json(emp))
        .catch(err => console.log(err));    
};


employeeCtrl.createEmployee = (req, res) => {
    const emp = new employeeModel(req.body);
    console.log(emp);
    emp.save()
        .then(db => res.json({'status': 'Employee Saved.'}))
        .catch(err => console.log(err));
};

/*employeeCtrl.createEmployee = async (req, res) => {
    const emp = new employeeModel(req.body);
    await emp.save();
    console.log(emp);
    res.json({'status': 'Employee Saved.'});

};*/

employeeCtrl.updateEmployee = () => {

};

employeeCtrl.deleteEmployee = () => {

};


module.exports = employeeCtrl;