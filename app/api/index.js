const userData = require("../api/users");
const departmentData = require("../api/departments");
const divisionData = require("../api/divisions");
const designationData = require("../api/designations");
const organizationData = require("../api/organizations");
let api = {};

// >>>>>>>>>>>>>>>>>>>>>>>  USERS <<<<<<<<<<<<<<<<<<<<<<<<<<<
// >> for insert user
api.insertuser = (req, res) => {
	return userData.insertUser(req, res);
};

// >> for get all users
api.getAllUsers = (req, res) => {
	return userData.getAllUsers(req, res);
};

// >>  for get user by id
api.getUserById = (req, res) => {
	return userData.getUserById(req, res);
};

// >> for get user by status
api.getUserByStatus = (req, res) => {
	return userData.getUserByStatus(req, res);
};

// >> for user update
api.getUpdateUser = (req, res) => {
	return userData.getUpdateUser(req, res);
};

// >> for user delete
api.deleteUser = (req, res) => {
	return userData.deleteUser(req, res);
};

// >>>>>>>>>>>>>>>>>>>>>>>>  DEPARTMENTS  <<<<<<<<<<<<<<<<<<<<<
// for insert departments
api.insertDepartment = (req, res) => {
	return departmentData.insertDepartment(req, res);
};

// for all departments
api.allDepartments = (req, res) => {
	return departmentData.getAllDepartment(req, res);
};

// for get department by id
api.getDepartmentById = (req, res) => {
	return departmentData.getDepartmentById(req, res);
};

//for get department by status
api.getDepartmentByStatus = (req, res) => {
	return departmentData.getDepartmentByStatus(req, res);
};

// for update department
api.getUpdateDepartment = (req, res) => {
	return departmentData.getUpdateDepartment(req, res);
};

// for delete department
api.deleteDepartment = (req, res) => {
	return departmentData.deleteDepartment(req, res);
};

// >>>>>>>>>>>>>>>>>>>>>>>>  DIVISIONS  <<<<<<<<<<<<<<<<<<<<<
//insert in division
api.insertDivision = (req, res) => {
	return divisionData.insertDivision(req, res);
};

// for get all divisions
api.getAllDivision = (req, res) => {
	return divisionData.getAlldivisions(req, res);
};

// for get division by id
api.getDivisionById = (req, res) => {
	return divisionData.getDivisionById(req, res);
};

// for get division by status
api.getDivisionByStatus = (req, res) => {
	return divisionData.getDivisionByStatus(req, res);
};

//for get update divisions
api.getUpdateDivision = (req, res) => {
	return divisionData.getUpdateDivision(req, res);
};

// delete division by id
api.deleteDivision = (req, res) => {
	return divisionData.deleteDivision(req, res);
};

// >>>>>>>>>>>>>>>>>>>>>>>>  DESIGNATIONS <<<<<<<<<<<<<<<<<<<<<
//insert in Designation
api.insertDesignation = (req, res) => {
	return designationData.insertDesignationData(req, res);
};

// for get all designations
api.getAllDesignations = (req, res) => {
	return designationData.getAllDesignations(req, res);
};

// for get designation by id
api.getDesignationById = (req, res) => {
	return designationData.getDesignationById(req, res);
};

// for get designation by status
api.getDesignationByStatus = (req, res) => {
	return designationData.getDesignationByStatus(req, res);
};

// for get update designation
api.getUpdateDesignations = (req, res) => {
	return designationData.getUpdateDesignation(req, res);
};

// for delete designation
api.deleteDesignation = (req, res) => {
	return designationData.deleteDesignation(req, res);
};

// >>>>>>>>>>>>>>>>>>>>>>>>  ORGANIZATIONS <<<<<<<<<<<<<<<<<<<<<
// for insert in organizations
api.insertOrganization = (req, res) => {
	return organizationData.insertOrganization(req, res);
};

//get all organizations
api.getAllOrganizations = (req, res) => {
	return organizationData.getAllOrganizations(req, res);
};

//get organization by id
api.getOrganizationById = (req, res) => {
	return organizationData.getOrganizationById(req, res);
};

// get organization by status
api.getOrganizationByStatus = (req, res) => {
	return organizationData.getOrganizationByStatus(req, res);
};

//get update organizations
api.getUpdateOrganization = (req, res) => {
	return organizationData.getUpdateOrganization(req, res);
};

//delete organizatoins
api.deleteOrganization = (req, res) => {
	return organizationData.deleteOrganization(req, res);
};
module.exports = api;
