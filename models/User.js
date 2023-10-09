import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  emprendimiento: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: Number,
  },
  instagram: {
    type: String,
  },
  description: {
    type: String,
  },
  image:{
    type:String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  urlDelete:{
     type:String,
  }
}, {
  timestamps: true
})

export default mongoose.model("User", userSchema)