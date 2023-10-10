import User from "../models/User.js"
import { uploadImageEmprendimiento, deleteImage } from "../utils/cloudinary.js"
import fs from "fs-extra"


export const getUsers = async (req, res) => {
  try {
    const { nombre } = req.query;

    if (!nombre) {
      let users = await User.find();
      res.json(users);
    } else {
      const regex = new RegExp(nombre, 'i');

      let users = await User.find({ nombre: regex })
      if (users.length) {
        res.status(200).send(users);
      } else {
        res.status(404).send("Nombre not found");
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserId = async (req, res) => {
  try {
    const userId = await User.findById(req.params.id)
    if (!userId) return res.satus(404).json({
      message: "User does not exists"
    })
    return res.json(userId)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const createUser = async (req, res) => {
  try {
    const { nombre, instagram, description } = req.body;
    const newUser = new User({
     nombre, 
     instagram, 
     description,
    })
      if (req.files) {
      const result = await uploadImageEmprendimiento(req.files.image.tempFilePath)
      newUser.image = result.secure_url
      newUser.urlDelete = result.public_id

      await fs.unlink(req.files.image.tempFilePath)
    }
    console.log(newUser)
    await newUser.save() 
    res.json(newUser)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id,req.body, {
      new: true
    });

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const userUpdated = await user.save();
    return res.json(userUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.params.id)

    if (!userDelete) return res.satus(404).json({
      message: "User does not exists"
    })
     if (userDelete.urlDelete) {
      await deleteImage(userDelete.urlDelete,"fenix-replit/emprendimiento")
    }

    return res.json(userDelete)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

