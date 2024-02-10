import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import connectToMongoDB from './Connect to DB/connectToMongoDB.js'
import authRouter from './Routes/auth.route.js'
import userRouter from './Routes/user.route.js'
import messageRouter from './Routes/message.route.js'
import { Logger } from './Middlewares/Logger.js'
import { notFoundPage, errorHandler } from './Middlewares/ErrorHandler.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(Logger)

app.use('/auth/v1', authRouter)
app.use('/user', userRouter)
app.use('/message', messageRouter)


app.use(notFoundPage)
app.use(errorHandler)
app.listen(process.env.PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${process.env.PORT}`)
})