import {Teacher} from"../models/Teacher.model.js"

export const createTeacher= async(req,res)=>{
    try {
        const{name,subject,designation,bio,image} = req.body;
        if(!name ||!subject ||!designation ||!bio ||!image){
            return res.status(400).json({status:"No",message:"All Fields Are Required in Notice"})
        }
        const newTeacher=new Teacher({
            name,subject,designation,bio,image
        })
        await newTeacher.save();
       return res.status(201).json({status:"Yes",message:"Teacher Create Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
}

export const getTeachers= async (req,res)=>{
    try {
        const teachers = await Teacher.find();
        if(!teachers || teachers.length ===0){
            return res.status(400).json({status:"No",message:"No Data Found"})
        }
        return res.status(200).json({status:"Yes",message:"Success",data:teachers})
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const deleteTeacher=async(req,res)=>{
    let id=req.params.id;
    try {
        const teacher = await Teacher.findByIdAndDelete(id);
        if(!teacher ){
            return res.status(400).json({status:"Yes",message:"No teacher Found"}) 
        }
        return res
            .status(200)
            .json({status:"Yes",message:"teacher Delete Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}


export const updateTeacher = async(req,res)=>{
    let id=req.params.id;
    try {
        
        const{name,subject,designation,bio,image} = req.body;
        if(!name ||!subject ||!designation ||!bio ||!image){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const teacher = await Teacher.findById(id);
        if(!teacher ){
            return res.status(400).json({status:"Yes",message:"No Teacher Found"}) 
        }

        const updatedTeacher = await Teacher.findByIdAndUpdate(id,{name,subject,designation,bio,image},{ new: true })
        if(updatedTeacher){
            return res
            .status(201)
            .json({status:"Yes",message:"Teacher Updated Successfully "})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}