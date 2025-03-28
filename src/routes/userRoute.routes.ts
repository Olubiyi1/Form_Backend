import express from "express"
import { registerUser, loginUser } from "../controllers/user.controller"
import userValidationSchema from "../models/userValidationSchema"
import {validateRequest} from "../middleware/userValidationMiddleware"

const userRoute = express.Router()

userRoute.get("/",(req,res)=>{
    res.send("up and running")
})

userRoute.post("/register",validateRequest(userValidationSchema),registerUser)
userRoute.post("/login",loginUser)


export default userRoute;