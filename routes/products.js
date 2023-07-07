import { Router } from "express"
import {
  getProducts,
  getProductId,
  createProducts,
  updateProducts,
  deleteProducts
} from "../controllers/products.js"
import fileUpload from "express-fileupload"

const router = Router()

router.get("/products", getProducts)
router.get("/products/:id", getProductId)
router.post("/products", fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploads/"
}), createProducts)
router.put("/products/:id", updateProducts)
router.delete("/products/:id", deleteProducts)

export default router