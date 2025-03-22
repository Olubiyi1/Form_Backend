
import userModel,{IUser} from "../models/userSchema.model";
import { comparePassword,hashPassword } from "../middleware/guard";
// import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import config from "../config/config";

export const createUser = async (userData: IUser)=>{
    
    try{
        const existingUser = await userModel.findOne({ email : userData.email});
        if (existingUser){
            return {error:"Email already Exists", data: null}
        }

        const password = await hashPassword(userData.password)
        const newUser = new userModel({...userData, password});

        const savedUser =  await newUser.save()
        return { error : null,data: savedUser}
       
    }
    catch(error:any){
        return { error: "failed to register new user",data: null}
    }
}


 export const signIn = async(email:string, password: string)=>{
    try{
        // find the user by email
        const user = await userModel.findOne({email});

        // if no user found with that email
        if(!user){
            return {error :"invalid email or password", data: null}
        }

        // verify password match
        const isPasswordValid = await comparePassword(password, user.password);

        if(!isPasswordValid){
            return { error : "invalid email or password", data: null}
        }
        // create JWT
        const token = jwt.sign(
            { data: user._id},
             config.Secret,
            {expiresIn: '1d'}  
        );


        return {error: null, token, data: user};
    }
    catch (error:any){
        return { error : "invalid login details", data:null}
    }
 }
