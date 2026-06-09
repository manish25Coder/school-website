import mongoose from 'mongoose'

const gallerySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    imagesUrl:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
},
{
    timestamps:true,
}

)

export const Gallery = mongoose.model("Gallery",gallerySchema)