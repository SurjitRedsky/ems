const division = require("../model/division");
let divisionService = {};

//all data
divisionService.allDivisionData = async () => {
	return await division.find();
};

//data by id
divisionService.divisionDataById = async (id) => {
	return await division.findOne({ _id: id });
};

//data by status
divisionService.divisionDataByStatus = async (status) => {
	return await division.findOne({ status: `${status}` });
};

//update data
divisionService.divisionUpdatedData = async (id) => {
	return await division.findOneAndUpdate(
		{
			_id: id,
		},
		{
			$set: {
				division_id: "D02",
				division_name: "junior_dev",
				status: "inactive",
			},
		}
	);
};

//delete data
divisionService.divisionDataDelete = async (id) => {
	return await division.remove({
		_id: id,
	});
};
module.exports = divisionService;
