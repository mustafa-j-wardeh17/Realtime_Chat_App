import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'

import connectToMongoDB from './Connect to DB/connectToMongoDB.js'
import authRouter from './Routes/auth.route.js'
import userRouter from './Routes/user.route.js'
import messageRouter from './Routes/message.route.js'
import { Logger } from './Middlewares/Logger.js'
import { notFoundPage, errorHandler } from './Middlewares/ErrorHandler.js'

//add socket server
import {app,server} from './Socket/socket.js'
// const __dirname = path.resolve();

dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.use(Logger)
app.use(cors({
    origin:['http://localhost:3000'],
    methods: ['GET','POST'],
    credentials:true
}))

app.use('/auth/v1', authRouter)
app.use('/user', userRouter)
app.use('/message', messageRouter)

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

app.use(notFoundPage)
app.use(errorHandler)
server.listen(process.env.PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${process.env.PORT}`)
})