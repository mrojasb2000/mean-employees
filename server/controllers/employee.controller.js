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

/*
employeeCtrl.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const emp = {
        name : req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    await employeeModel.findByIdAndUpdate(id, {$set: emp}, {new: true})
    res.json({'status': 'Employee Updated.'})
};
*/

employeeCtrl.updateEmployee = (req, res) => {
    const { id } = req.params;
    const emp = {
        name : req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    employeeModel.findByIdAndUpdate(id, {$set: emp}, {new: true})
        .then(db =>  res.json({'status': 'Employee Updated.'}))
        .catch(err => console.log(err)); 
};

employeeCtrl.deleteEmployee = (req, res) => {
    const { id } = req.params;
    employeeModel.findByIdAndRemove(id)
        .then(db =>  res.json({'status': 'Employee Deleted.'}))
        .catch(err => console.log(err));         
};

/*
employeeCtrl.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await  employeeModel.findByIdAndRemove(id);
  res.json({'status': 'Employee Deleted.'});
};
*/

module.exports = employeeCtrl;