const { Employee, Department } = require("../models");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.findAll({
    include: [
      {
        model: Department,
        attributes: ["name"],
      },
      {
        model: Employee,
        as: "Manager",
        attributes: ["first_name", "last_name"],
      },
    ],
  });

  res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id, {
    include: [
      Department,
      {
        model: Employee,
        as: "Manager",
      },
    ],
  });

  if (!employee)
    return res.status(404).json({ message: "Employee not found" });

  res.json(employee);
};

exports.updateEmployee = async (req, res) => {
  await Employee.update(req.body, {
    where: { id: req.params.id },
  });

  res.json({ message: "Employee updated" });
};

exports.deleteEmployee = async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } });
  res.json({ message: "Employee deleted" });
};
