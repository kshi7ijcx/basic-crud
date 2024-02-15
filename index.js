import express from 'express'
import mongoose from 'mongoose'
const app=express()

app.get("/",(req,res)=>{
    res.send("Hello")
})

mongoose.connect("mongodb+srv://kshitijcx:rsGj66U4wZwsrXkA@backenddb.5ogbiju.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to the database!")
    app.listen(8000,()=>{
        console.log("server port 8000")
    })
}).catch(()=>{
    console.log("connection failed!")
})