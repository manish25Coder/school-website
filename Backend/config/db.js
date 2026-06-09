import mongoose from "mongoose"
import dotenv from 'dotenv';

export const connectDB= async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{})
        console.log("MongoDB connected successfully ")
    } catch (error) {
        console.log("MongoDB connection Failed ",error.message)
        process.exit(1)
    }
}