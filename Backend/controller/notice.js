import {Notice} from"../models/Notice.model.js"

export const createNotice= async(req,res)=>{
    try {
        const{title,description,date,category} = req.body;
        if(!title ||!description ||!date ||!category){
            return res.status(400).json({status:"No",message:"All Fields Are Required in Notice"})
        }
        const newNotice=new Notice({
            title,description,date,category
        })
        await newNotice.save();
       return res.status(201).json({status:"Yes",message:"Notice Create Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
}

export const getNotices= async (req,res)=>{
    try {
        const notices = await Notice.find();
        if(!notices || notices.length ===0){
            return res.status(400).json({status:"No",message:"No Data Found"})
        }
        return res.status(200).json({status:"Yes",message:"Success",data:notices})
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const deleteNotice=async(req,res)=>{
    let id=req.params.id;
    try {
        const notice = await Notice.findByIdAndDelete(id);
        if(!notice ){
            return res.status(400).json({status:"Yes",message:"No Notice Found"}) 
        }
        return res
            .status(200)
            .json({status:"Yes",message:"Notice Delete Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}


export const updateNotice = async(req,res)=>{
    let id=req.params.id;
    try {
        
        const{title,description,date,category} = req.body;
        if(!title  ||!description ||!date ||!category){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const notice = await Notice.findById(id);
        if(!notice ){
            return res.status(400).json({status:"Yes",message:"No Notices Found"}) 
        }

        const updatedNotice = await Notice.findByIdAndUpdate(id,{title,description,date,category},{ new: true })
        if(updatedNotice){
            return res
            .status(201)
            .json({status:"Yes",message:"Notices Updated Successfully "})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}