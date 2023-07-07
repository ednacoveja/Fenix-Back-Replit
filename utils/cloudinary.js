import { v2 as cloudinary } from "cloudinary"
//const {CLOUD_NAME,API_KEY,API_SECRET} = process.env['CLOUD_NAME',"API_KEY","API_SECRET"]
const CLOUD_NAME = process.env['CLOUD_NAME']
const API_KEY = process.env['API_KEY']
const API_SECRET = process.env['API_SECRET']


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true
})

export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "fenix-replit"
  })
}

export async function deleteImage(publicId) {
  return await cloudinary.uploader.destroy(publicId)
}