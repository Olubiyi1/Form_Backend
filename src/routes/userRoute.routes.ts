import express from "express"
import { registerUser, loginUser } from "../controllers/user.controller"

const userRoute = express.Router()

userRoute.get("/",(req,res)=>{
    res.send("up and running")
})

userRoute.post("/register",registerUser)
userRoute.post("/login",loginUser)


export default userRoute;