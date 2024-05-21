import dotenv from 'dotenv';
import connectDB from "./db/database.js"; 
import express from 'express';

dotenv.config({
    path: './env'
})

const app = express();

connectDB()
.then(()=>{
 app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port: ${process.env.PORT}`);
 })   
})
.catch((err)=>{
    console.log("MongoDB Connection Failed ",err);
})

app.get('/',(req, res)=>{
    res.send('Hello Sever');
})