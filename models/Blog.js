const mongoose = require("mongoose")

const Blog = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    author:{
        type:String,
        default: "Admin"
    }
},{timestamps:true})

module.exports = mongoose.model("Blog",Blog)