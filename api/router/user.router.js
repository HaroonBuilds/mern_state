import { Router } from "express";
import signup from '../controllers/user.controller.js';
import updateUser from '../controllers/user.controller.js'
const router = Router();

router.post("/signup",signup)
router.post("/upadte/:id",userUpdate)

export default router