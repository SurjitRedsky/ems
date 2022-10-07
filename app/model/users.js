const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	dateOfJoin: Date,
	gender: String,
	phoneNumber: Number,
	email: String,
	country: String,
	currentAddress: String,
	permanentAddress: String,
	fatherName: String,
	dateofBrith: Date,
	marritialStatus: String,
	jobStatus: String,
	organizations_id: String,
	desgination_code: String,
	department_code: String,
	division_code: String,
});

module.exports = mongoose.model("users", userSchema);
