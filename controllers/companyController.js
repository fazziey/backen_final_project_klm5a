const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCompany = async (req, res) => {
  const companys = await prisma.company.findMany();
  res.send(companys);
};

const getCompanyId = async (req, res) => {
  const idCompany = req.params.id;

  const companyId = await prisma.company.findFirst({
    where: {
      id: parseInt(idCompany),
    },
  });
  if (!companyId) {
    return res.status(400).send("company not found");
  }
  res.send(companyId);
};

const createCompany = async (req, res) => {
  const newCompany = req.body;
  try {
    const company = await prisma.company.create({
      data: {
        name: newCompany.name,
        email: newCompany.email,
        phone_number: newCompany.phone_number,
        image_url: newCompany.image_url,
        description: newCompany.description,
        web_url: newCompany.web_url,
      },
    });
    res.status(201).send({
      data: company,
      message: "create company success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

const deleteCompany = async (req, res) => {
  const idCompany = req.params.id;

  await prisma.company.delete({
    where: {
      id: parseInt(idCompany),
    },
  });
  res.send("company deleted");
};

const updateCompany = async (req, res) => {
  const idCompany = req.params.id;
  const updateCompany = req.body;
  if (
    !(
      updateCompany.name &&
      updateCompany.email &&
      updateCompany.phone_number &&
      updateCompany.image_url &&
      updateCompany.description &&
      updateCompany.web_url
    )
  ) {
    res.status(400).send("some fields are missing");
  }
  const company = await prisma.company.update({
    where: {
      id: parseInt(idCompany),
    },
    data: {
      name: updateCompany.name,
      email: updateCompany.email,
      phone_number: updateCompany.phone_number,
      image_url: updateCompany.image_url,
      description: updateCompany.description,
      web_url: updateCompany.web_url,
    },
  });
  res.send({
    data: company,
    message: "company updated",
  });
};

module.exports = {
  getAllCompany,
  getCompanyId,
  createCompany,
  deleteCompany,
  updateCompany,
};
