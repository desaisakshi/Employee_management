const express = require("express");
const logger = require("./middleware/logger.middleware");

const employeeRoutes = require("./routes/employee.routes");
const departmentRoutes = require("./routes/department.routes");

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);

module.exports = app;
