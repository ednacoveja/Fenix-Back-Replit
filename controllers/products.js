import Product from "../models/Product.js"
import { uploadImage, deleteImage } from "../utils/cloudinary.js"
import fs from "fs-extra"


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getProductId = async (req, res) => {
  try {
    const productId = await Product.findById(req.params.id)
    if (!productId) return res.satus(404).json({
      message: "Product does not exists"
    })
    return res.json(productId)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const createProducts = async (req, res) => {
  try {
    const { name, description, price,type,rating } = req.body
    const newProduct = new Product({
      name,
      description,
      price,
      type,
      rating,
    })
    if (req.files) {
      const result = await uploadImage(req.files.image.tempFilePath)
      newProduct.image = result.secure_url
      newProduct.urlDelete = result.public_id
      
      await fs.unlink(req.files.image.tempFilePath)
    }
    await newProduct.save()
    res.json(newProduct)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const updateProducts = async (req, res) => {
  try {
    const { id } = req.params
    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.json(productUpdated)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


export const deleteProducts = async (req, res) => {
  try {
    const productDelete = await Product.findByIdAndDelete(req.params.id)

    if (!productDelete) return res.satus(404).json({
      message: "Product does not exists"
    })
    if (productDelete.urlDelete) {
      await deleteImage(productDelete.urlDelete)
    }
    return res.json(productDelete)
  }
  catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

