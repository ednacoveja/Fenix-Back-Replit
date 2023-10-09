import app from "./app.js"
import { connectToDB } from "./utils/mongoose.js"


async function main() {
  await connectToDB()
  app.listen(8000)
  console.log("Server is running on port", 8000)
}

main()




