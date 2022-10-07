const designations = require("../model/designations");
const response = require("../response");
let designationData = {};

//insert data
designationData.insertDesignationData = async function (req, res) {
	try {
		let data = designations.create(req.body);
		res.send(
			response.success(
				data,
				response.messageForDesignations.DESIGNATIONS_INSERT
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

// get all designations
designationData.getAllDesignations = async function (req, res) {
	try {
		let data = await designations.find({});
		res.send(
			response.success(data, response.messageForDesignations.ALL_DESIGNATIONS)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

//get user by id
designationData.getDesignationById = async function (req, res) {
	const { id } = req.params;

	let data = await designations.findOne({ _id: id });
	if (data) {
		res.send(
			response.success(data, response.messageForDesignations.DESIGNATIONS_ID)
		);
	} else {
		res.send(response.error(err));
	}
};

//get user by status
designationData.getDesignationByStatus = async function (req, res) {
	const { status } = req.params;
	let data = await designations.find({ jobStatus: `${status}` });
	if (data) {
		res.send(
			response.success(
				data,
				response.messageForDesignations.DESIGNATIONS_STATUS
			)
		);
	} else {
		res.send(response.error(err));
	}
};

//get user by id and update
designationData.getUpdateDesignation = async function (req, res) {
	const { id } = req.params;
	try {
		let updateDesignation = await designations.findOneAndUpdate(
			{
				_id: id,
			},
			{
				$set: {
					designation_code: req.body.designation_code,
					designation_name: req.body.designation_name,
					status: req.body.status,
				},
			}
		);
		res.send(
			response.success(
				updateDesignation,
				response.messageForDesignations.DESIGNATIONS_UPDATE
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

//delete api
designationData.deleteDesignation = async function (req, res) {
	const { id } = req.params;
	try {
		let deleteMsg = await designations.remove({ _id: id });
		res.send(
			response.success(
				deleteMsg,
				response.messageForDesignations.DESIGNATIONS_DELETE
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

module.exports = designationData;
