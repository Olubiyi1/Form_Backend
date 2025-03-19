import bcrypt from "bcrypt"


// hash password during login
export const hashPassword = (password: string)=>{
    return bcrypt.hash(password,10)
}

// compare password during login
export const comparePassword = (password: string,hash: string)=>{
    return bcrypt.compare(password,hash)
}