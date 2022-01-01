const mongoose = require("mongoose")

const Farm = mongoose.Schema({
    farmName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    numberOfCow:{
        type:Number
    },
    address:{
        type:String
    },
    ownerName:{
        type:String,
    },
    phone:{
        type:String,
    },
    area:{
        type:Number
    },
    lat:{
        type:Number
    },
    lng:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model("Farm",Farm)