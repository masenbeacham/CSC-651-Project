const Employee = require("../models/Employee");

// Get all employees
exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.findAll(); 
    res.json(employees);
  } catch (error) {
    console.error('Error getting all employees:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get employee by ID
exports.getEmployeeById = async (req, res, next) => {
  const employeeId = req.params.id; // Assuming you pass the employee ID as a route parameter
  try {
    const employee = await Employee.findByPk(employeeId); 
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
  } catch (error) {
    console.error('Error getting employee by ID:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Create a new employee
exports.createEmployee = async (req, res, next) => {
  const { first_name, last_name, email, phone_number, address, city, state, postal_code } = req.body;

  try {
    const newEmployee = await Employee.create({
      first_name,
      last_name,
      email,
      phone_number,
      address,
      city,
      state,
      postal_code,
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update an employee
exports.updateEmployee = async (req, res, next) => {
  const employeeId = req.params.id; 
  const { first_name, last_name, email, phone_number, address, city, state, postal_code } = req.body;

  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    employee.first_name = first_name;
    employee.last_name = last_name;
    employee.email = email;
    employee.phone_number = phone_number;
    employee.address = address;
    employee.city = city;
    employee.state = state;
    employee.postal_code = postal_code;

    await employee.save(); // Save the updated employee

    res.json(employee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res, next) => {
  const employeeId = req.params.id; 

  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    await employee.destroy(); // Delete the employee

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
