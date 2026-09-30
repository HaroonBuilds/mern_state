import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import {updateUser} from '../controllers/user.controller.js'
import verifyUser from '../utils/verifyUser.js'
const userRouter = Router();

userRouter.post("/update/:id",verifyUser,updateUser)

export default userRouter