const departments = require("../model/departments");
let departmentService = {};

//get all departments

const department_status = (req, res) => {
	res.send("hello this is me");
};

departmentService.allDepartment = async () => {
	return await departments.find().lean();
};

//get departments by id
departmentService.departmentDataById = async (id) => {
	return await departments.findOne({ _id: id });
};

//data by status
departmentService.departmentDataByStatus = async (status) => {
	return await departments.find({ department_status: `${status}` });
};

//data update
departmentService.updateDepartment = async (id) => {
	return departments
		.findOneAndUpdate(
			{
				_id: id,
			},
			{
				$set: {
					department_code: "DE902",
					department_name: "Finance",
					department_status: "inactive",
				},
			}
		)
		.lean();
};

// delete department
departmentService.deleteDepartmentData = async (id) => {
	return departments.remove({ _id: id });
};

module.exports = departmentService;
