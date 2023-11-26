const express = require("express");
const jobAppRouter = express.Router();
const jobAppController = require("../controllers/jobAppController");

jobAppRouter.get("/jobapplications", jobAppController.getAllJobApp);
jobAppRouter.get("/jobapplication/:id", jobAppController.getJobAppId);
jobAppRouter.post("/jobapplication", jobAppController.createJobApp);
jobAppRouter.delete("/jobapplication/:id", jobAppController.deleteJobApp);
jobAppRouter.put("/jobapplication/:id", jobAppController.updateJobApp);

module.exports = jobAppRouter;
