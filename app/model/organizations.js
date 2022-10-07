const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
	organization_id: String,
	organization_name: String,
	status: String,
	ceo: String,
	product: String,
});

// organizationSchema.virtual("nameceo").get(function(){
// 	return `${this.organization_name} and it's ceo is ${this.ceo}`
// })

module.exports = mongoose.model("organizations", organizationSchema);
