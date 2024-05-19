import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB Connected to Database: ${connectionInstance.connection.name}, Port: ${connectionInstance.connection.port},  Host: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance.connection);
    }
    catch(error){
        console.log("MONGODB connection failed ", error);
        process.exit(1);
    }
}

export default connectDB;
