const dotenv = require('dotenv')
const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const cors = require('cors')
const router = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')
const path = require("path");


dotenv.config()

connectDB()

app.use(cors({
    origin:["https://dulcet-tarsier-efe749.netlify.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}))

app.use("/uploads", express.static("uploads"));

app.use(express.json())
app.use(cookieParser())
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.get('/',(req,res)=>{
    res.send("hello bro")
})

app.use('/',router)
// console.log("Working directory:", process.cwd());


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})