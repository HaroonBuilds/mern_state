import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },

     email:{
        type:String,
        require:true,
        unique:true
    },

     password:{
        type:String,
        require:true,
        
    },
},{timestamps:true})

userSchema.pre('save',async function(req,res){
    if (!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password,10)
})

const User = mongoose.model("User",userSchema)

export default User