const designations = require("../model/designations");
let designationService = {};

//get all users data
designationService.allDesignationsData = async () => {
	return await designations.find().lean();
};

//get user by is
designationService.designationsDataById = async (id) => {
	return await designations.findOne({ _id: id });
};

//data by status
designationService.designationsDataByStatus = async (status) => {
	return await designations.find({ status: `${status}` });
};

//data update
designationService.updateDesignation = async (id) => {
	return designations.findOneAndUpdate(
		{
			_id: id,
		},
		{
			$set: {
				desgination_code: "S03",
				desgination_name: "cheifEng",
				status: "inactive",
			},
		}
	);
};

//data delete
designationService.deleteDesignationData = async (id) => {
	return designations.remove({ _id: id });
};

module.exports = designationService;
