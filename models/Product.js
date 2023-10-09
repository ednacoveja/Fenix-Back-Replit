import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  type:{
    type:String,
  },
  rating:{
    type:Number,
  },
  description:{
    type:String,
    trim:true,
  },
  price:{
    type:Number,
    default:0
  },
  image:{
    type:String,
  },
  emprendimiento:{
    type:String,
  },
  urlDelete:{
     type:String,
  }
},{
  timestamps:true
})

export default mongoose.model("Product", productSchema)