const Customer = require("../models/Customer");

// Get all customers
exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll(); 
    res.json(customers);
  } catch (error) {
    console.error('Error getting all customers:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get customer by ID
exports.getCustomerById = async (req, res, next) => {
  const customerId = req.params.id; 
  try {
    const customer = await Customer.findByPk(customerId); 
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error('Error getting customer by ID:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Create a new customer
exports.createCustomer = async (req, res, next) => {
  const { first_name, last_name, email, phone_number, address, city, state, postal_code } = req.body;

  try {
    const newCustomer = await Customer.create({
      first_name,
      last_name,
      email,
      phone_number,
      address,
      city,
      state,
      postal_code,
    });

    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update a customer
exports.updateCustomer = async (req, res, next) => {
  const customerId = req.params.id; 
  const { first_name, last_name, email, phone_number, address, city, state, postal_code } = req.body;

  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    customer.first_name = first_name;
    customer.last_name = last_name;
    customer.email = email;
    customer.phone_number = phone_number;
    customer.address = address;
    customer.city = city;
    customer.state = state;
    customer.postal_code = postal_code;

    await customer.save(); // Save the updated customer

    res.json(customer);
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res, next) => {
  const customerId = req.params.id; 

  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    await customer.destroy(); // Delete the customer

    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
