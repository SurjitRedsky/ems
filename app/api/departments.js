const departments = require("../model/departments");
const response = require("../response");
let departmentData = {};

// >>>>>>.. insert data
departmentData.insertDepartment = async function (req, res) {
	let departmentInsert = await departments.create(req.body);
	try {
		res.send(
			response.success(
				departmentInsert,
				response.messageForDepartments.DEPARTMENT_INSERT
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

// >>>>>>.. get all departments
departmentData.getAllDepartment = async function (req, res) {
	try {
		let departmentsData = await departments.find({});
		res.send(
			response.success(
				departmentsData,
				response.messageForDepartments.ALL_DEPARTMENT
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

// >>>>.. get user by id
departmentData.getDepartmentById = async function (req, res) {
	const { id } = req.params;
	let departmentById = await departments.findOne({ _id: id });

	if (departmentById) {
		res.send(
			response.success(
				departmentById,
				response.messageForDepartments.DEPARTMENT_ID
			)
		);
	} else {
		res.send(response.notFound());
	}
};

// >>>>.. get user by status
departmentData.getDepartmentByStatus = async function (req, res) {
	const { status } = req.params;
	console.log(status, "status");

	let departmentByStatus = await departments.find({
		department_status: `${status}`,
	});
	if (departmentByStatus) {
		res.send(
			response.success(
				departmentByStatus,
				response.messageForDepartments.DEPARTMENT_STATUS
			)
		);
	} else {
		res.send(response.notFound());
	}
};

// >>>>>... delete api
departmentData.deleteDepartment = async function (req, res) {
	const { id } = req.params;
	try {
		let deleteMsg = await departments.remove({ _id: id });
		res.send(
			response.success(
				deleteMsg,
				response.messageForDepartments.DEPARTMENT_DELETE
			)
		);
	} catch (err) {
		response.error(err);
	}
};

//get department by id and update
departmentData.getUpdateDepartment = async function (req, res) {
	const { id } = req.params;
	try {
		let updateDepartment = await departments.findOneAndUpdate(
			{
				_id: id,
			},
			{
				$set: {
					department_code: req.body.department_code,
					department_name: req.department_name,
					department_status: req.body.department_status,
				},
			}
		);
		res.send(
			response.success(
				updateDepartment,
				response.messageForDepartments.DEPARTMENT_UPDATE
			)
		);
	} catch (err) {
		response.error(err);
	}
};

module.exports = departmentData;
