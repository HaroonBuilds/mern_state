import { Router } from "express";
import {signIn} from '../controllers/auth.controller.js';
import { signUp } from "../controllers/auth.controller.js";
const authRouter = Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",signIn)

export default authRouter