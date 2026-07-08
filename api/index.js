import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import userRouter from './router/user.router.js'
import authRouter from './router/auth.router.js'
dotenv.config()
const app = express();
app.use(express.json())
// app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("database is connected successfully")
}).catch(()=>{console.log("error while connecting  to database")})

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "eternal server error";
    return res.status(statuscode)
    .json({
        success:false,
        statuscode,
        message,
    })
})

app.listen(4000,()=>{
    console.log(`server is runing on port 4000`);
    
})

