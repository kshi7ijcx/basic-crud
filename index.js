import express from 'express'
import mongoose from 'mongoose'
import Product from './models/products.model.js'
const app=express()

app.use(express.json()) //allows passing request in form of json json

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/api/products",async (req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get("/api/products/:id", async (req,res)=>{
    
})

app.post("/api/products", async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb+srv://kshitijcx:rsGj66U4wZwsrXkA@backenddb.5ogbiju.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to the database!")
    app.listen(8000,()=>{
        console.log("server port 8000")
    })
}).catch(()=>{
    console.log("connection failed!")
})