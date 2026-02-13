const { Department, Employee } = require("../models");

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDepartments = async (req, res) => {
  const departments = await Department.findAll();
  res.json(departments);
};

exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;

  const employees = await Employee.findOne({ where: { department_id: id } });

  if (employees) {
    return res
      .status(400)
      .json({ message: "Cannot delete department with employees." });
  }

  await Department.destroy({ where: { id } });
  res.json({ message: "Department deleted successfully." });
};
