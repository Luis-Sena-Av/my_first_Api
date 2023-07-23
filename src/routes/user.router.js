const { getAll, createUser, getOneUser, deleteUser, updateRegister } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
	.get(getAll)
	.post(createUser)

userRouter.route("/:id")
	.get(getOneUser)
	.delete(deleteUser)
	.put(updateRegister)
module.exports = userRouter;