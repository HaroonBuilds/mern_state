import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("database is connected successfully")
}).catch(console.log("error while connecting to the database"))

app.listen(4000,()=>{
    console.log(`server is runing on port 400`);
    
})