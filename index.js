import app from "./app.js"
import {connectToDB} from "./utils/mongoose.js"


async function main(){
  await connectToDB()
  app.listen(3001)
  console.log("Server is running on port", 3001)
}

main()




