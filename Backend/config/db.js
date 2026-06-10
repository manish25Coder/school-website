import mongoose from "mongoose"
import dotenv from 'dotenv';

export const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Using existing MongoDB connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log("MongoDB connected successfully ")
    } catch (error) {
        console.error("MongoDB connection Failed ", error.message)
        throw error;
    }
}