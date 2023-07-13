import User from "../models/User.js"
import fs from "fs-extra"


export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getUserId = async (req, res) => {
  try {
    const userId = await User.findById(req.params.id)
    if (!userId) return res.satus(404).json({
      message: "Product does not exists"
    })
    return res.json(userId)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const createUser = async (req, res) => {
  try {
    const { email, contraseña, nombre,apellido } = req.body
    const newUser = new User({
      email, 
      contraseña, 
      nombre,
      apellido,
    })
   
    await newUser.save()
    res.json(newUser)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const userUpdated = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(usertUpdated)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const deleteUser = async (req, res) => {
  try {
    const userDelete = await Product.findByIdAndDelete(req.params.id)

    if (!userDelete) return res.satus(404).json({
      message: "User does not exists"
    })

    return res.json(userDelete)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}