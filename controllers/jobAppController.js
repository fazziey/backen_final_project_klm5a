const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllJobApp = async (req, res) => {
  const jobs = await prisma.jobapplication.findMany();
  res.send(jobs);
};

const getJobAppId = async (req, res) => {
  const idJobApp = req.params.id;

  const jobAppId = await prisma.jobapplication.findFirst({
    where: {
      id: parseInt(idJobApp),
    },
  });
  if (!jobAppId) {
    return res.status(400).send("job application not found");
  }
  res.send(jobAppId);
};

const createJobApp = async (req, res) => {
  const newJobApp = req.body;
  try {
    const jobApp = await prisma.jobapplication.create({
      data: {
        user_id: newJobApp.user_id,
        job_id: newJobApp.job_id,
        image_url: newJobApp.image_url,
        description: newJobApp.description,
        cover_letter: newJobApp.cover_letter,
        update_at: newJobApp.update_at,
      },
    });
    res.status(201).send({
      data: jobApp,
      message: "create job aplication success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

const deleteJobApp = async (req, res) => {
  const idJobApp = req.params.id;

  await prisma.jobapplication.delete({
    where: {
      id: parseInt(idJobApp),
    },
  });
  res.send("job aplication deleted");
};

const updateJobApp = async (req, res) => {
  const idJobApp = req.params.id;
  const updateJobApp = req.body;
  if (
    !(
      updateJobApp.user_id &&
      updateJobApp.job_id &&
      updateJobApp.image_url &&
      updateJobApp.description &&
      updateJobApp.cover_letter &&
      updateJobApp.update_at
    )
  ) {
    res.status(400).send("some fields are missing");
  }
  const jobApp = await prisma.jobapplication.update({
    where: {
      id: parseInt(idJobApp),
    },
    data: {
      user_id: updateJobApp.user_id,
      job_id: updateJobApp.job_id,
      image_url: updateJobApp.image_url,
      description: updateJobApp.description,
      cover_letter: updateJobApp.cover_letter,
      update_at: updateJobApp.update_at,
    },
  });
  res.send({
    data: jobApp,
    message: "job aplication updated",
  });
};

module.exports = {
  getAllJobApp,
  getJobAppId,
  createJobApp,
  deleteJobApp,
  updateJobApp,
};
