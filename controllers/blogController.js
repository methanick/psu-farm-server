//ติดต่อฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const Blog = require("../models/Blog")

//บันทึกข้อมูล
exports.create=(req,res)=>{
    const {title,content,author} = req.body
    switch(true){
        case !title :
            return res.status(400).json({error:"กรุณากรอกชื่อเรื่อง"})
            break;
    }
    Blog.create({title,content,author},(err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({error:err})
        }

        res.json(data)
    })
}

exports.list=(req,res)=>{
    Blog.find({}).exec((err,data)=>{
        res.json(data)
    })
}

exports.load=(req,res)=>{
    const {id} = req.params
    // console.log({id})
    Blog.findById(id).exec((err,data)=>{
        if(err){
            console.log(err)
            res.status(400).json({error:err})
        }

        res.json(data)
    })
}

exports.deleted=(req,res)=>{
    const {id} = req.params
    Blog.findByIdAndRemove(id).exec((err,data)=>{
        if(err){
            console.log(err)
            // res.status(400).json({error:err})
        }

        res.json({
            message:"ลบบทความเรียบร้อย"
        })
    })
}

exports.update=(req,res)=>{
    const {id} = req.params
    const {title,content,author}=req.body
    Blog.findByIdAndUpdate(id,{title,content,author},{new:true}).exec((err,data)=>{
        if(err){
            console.log(err)
            // res.status(400).json({error:err})
        }
        res.json(data)
    })
}