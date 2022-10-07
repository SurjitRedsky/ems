const mongoose = require("mongoose");
const designationSchema = new mongoose.Schema({
	designation_code: String,
	designation_name: String,
	status: String,
});

module.exports = mongoose.model("designations", designationSchema);
