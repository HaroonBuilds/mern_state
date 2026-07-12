
import userModel from '../model/user.model.js'
import errorHandler from '../utils/errorHandler.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const signUp = async(req,res,next)=>{
const {username,email,password} = req.body;
try {
    // const hashedPassword = await bcrypt.hash(password,10)
    const user = new userModel({username,email,password});
    await user.save();
    return res.status(201).
    json({message:"user has been created"})
} catch(error){
    console.log("eror in the signup controller")
    next(error)
}
}

export const  signIn = async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await userModel.findOne({email});
        if(!validUser) return next(errorHandler(404,"User does not exist"));
        const isPasswordValid = await validUser.camparePassword(password);
        if(!isPasswordValid) return next(errorHandler(401,"wrong credential"))
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRETE);
        const {password:pass,...rest} = validUser._doc;
        res.cookie("access_token",token,{httpOnly:true})
        .status(200)
        .json({
            success:true,
            message:"user login successfully",
            rest
        })
       
    } catch (error) {
        console.log("error in the signin controller")
        next(error)
    }
}

export const  google = async(req,res,next)=>{
    try {
       
        const user = await userModel.findOne({email:req.body.email}).select('-password');
        if(user){
            console.log("user already exist error ")
            const token = jwt.sign({id:user._id},process.env.JWT_SECRETE);
            const options = {
                secure:true,
                httpOnly:true,
            }
            res.status(200).
            cookie("access_token",token,options)
            .json({
                success:true,
                message:"login successfully",
                user
            })}
            else{
                const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
                const hashedPassword = await bcrypt.hash(generatedPassword,10);
                const user = new userModel({username:req.body.username.split(" ").join("").toLowerCase()+ Math.random().toString(36).slice(-4),email:req.body.email,password:hashedPassword,avatar:req.body.photo});
                await user.save();
                const token = jwt.sign({id:user._id},process.env.JWT_SECRETE)
                const {password:pass,...rest} = user._doc
                res.status(200).cookie('access_token', token,{httpOnly:true,secure:true}).json({rest})
            }

    } catch (error) {
        console.log("erro in the signup controller")
        next(error)
    }
}
