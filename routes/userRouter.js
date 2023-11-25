const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/users", userController.getAllUser);
userRouter.get("/users/:id", userController.getUserId);
userRouter.post("/users", userController.createUser);
userRouter.delete("/users/:id", userController.deleteUser);
userRouter.put("/users/:id", userController.updateUser);

module.exports = userRouter;
