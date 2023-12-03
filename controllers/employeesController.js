// Route handlers for employees
exports.getAllEmployees = async (req, res, next) => {
  res.send("Get All Employees Route");  
};
  
exports.getEmployeeById = (req, res, next) => {
    res.send("Get Employee By Id Route");
};
  
exports.createEmployee = (req, res, next) => {
    res.send("Create New Employee Route");
};
  
exports.updateEmployee = (req, res, next) => {
    res.send("Update Employee Route");
};
  
exports.deleteEmployee = (req, res, next) => {
    res.send("Delete Employee Route"); 
};

