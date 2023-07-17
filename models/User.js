import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  firstName: {
    type: Number,
  },
  lastName: {
    type: String,
  },
}, {
  timestamps: true
})

export default mongoose.model("User", productSchema)