import {Gallery} from"../models/Gallery.model.js"

export const createGallery= async(req,res)=>{
    try {
        const{title,imagesUrl,date} = req.body;
        if(!title ||!imagesUrl ||!date){
            return res.status(400).json({status:"No",message:"All Fields Are Required in Gallery"})
        }
        const newGallery=new Gallery({
            title,imagesUrl,date
        })
        await newGallery.save();
       return res.status(201).json({status:"Yes",message:"Gallery Create Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
         
    }
}

export const getGallerys= async (req,res)=>{
    try {
        const gallerys = await Gallery.find();
        if(!gallerys || gallerys.length ===0){
            return res.status(400).json({status:"No",message:"No Data Found"})
        }
        return res.status(200).json({status:"Yes",message:"Success",data:gallerys})
   
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}

export const deleteGallery=async(req,res)=>{
    let id=req.params.id;
    try {
        const gallery = await Gallery.findByIdAndDelete(id);
        if(!gallery ){
            return res.status(400).json({status:"Yes",message:"No Galllery Found"}) 
        }
        return res
            .status(200)
            .json({status:"Yes",message:"Gallery Delete Successfully "})
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}


export const updateGallery = async(req,res)=>{
    let id=req.params.id;
    try {
        
        const{title,imagesUrl,date} = req.body;
        if(!title  ||!imagesUrl ||!date){
            return res.status(400).json({status:"No",message:"All Fields Are Required"})
        }
        const gallery = await Gallery.findById(id);
        if(!gallery ){
            return res.status(400).json({status:"Yes",message:"No Data Found"}) 
        }

        const updatedGallery = await Gallery.findByIdAndUpdate(id,{title,imagesUrl,date},{ new: true })
        if(updatedGallery){
            return res
            .status(201)
            .json({status:"Yes",message:"Gallery Updated Successfully "})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"No",error:`Internal Server Error:${error}`})
       
    }
}