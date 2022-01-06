//ติดต่อฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const Farm = require("../models/Farm")

//บันทึกข้อมูล
exports.create=(req,res)=>{
    Farm.create(req.body,(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({error:err})
        }

        res.json(data)
    })
}

exports.list=(req,res)=>{
    Farm.find({}).exec((err,data)=>{
        res.json(data)
    })
}

exports.load=(req,res)=>{
    const {id} = req.params
    // console.log({id})
    Farm.findById(id).exec((err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({error:err})
        }

        res.json(data)
    })
}

exports.deleted=(req,res)=>{
    const {id} = req.params
    Farm.findByIdAndRemove(id).exec((err,data)=>{
        if(err){
            console.log(err)
            // res.status(400).json({error:err})
        }

        res.json({
            message:"ลบบทความเรียบร้อย."
        })
    })
}

exports.update=(req,res)=>{
    const {id} = req.params
    // const {title,content,author}=req.body
    Farm.findByIdAndUpdate(id,req.body,{new:true}).exec((err,data)=>{
        if(err){
            console.log(err)
            // res.status(400).json({error:err})
        }
        res.json(data)
    })
}