const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const getAllUser = async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.send(users);
// };

const getUserId = async (req, res) => {
  const idUser = req.params.id;

  const userId = await prisma.user.findFirst({
    where: {
      id: parseInt(idUser),
    },
  });

  if (!userId) {
    return res.status(400).send("user not found");
  }
  res.send(userId);
};

const createUser = async (req, res) => {
  const newUser = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        phone_number: newUser.phone_number,
        image_url: newUser.image_url,
        update_at: newUser.update_at,
      },
    });
    res.status(201).send({
      data: user,
      message: "create user success",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const idUser = req.params.id;

  await prisma.user.delete({
    where: {
      id: parseInt(idUser),
    },
  });
  res.send("user deleted");
};

const updateUser = async (req, res) => {
  const idUser = req.params.id;
  const updateUser = req.body;
  if (
    !(
      updateUser.first_name &&
      updateUser.last_name &&
      updateUser.email &&
      updateUser.password &&
      updateUser.phone_number &&
      updateUser.image_url &&
      updateUser.update_at
    )
  ) {
    res.status(400).send("some fields are missing");
  }
  const user = await prisma.user.update({
    where: {
      id: parseInt(idUser),
    },
    data: {
      first_name: updateUser.first_name,
      last_name: updateUser.last_name,
      email: updateUser.email,
      password: updateUser.password,
      phone_number: updateUser.phone_number,
      image_url: updateUser.image_url,
      update_at: updateUser.update_at,
    },
  });
  res.send({
    data: user,
    message: "user updated",
  });
};

module.exports = { getUserId, createUser, deleteUser, updateUser };
