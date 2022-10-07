let response = {};

response.success = (data, msg) => {
	return {
		data,
		statusCode: 200,
		msg,
	};
};

response.error = (data, err) => {
	console.log(data);

	return {
		err: err,
		statusCode: 505,
		msg: "Error Found",
	};
};

response.notFound = () => {
	return {
		statusCode: 404,
		msg: "Data not found.",
	};
};

response.messageForUsers = {
	ALL_USER: "All users fetch successfully.",
	USER_ID: "User Find with ID successfully.",
	USER_STATUS: "User Find with status successfully.",
	USER_UPDATE: "User Update successfully.",
	USER_DELETE: "User Deleted successfully.",
	USER_INSERT: "User Inserted successfully.",
};

response.messageForDepartments = {
	ALL_DEPARTMENT: "All DEPARTMENT fetch successfully.",
	DEPARTMENT_ID: "DEPARTMENT Find with ID successfully.",
	DEPARTMENT_STATUS: "DEPARTMENT Find with status successfully.",
	DEPARTMENT_UPDATE: "DEPARTMENT Update successfully.",
	DEPARTMENT_DELETE: "DEPARTMENT Deleted successfully.",
	DEPARTMENT_INSERT: "DEPARTMENT Inserted successfully.",
};

response.messageForDivisions = {
	ALL_DIVISIONS: "All Divisions fetch successfully.",
	DIVISIONS_ID: "UDivisions Find with ID successfully.",
	DIVISIONS_STATUS: "Divisions Find with status successfully.",
	DIVISIONS_UPDATE: "Divisions Update successfully.",
	DIVISIONS_INSERT: "Divisions Inserted successfully.",
	DIVISIONS_DELETE: "Divisions Deleted successfully.",
};

response.messageForDesignations = {
	ALL_DESIGNATIONS: "All Designations fetch successfully.",
	DESIGNATIONS_ID: "    Designation Find with ID successfully.",
	DESIGNATIONS_STATUS: "Designation Find with status successfully.",
	DESIGNATIONS_UPDATE: "Designation Update successfully.",
	DESIGNATIONS_DELETE: "Designation Deleted successfully.",
	DESIGNATIONS_INSERT: "Designation Inserted successfully.",
};

response.messageForOrganizations = {
	ALL_ORGANIZATION: "All Organizations fetch successfully.",
	ORGANIZATION_ID: "     Organization Find with ID successfully.",
	ORGANIZATION_STATUS: " Organization Find with status successfully.",
	ORGANIZATION_UPDATE: " Organization Update successfully.",
	ORGANIZATION_DELETE: " Organization Deleted successfully.",
	ORGANIZATION_INSERT: " Organization Inserted successfully.",
};

module.exports = response;
