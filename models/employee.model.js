const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Department = require("./department.model");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Associations
Employee.belongsTo(Department, {
  foreignKey: "department_id",
  onDelete: "RESTRICT",
});

Department.hasMany(Employee, {
  foreignKey: "department_id",
});

Employee.belongsTo(Employee, {
  as: "Manager",
  foreignKey: "manager_id",
  onDelete: "SET NULL",
});

module.exports = Employee;
