import {Contact} from"../models/Contact.model.js"

export const createContact= async(req,res)=>{
    try {
        const{name,email,phone,subject,message} = req.body;
        if(!name ||!email ||!phone ||!subject ||!message){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const newContact=new Contact({
            name,
            email,
            phone,
            subject,
            message
        })
        await newContact.save();
       return res.status(201).json({status:"Yes",message:"Thank You! we will Contact you ASAP!!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`}) 
    }
}

export const getContacts= async (req,res)=>{
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length ===0){
            return res.status(400).json({status:"No",message:"No Data Found"})
        }
        return res.status(200).json({status:"Yes",message:"Success",data:contacts})
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const deleteContact=async(req,res)=>{
    let id=req.params.id;
    try {
        const contact = await Contact.findByIdAndDelete(id);
        if(!contact ){
            return res.status(400).json({status:"Yes",message:"No Data Found"}) 
        }
        return res
            .status(200)
            .json({status:"Yes",message:"Contact Delete Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}