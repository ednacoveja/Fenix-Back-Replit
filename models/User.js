import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  constraseña:{
    type:String,
  },
  nombre:{
    type:Number,
  },
  apellido:{
    type:String,
  },
},{
  timestamps:true
})

export default mongoose.model("User", productSchema)