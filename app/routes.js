const express = require("express");
const routes = express();

const api = require("../app/api/index");

// >>>> users route <<<<
routes.get("/users", api.getAllUsers);
routes.get("/users/:id", api.getUserById);
routes.get("/users/status/:status", api.getUserByStatus);
routes.put("/users/update/:id", api.getUpdateUser);
routes.delete("/users/delete/:id", api.deleteUser);
routes.post("/users/insertUser", api.insertuser);

// >>>> department route <<<<
routes.get("/departments", api.allDepartments);
routes.get("/departments/:id", api.getDepartmentById);
routes.get("/departments/status/:status", api.getDepartmentByStatus);
routes.put("/departments/update/:id", api.getUpdateDepartment);
routes.delete("/departments/delete/:id", api.deleteDepartment);
routes.post("/departments/insertDepartment", api.insertDepartment);

// >>>> division route <<<<
routes.get("/divisions", api.getAllDivision);
routes.get("/divisions/:id", api.getDivisionById);
routes.get("/divisions/status/:status", api.getDivisionByStatus);
routes.put("/divisions/update/:id", api.getUpdateDivision);
routes.delete("/divisions/delete/:id", api.deleteDivision);
routes.post("/divisions/insertDivision", api.insertDivision);

// >>>> designations route <<<<
routes.get("/designations", api.getAllDesignations);
routes.get("/designations/:id", api.getDesignationById);
routes.get("/designations/status/:status", api.getDesignationByStatus);
routes.put("/designations/update/:id", api.getUpdateDesignations);
routes.delete("/designations/delete/:id", api.deleteDesignation);
routes.post("/designations/insertDesignation", api.insertDesignation);

// >>>> organizations route <<<<
routes.get("/organizations", api.getAllOrganizations);
routes.get("/organizations/:id", api.getOrganizationById);
routes.get("/organizations/status/:status", api.getOrganizationByStatus);
routes.put("/organizations/update/:id", api.getUpdateOrganization);
routes.delete("/organizations/delete/:id", api.deleteOrganization);
routes.post("/organizations/insertOrganization", api.insertOrganization);

// routes.use("/organizations", organizationRoute);

module.exports = routes;
