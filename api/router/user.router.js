import { Router } from "express";
import test from '../controllers/user.controller.js'
const router = Router();

router.post("/signup",signup)


export default router