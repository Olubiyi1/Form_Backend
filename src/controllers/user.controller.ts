// import { Request, Response } from "express";
// import {createUser,signIn} from "../services/user.service"
// import ResponseHandler from "../utils/responseHandler";


// // Define a type for your service responses
// type ServiceResponse = {
//     error: string | null;
//     data: any | null;
//   } | undefined;

// export const registerUser = async(req:Request, res:Response)=>{
//     try{
//         const {error,data} = await createUser(req.body)

//         if(error){
//             return ResponseHandler.validationError(res,null,error)
//         }
//         return ResponseHandler.success(res,data,"user created successfully");
//     }
//     catch(error: any){
//         return ResponseHandler.validationError(res,null, error.message)
//     }
// }

// export const loginUser = async(req:Request, res:Response)=>{
//     try{
//         const {email,password} = req.body

//         const {error,data}:ServiceResponse = await signIn(email,password);

//         if (error){
//             return ResponseHandler.validationError(res,null,error)
//         }
//         return ResponseHandler.success(res,data, "Login successful")
//     }
//     catch(error:any){
//         return ResponseHandler.validationError(res,null,error.message)
//     }
// }

// import { Request, Response } from "express"; 
// import {createUser, signIn} from "../services/user.service" 
// import ResponseHandler from "../utils/responseHandler";

// // Define a type for your service responses
// type ServiceResponse = {
//   error: string | null;
//   data: any | null;
// } | undefined;

// export const registerUser = async(req:Request, res:Response)=>{
//     try{
//         const result = await createUser(req.body);
        
//         if(!result) {
//             return ResponseHandler.validationError(res, null, "User creation failed");
//         }
        
//         const {error, data} = result;
        
//         if(error){
//             return ResponseHandler.validationError(res,null,error)
//         }
//         return ResponseHandler.success(res,data,"user created successfully");
//     }
//     catch(error: any){
//         return ResponseHandler.validationError(res,null, error.message)
//     }
// }

// export const loginUser = async(req:Request, res:Response)=>{
//     try{
//         const {email,password} = req.body;
        
//         const result = await signIn(email,password);
        
//         if(!result) {
//             return ResponseHandler.validationError(res, null, "Authentication failed");
//         }
        
//         const {error,data} = result;
        
//         if (error){
//             return ResponseHandler.validationError(res,null,error)
//         }
//         return ResponseHandler.success(res,data, "Login successful")
//     }
//     catch(error:any){
//         return ResponseHandler.validationError(res,null,error.message)
//     }
// }

import { Request, Response } from "express"; 
import {createUser, signIn} from "../services/user.service" 
import ResponseHandler from "../utils/responseHandler";

export const registerUser = async(req:Request, res:Response)=>{
    try{
        // you must always store in a variable first and check if it exists before destructing to extract {data and error}
        const result = await createUser(req.body);
        
        if(!result) {
            return ResponseHandler.validationError(res, null, "User creation failed");
        }
        
        const {error, data} = result;
        
        if(error){
            return ResponseHandler.validationError(res,null,error)
        }
        return ResponseHandler.success(res,data,"user created successfully");
    }
    catch(error: any){
        return ResponseHandler.validationError(res,null, error.message)
    }
}

export const loginUser = async(req:Request, res:Response)=>{
    try{
        const {email,password} = req.body;
        
        // you must always store in a variable first and check if it exists before destructing to extract {data and error}
        const result = await signIn(email,password);
        
        if(!result) {
            return ResponseHandler.validationError(res, null, "Authentication failed");
        }
        
        const {error,data} = result;
        
        if (error){
            return ResponseHandler.validationError(res,null,error)
        }
        return ResponseHandler.success(res,data, "Login successful")
    }
    catch(error:any){
        return ResponseHandler.validationError(res,null,error.message)
    }
}