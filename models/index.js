const sequelize = require("../config/db");
const Employee = require("./employee.model");
const Department = require("./department.model");

const initDB = async () => {
  await sequelize.sync({ alter: true });
};

module.exports = { sequelize, Employee, Department, initDB };
