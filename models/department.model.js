const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Department = sequelize.define("Department", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

module.exports = Department;
