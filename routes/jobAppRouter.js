const express = require("express");
const jobAppRouter = express.Router();
const jobAppController = require("../controllers/jobAppController");

jobAppRouter.get("/jobapplications", jobAppController.getAllJobApp);
jobAppRouter.get("/jobapplications/:id", jobAppController.getJobAppId);
jobAppRouter.post("/jobapplications", jobAppController.createJobApp);
jobAppRouter.delete("/jobapplications/:id", jobAppController.deleteJobApp);
jobAppRouter.put("/jobapplications/:id", jobAppController.updateJobApp);

module.exports = jobAppRouter;
