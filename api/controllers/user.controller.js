import userModel from '../model/user.model.js'
import errorHandler from '../utils/errorHandler.js'
const signUp = async(req,res) =>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(user){
        console.log("user already exist")
    }
    const newUser = new userModel({email,password});
    return res.status(200)
    .json({success:true,
        message:"usercreated successfully",
        createdUser:newUser
    })
}


// const updateUser = async(req,res,next)=>{
//     if(req.user.id !== req.params.id) return next(errorHandler(401,"You can only update your own account"));
//     try {
//         if(re)
//     } catch (error) {
//         next()
//     }

// }