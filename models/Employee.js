const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Your database configuration

const Employee = sequelize.define('Employee', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Define other fields here
});

module.exports = Employee;
