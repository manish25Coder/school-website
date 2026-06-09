import {Event} from"../models/Event.model.js"

export const createEvent= async(req,res)=>{
    try {
        const{title,description,shortDescription,date,location} = req.body;
        if(!title ||!description ||!shortDescription ||!date ||!location){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const newEvent=new Event({
            title,description,shortDescription,date,location
        })
        await newEvent.save();
       return res.status(201).json({status:"Yes",message:"Event Create Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
}

export const getEvents= async (req,res)=>{
    try {
        const events = await Event.find();
        // if(!events || events.length ===0){
        //     return res.status(400).json({status:"No",message:"No Data Found"})
        // }
        return res.status(200).json({status:"Yes",message:"Success",data:events})
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const deleteEvent=async(req,res)=>{
    let id=req.params.id;
    try {
        const event = await Event.findByIdAndDelete(id);
        if(!event ){
            return res.status(400).json({status:"Yes",message:"No Data Found"}) 
        }
        return res
            .status(200)
            .json({status:"Yes",message:"Event Delete Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const updateEvent = async(req,res)=>{
    let id=req.params.id;
    try {
        
        const{title,description,shortDescription,date,location} = req.body;
        if(!title ||!description ||!shortDescription ||!date ||!location){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const event = await Event.findById(id);
        if(!event ){
            return res.status(400).json({status:"Yes",message:"No Data Found"}) 
        }

        const updatedEvent = await Event.findByIdAndUpdate(id,{title,description,shortDescription,date,location})
        if(updatedEvent){
            return res
            .status(201)
            .json({status:"Yes",message:"Event Updated Successfully "})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}