const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()
const farmRoute = require("./routes/farmRoute")
const blogRoute = require("./routes/blogRoute")
const authRoute = require("./routes/authRoute")

const app = express()

//connect clound database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("เชื่อมต่อเรียบร้อย"))
.catch((err)=>{
    console.log(err)
})

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',farmRoute)
app.use('/api',blogRoute)
app.use('/api',authRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))