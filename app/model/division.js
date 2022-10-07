const mongoose = require("mongoose");

const divisionSchema = new mongoose.Schema({
	division_id: String,
	division_name: String,
	status: String,
});

module.exports = mongoose.model("division", divisionSchema);
