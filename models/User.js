import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  urlDelete: {
    type: String,
  }
}, {
  timestamps: true
})

export default mongoose.model("User", userSchema)