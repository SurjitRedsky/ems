// MONGOOSE CONNECT >> connection with mongodb database

const mongoose = require("mongoose");
function mongoConnect() {
	mongoose.connect(
		"mongodb+srv://ems:12345@sds.ebmpxjy.mongodb.net/ems?retryWrites=true&w=majority"
	);
	mongoose.connection.once("failed", (error) => console.error(error));
	mongoose.connection.once("open", () => {
		console.log("your are connect with mongodb");
	});
}

module.exports = mongoConnect;
