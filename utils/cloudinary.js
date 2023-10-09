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

export async function uploadImageEmprendimiento(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "fenix-replit/emprendimiento"
  })
}
export async function uploadImageProducts(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "fenix-replit/products"
  })
}

export async function deleteImage(publicId, folder) {
  const publicIdWithFolder = folder ? `${folder}/${publicId}` : publicId;
  return await cloudinary.uploader.destroy(publicIdWithFolder);
}