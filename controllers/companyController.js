const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCompany = async (req, res) => {
  const companys = await prisma.company.findMany();
  res.send(companys);
};

const getCompanyId = async (req, res) => {
  const idCompany = req.params.id;

  const companys = await prisma.company.findFirst({
    where: {
      id: parseInt(idCompany),
    },
  });
  res.send(companys);
};

const createCompany = async (req, res) => {
  const newCompanys = req.body;
  try {
    const companys = await prisma.company.create({
      data: {
        name: newCompanys.name,
        email: newCompanys.email,
        phone_number: newCompanys.phone_number,
        description: newCompanys.description,
        web_url: newCompanys.web_url,
      },
    });
    res.status(201).send({
      data: companys,
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
      updateCompany.description &&
      updateCompany.web_url
    )
  ) {
    res.status(400).send("some fields are missing");
  }
  const companys = await prisma.company.update({
    where: {
      id: parseInt(idCompany),
    },
    data: {
      name: updateCompany.name,
      email: updateCompany.email,
      phone_number: updateCompany.phone_number,
      description: updateCompany.description,
      web_url: updateCompany.web_url,
    },
  });
  res.send({
    data: companys,
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
