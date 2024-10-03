import { Router } from "express";
import userRoute from "./userRoute.mjs"

const router = Router()

router.use("/api/users" , userRoute)

export default router