import express from 'express'
import verifyToken from '../Middlewares/verifyToken.js'
import { getMessages, sendMessage } from '../Controller/message.controller.js'


const messageRouter = express.Router()

messageRouter.get('/:id',verifyToken,getMessages)

messageRouter.post('/send/:id',verifyToken,sendMessage)

export default messageRouter