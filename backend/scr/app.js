import express from 'express';
import {createServer} from 'node:http';

import { Server } from 'socket.io';

import mongoose from 'mongoose';


// import cors from 'cors'


const app =express();

const server = createServer(app)
const io = new Server(server)

app.set("port", (process.env.PORT || 8000))
app.get("/home",(req,res)=>{
    return res.json({"hellow":"world"})
})

const start =async ()=>{

    const connectionDb = await mongoose.connect("mongodb+srv://thevivek-mishra:Vivek@7236@cluster0.euli9nz.mongodb.net/")
    console.log(`MONGO Connected DB Host ${connectionDb.connection.host}`)
    server.listen(app.get("port"), ()=>{
        console.log("listening on port 8000")
    })
}

start()