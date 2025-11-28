const dotenv = require('dotenv')
const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const cors = require('cors')
const router = require('./routes/userRoutes')
const cookieParser = require('cookie-parser')

dotenv.config()

connectDB()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/uploads", express.static("uploads"));

app.use(express.json())
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send("hello bro")
})

app.use('/',router)
console.log("Working directory:", process.cwd());


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})