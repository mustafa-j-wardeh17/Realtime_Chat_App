import express from 'express'
import verifyToken from '../Middlewares/verifyToken.js'
import { getUsersForSideBar } from '../Controller/user.controller.js'

const userRouter = express.Router()

userRouter.get('/',verifyToken,getUsersForSideBar)

export default userRouter