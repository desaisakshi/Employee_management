const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("Employeemanagement", "billa", "billa", {
  host: "127.0.0.1",
  port: 1433,
  dialect: "mssql",
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: false,
});
module.exports = sequelize;
