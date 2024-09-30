import express from 'express';
import { deleteToken, getUser, loginController, registerController } from './user.controller.js';
import { cookieAutn } from '../middlewares/auth.js';
const userRouter = express.Router();


userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/verifyToken", cookieAutn, getUser);
userRouter.post("/deleteToken", cookieAutn, deleteToken);


export default userRouter;