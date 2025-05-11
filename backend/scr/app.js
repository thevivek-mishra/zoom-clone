import express from 'express'
import {createServer} from 'node:http';


import { connectToSocket } from './controllers/socketManager.js';


import mongoose from 'mongoose'

import cors from 'cors'



const app  = express();

const server = createServer(app);
const io = connectToSocket(server)

app.set("port",(process.env.PORT || 8000))

app.use(cors());

app.use(express.json({limit: "40kb"}))

app.use(express.urlencoded({limit: "40kb", extended: true}))
  
app.get("/home", (req,res)=>{
    return res.json({"hello" : "world"})
})

const start = async ()=>{
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://thevivek-mishra:Bholu7236@cluster0.euli9nz.mongodb.net/")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), ()=>{
        console.log("listening on port 8000")
    })
}

start();