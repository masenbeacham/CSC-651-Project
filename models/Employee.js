const { DataTypes } = require('sequelize');

const Employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permission_level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
