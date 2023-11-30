// routes/expenses.js
const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesController');

// Routes for expenses
router.get('/', expensesController.getAllExpenses);
router.get('/:id', expensesController.getExpenseById);
router.post('/', expensesController.createExpense);
router.put('/:id', expensesController.updateExpense);
router.delete('/:id', expensesController.deleteExpense);

module.exports = router;