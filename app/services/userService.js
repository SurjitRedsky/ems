const users = require("../model/users");
let userService = {};

//mongoDb query >> for all users data
userService.allData = async () => {
	return await users.find();
};

//mongoDb query >> for users data get by id
userService.getOneUser = async (id) => {
	return await users.findOne({ _id: id });
};

//mongoDb query >> for users data get by department code
userService.getUserByDepartment = async (code) => {
	return await users.find({ department_code: code }).lean();
};

//mongoDb query >> for users data in accending order of first name
userService.getUserInOrder = async (order) => {
	return await users.find().sort({ firstName: order }).lean();
};

//mongoDb query >> for users data with some pattern
userService.getUserWithNamePattern = async (pattern) => {
	return await users.find({ firstName: { $regax: { pattern } } });
};

//mongoDb query >> for update user data
userService.updateUser = async (id) => {
	return users.findOneAndUpdate(
		{ _id: id },
		{
			$set: {
				firstName: "",
				lastName: "",
				dateOfJoin: "",
				gender: "",
				phoneNumber: "",
				email: "",
				country: "",
				currentAddress: "req.body.currentAddress",
				permanentAddress: "req.body.permanentAddress",
				fatherName: "req.body.fatherName",
				dateofBrith: "req.body.dateofBrith",
				marritialStatus: "req.body.marritialStatus",
				jobStatus: "req.body.jobStatus",
				organizations_id: "req.body.organizations_id",
				desgination_code: "req.body.desgination_code",
				department_code: "req.body.department_code",
				division_code: "req.body.division_code",
			},
		}
	);
};

//mongoDb query >> for delete user data with id
userService.deleteUserData = async (id) => {
	return users.remove({ _id: id });
};

module.exports = userService;
