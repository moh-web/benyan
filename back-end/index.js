//DOTENV
require("dotenv").config(".env")
//express
const express = require("express")
const app = express();
//middleware json 
app.use(express.json())
//connection database
const connectDB = require("./config/db")
connectDB();
//simple logger
if(process.env.NODE_ENV ==="dev"){
    app.use((req, res, next)=>{
        console.log(`${req.method} ${req.originalUrl} `)
        next();
    })
}
//Test route
app.get("/test", (req, res)=>{
    res.json({msg: "test Route"})
})
//port 
const port = process.env.PORT||3000
//run server
app.listen(port, ()=> console.log(`server is connected on port ${port}`))