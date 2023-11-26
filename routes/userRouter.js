const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// userRouter.get("/users", userController.getAllUser);
userRouter.get("/user/:id", userController.getUserId);
userRouter.post("/user", userController.createUser);
userRouter.delete("/user/:id", userController.deleteUser);
userRouter.put("/user/:id", userController.updateUser);

module.exports = userRouter;
