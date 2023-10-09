import { Router } from "express"
import {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/users.js"
import fileUpload from "express-fileupload"


const router = Router()

router.get("/users", getUsers)
router.get("/users/:id", getUserId)
router.post("/users",fileUpload({
  useTempFiles: true,
  tempFileDir: "./uploadsUser/"
}),createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

export default router