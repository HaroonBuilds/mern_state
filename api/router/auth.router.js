import { Router } from "express";
import {signIn} from '../controllers/auth.controller.js';
import { signUp } from "../controllers/auth.controller.js";
import { google } from "../controllers/auth.controller.js";
const authRouter = Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",signIn)
authRouter.post("/google",google)
export default authRouter