const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");

jobRouter.get("/jobs", jobController.getAllJob);
jobRouter.get("/job/:id", jobController.getJobId);
jobRouter.post("/job", jobController.createJob);
jobRouter.delete("/job/:id", jobController.deleteJob);
jobRouter.put("/job/:id", jobController.updateJob);

module.exports = jobRouter;
