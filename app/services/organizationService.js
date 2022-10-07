const organizations = require("../model/organizations");
let organizationService = {};

organizationService.allOrganizationData = async () => {
	return await organizations.find();
};

organizationService.allOrganizationDataById = async (id) => {
	return await organizations.findOne({ _id: id }).lean();
};

module.exports = organizationService;
