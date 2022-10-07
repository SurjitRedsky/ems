const divisions = require("../model/division");
const response = require("../response");
let divisionData = {};

//insert data
divisionData.insertDivision = async function (req, res) {
	try {
		let insertOneDivision = await divisions.create(req.body);
		res.send(
			response.success(
				insertOneDivision,
				response.messageForDivisions.DIVISIONS_INSERT
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

// get all divisions
divisionData.getAlldivisions = async function (req, res) {
	let data = await divisions.find({});
	try {
		res.send(
			response.success(data, response.messageForDivisions.ALL_DIVISIONS)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

//get user by id
divisionData.getDivisionById = async function (req, res) {
	const { id } = req.params;
	let data = await divisions.findOne({ _id: id });
	if (data) {
		res.send(response.success(data, response.messageForDivisions.DIVISIONS_ID));
	} else {
		res.send(response.error());
	}
};

//get user by status
divisionData.getDivisionByStatus = async function (req, res) {
	const { status } = req.params;
	let data = await divisions.find({ status: `${status}` });
	if (data) {
		res.send(
			response.success(data, response.messageForDivisions.DIVISIONS_STATUS)
		);
	} else {
		res.send(response.error(data, "err"));
	}
};

//get user by id and update
divisionData.getUpdateDivision = async function (req, res) {
	const { id } = req.params;
	try {
		let updateDivision = await divisions.findOneAndUpdate(
			{
				_id: id,
			},
			{
				$set: {
					division_id: req.body.division_id,
					division_name: req.body.division_name,
					status: req.body.status,
				},
			}
		);
		res.send(
			response.success(
				updateDivision,
				response.messageForDivisions.DIVISIONS_UPDATE
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

//delete api
divisionData.deleteDivision = async function (req, res) {
	const { id } = req.params;
	try {
		let deleteMsg = await divisions.remove({ _id: id });
		res.send(
			response.success(deleteMsg, response.messageForDivisions.DIVISIONS_DELETE)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

module.exports = divisionData;
