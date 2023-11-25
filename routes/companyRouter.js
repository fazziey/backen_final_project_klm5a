const express = require("express");
const companyRouter = express.Router();
const companyController = require("../controllers/companyController");

companyRouter.get("/companys", companyController.getAllCompany);
companyRouter.get("/companys/:id", companyController.getCompanyId);
companyRouter.post("/companys", companyController.createCompany);
companyRouter.delete("/companys/:id", companyController.deleteCompany);
companyRouter.put("/companys/:id", companyController.updateCompany);

module.exports = companyRouter;
