/*
en package.json agregamos "type":"module", para que en vez de usar 
const express =require("express")
const morgan =require("morgan")
podamos hacer esto:
*/
import express from "express"
import morgan from "morgan"
import cors from "cors"
import products from "./routes/products.js"
import users from "./routes/users.js"


const app = express()

app.use(cors({ origin: "*" }));
app.use(morgan("dev"))
app.use(express.json())
app.use(products)
app.use(users)



export default app