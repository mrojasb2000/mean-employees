const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {    
     res.json({status: 'Api Works.'});
};

employeeCtrl.createEmployee = () => {

};

module.exports = employeeCtrl;