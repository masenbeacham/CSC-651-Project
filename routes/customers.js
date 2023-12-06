const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');
const authMiddleware = require('../middleware/auth'); 

// Routes for customers
router.get('/', authMiddleware, customersController.getAllCustomers);
router.get('/:id', authMiddleware, customersController.getCustomerById);
router.post('/', authMiddleware, customersController.createCustomer);
router.put('/:id', authMiddleware, customersController.updateCustomer);
router.delete('/:id', authMiddleware, customersController.deleteCustomer);

module.exports = router;
