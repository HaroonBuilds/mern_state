// import userModel from '../model/user.model.js'
// const signUp = async(req,res=>{
//     const {email,password} = req.body
//     const user = await userModel.findOne({email})
//     if(user){
//         console.log("user already exist")
//     }
//     const newUser = new userModel({email,password});
//     return res.status(200)
//     .json({success:true,
//         message:"usercreated successfully",
//         createdUser:newUser
//     })
// })