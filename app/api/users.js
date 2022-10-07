const users = require("../model/users");
const { messageForUsers } = require("../response");
const response = require("../response");
let userData = {};

//insert data
userData.insertUser = async function (req, res) {
	let insertNew = await users.create(req.body);
	try {
		res.send(response.success(insertNew, response.user_message.USER_INSERT));
	} catch (err) {
		res.send(response.error(err));
	}
};

// get all users
userData.getAllUsers = async function (req, res) {
	try {
		let data = await users.find({});
		res.send(response.success(data, response.messageForUsers.ALL_USER));
	} catch (err) {
		res.send(response.error(err));
	}
};

//get user by id
userData.getUserById = async function (req, res) {
	const { id } = req.params;
	let user = await users.findOne({ _id: id });
	if (user) {
		res.send(response.success(user, response.messageForUsers.USER_ID));
	} else {
		res.send(response.notFound());
	}
};

//get user by status
userData.getUserByStatus = async function (req, res) {
	const { status } = req.params;
	let user = await users.find({ jobStatus: `${status}` });
	if (user) {
		res.send(response.success(user, response.messageForUsers.USER_STATUS));
	} else {
		res.send(response.notFound());
	}
};

//get user by id and update
userData.getUpdateUser = async function (req, res) {
	const { id } = req.params;

	let updateUser = await users.findOneAndUpdate(
		{
			_id: id,
		},
		{
			$set: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				dateOfJoin: req.body.dateOfJoin,
				gender: req.body.gender,
				phoneNumber: req.body.phoneNumber,
				email: req.body.email,
				country: req.body.country,
				currentAddress: req.body.currentAddress,
				permanentAddress: req.body.permanentAddress,
				fatherName: req.body.fatherName,
				dateofBrith: req.body.dateofBrith,
				marritialStatus: req.body.marritialStatus,
				jobStatus: req.body.jobStatus,
				organizations_id: req.body.organizations_id,
				desgination_code: req.body.desgination_code,
				department_code: req.body.department_code,
				division_code: req.body.division_code,
			},
		}
	);
	if (updateUser) {
		res.send(
			response.success(updateUser, response.messageForUsers.USER_UPDATE)
		);
	} else {
		res.send(response.error(err));
	}
};

//delete api
userData.deleteUser = async function (req, res) {
	const { id } = req.params;
	try {
		let deleteMsg = await users.remove({ _id: id });
		res.send(response.success(response.messageForUsers.USER_DELETE));
	} catch (err) {
		res.send(response.error(err));
	}
};

module.exports = userData;
