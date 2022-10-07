const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
	department_code: String,
	department_name: String,
	department_status: String,
});

module.exports = mongoose.model("departments", departmentSchema);
