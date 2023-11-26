const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllJob = async (req, res) => {
  const jobs = await prisma.job.findMany();
  res.send(jobs);
};

const getJobId = async (req, res) => {
  const idJob = req.params.id;

  const jobId = await prisma.job.findFirst({
    where: {
      id: parseInt(idJob),
    },
  });
  if (!jobId) {
    return res.status(400).send("job not found");
  }
  res.send(jobId);
};

const createJob = async (req, res) => {
  const newJob = req.body;
  try {
    const job = await prisma.job.create({
      data: {
        image_url: newJobs.image_url,
        title: newJobs.title,
        description: newJobs.description,
        location: newJobs.location,
        salary: newJobs.salary,
        company_id: newJobs.company_id,
        update_at: newJobs.update_at,
      },
    });
    res.status(201).send({
      data: job,
      message: "create job success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

const deleteJob = async (req, res) => {
  const idJob = req.params.id;

  await prisma.job.delete({
    where: {
      id: parseInt(idJob),
    },
  });
  res.send("job deleted");
};

const updateJob = async (req, res) => {
  const idJob = req.params.id;
  const updateJob = req.body;
  if (
    !(
      updateJob.image_url &&
      updateJob.title &&
      updateJob.description &&
      updateJob.location &&
      updateJob.salary &&
      updateJob.company_id &&
      updateJob.update_at
    )
  ) {
    res.status(400).send("some fields are missing");
  }
  const job = await prisma.job.update({
    where: {
      id: parseInt(idJob),
    },
    data: {
      image_url: updateJob.image_url,
      title: updateJob.title,
      description: updateJob.description,
      location: updateJob.location,
      salary: updateJob.salary,
      company_id: updateJob.company_id,
      update_at: updateJob.update_at,
    },
  });
  res.send({
    data: job,
    message: "job updated",
  });
};

module.exports = { getAllJob, getJobId, createJob, deleteJob, updateJob };
