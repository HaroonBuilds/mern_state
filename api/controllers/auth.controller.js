import userModel from '../model/user.model.js'
import errorHandler from '../utils/errorHandler.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const signUp = async(req,res,next)=>{
const {username,email,password} = req.body;
const user = new userModel({username,email,password});
try {
    await user.save();
    return res.status(201).
    json({message:"user has been created"})
} catch(error){
    next(error)
}
}

export const  signIn = async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await userModel.findOne({email});
        if(!validUser) return next(errorHandler(404,"User does not exist"));
        const isPasswordValid = bcrypt.compare(password,validUser.password)
        if(!isPasswordValid) return next(errorHandler(401,"wrong credential"))
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRETE,);
        const {password:pass,...rest} = validUser._doc;
        res.cookie("access_token",token,{httpOnly:true})
        .status(200)
        .json({
            success:true,
            message:"user login successfully",
            rest
        })
    } catch (error) {
        next(error)
    }
}
