import express from "express"
import {User} from "../models/User.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const router = express.Router();

export const register = router.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body
    try {
       if(!name || !email || !password){
        return res.status(400).json({status:"No",message:"All Fields Are Required"})
       } 

       const existingUser = await User.findOne({email})
       if(existingUser){
        return res.status(400).json({status:"No",message:"user Already Exists"})
       } 
       const hashedPassword= await bcrypt.hash(password,10)
       const newUser = new User({name,email,password: hashedPassword  });
       await newUser.save();
        return res.status(201).json({status:"Yes",message:"User Register Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
})

export const login = router.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
       if( !email || !password){
        return res.status(400).json({status:"No",message:"All Fields Are Required"})
       } 

       const existingUser = await User.findOne({email})
       if(!existingUser){
        return res.status(400).json({status:"No",message:"Invalid Email or Password"})
       } 

       const isvalidPassword = await bcrypt.compare(password,existingUser.password)

       if(!isvalidPassword){
        return res.status(400).json({status:"No",message:"Invalid Email or Password"})
       }

       const token =jwt.sign({userId:existingUser._id,email:existingUser.email,name:existingUser.name},process.env.JWT_SECRET,{expiresIn:"24h"})


       
        return res.status(201).json({status:"Yes",message:"Loged In Successfully ",token,user:{id:existingUser._id,name:existingUser.name,email:existingUser.email}})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
})