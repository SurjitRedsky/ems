const organizations = require("../model/organizations");
const response = require("../response");
let organizationData = {};

//insert data
organizationData.insertOrganization = async function (req, res) {
	let insertNew = await organizations.create(req.body);
	try {
		res.send(
			response.success(
				insertNew,
				response.messageForOrganizations.ORGANIZATION_INSERT
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

// get all organizations
organizationData.getAllOrganizations = async function (req, res) {
	let organizationData = await organizations.find({});
	try {
		res.send(
			response.success(
				organizationData,
				response.messageForOrganizations.ALL_ORGANIZATION
			)
		);
	} catch (err) {
		res.send(response.error(err));
	}
};

//get user by id
organizationData.getOrganizationById = async function (req, res) {
	const { id } = req.params;
	let organizationData = await organizations.findOne({ _id: id });
	if (organizationData) {
		res.send(
			response.success(
				organizationData,
				response.messageForOrganizations.ORGANIZATION_ID
			)
		);
	} else {
		res.send(response.notFound());
	}
};

//get user by status
organizationData.getOrganizationByStatus = async function (req, res) {
	const { status } = req.params;
	let organizationData = await organizations.find({ status: `${status}` });

	if (organizationData) {
		res.send(
			response.success(
				organizationData,
				response.messageForOrganizations.ORGANIZATION_STATUS
			)
		);
	} else {
		res.send(response.notFound());
	}
};

//get user by id and update
organizationData.getUpdateOrganization = async function (req, res) {
	const { id } = req.params;
	try {
		let updateOrganization = await organizations.findOneAndUpdate(
			{
				_id: id,
			},
			{
				$set: {
					organization_id: req.body.organization_id,
					organization_name: req.body.organization_name,
					status: req.body.status,
					ceo: req.body.ceo,
					product: req.body.product,
				},
			}
		);
		res.send(
			response.success(
				updateOrganization,
				response.messageForOrganizations.ORGANIZATION_UPDATE
			)
		);
	} catch (err) {
		console.log("err", err);
	}
};

//delete api
organizationData.deleteOrganization = async function (req, res) {
	const { id } = req.params;
	let organizationData = await organizations.remove({ _id: id });

	try {
		res.send(
			response.success(
				organizationData,
				response.messageForOrganizations.ORGANIZATION_DELETE
			)
		);
	} catch (err) {
		res.send(response.notFound());
	}
};

module.exports = organizationData;
