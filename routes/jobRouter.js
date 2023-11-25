const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/jobController");

jobRouter.get("/jobs", jobController.getAllJob);
jobRouter.get("/jobs/:id", jobController.getJobId);
jobRouter.post("/jobs", jobController.createJob);
jobRouter.delete("/jobs/:id", jobController.deleteJob);
jobRouter.put("/jobs/:id", jobController.updateJob);

module.exports = jobRouter;
