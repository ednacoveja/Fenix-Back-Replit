/*
en package.json agregamos "type":"module", para que en vez de usar 
const express =require("express")
const morgan =require("morgan")
podamos hacer esto:
*/
import express from "express"
import morgan from "morgan"
import cors from "cors"
import routes from "./routes/index.js"
import products from "./routes/products.js"


const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(routes)
app.use(products)


export default app