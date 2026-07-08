import userModel from '../model/user.model.js'
import errorHandler from '../utils/errorHandler.js';
const signUp = async(req,res,next)=>{
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

export default signUp