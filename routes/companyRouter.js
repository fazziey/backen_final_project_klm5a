const express = require("express");
const companyRouter = express.Router();
const companyController = require("../controllers/companyController");

companyRouter.get("/companys", companyController.getAllCompany);
companyRouter.get("/company/:id", companyController.getCompanyId);
companyRouter.post("/company", companyController.createCompany);
companyRouter.delete("/company/:id", companyController.deleteCompany);
companyRouter.put("/company/:id", companyController.updateCompany);

module.exports = companyRouter;
