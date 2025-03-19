// import { error } from "console";
import userModel,{IUser} from "../models/userSchema.model";
import { comparePassword,hashPassword } from "../middleware/guard";
// import mongoose from "mongoose";

export const createUser = async (userData: IUser)=>{
    try{
        const existingUser = await userModel.findOne({ email : userData.email});
        if (existingUser){
            return {error:"Email already Exists", data: null}
        }

        const password = await hashPassword(userData.password)
        const newUser = new userModel({...userData, password});
        return await newUser.save();
    }
    catch(error:any){
        return { error: "failed to register new user",data: null}
    }
}
 