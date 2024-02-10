import express from 'express'
import { loginController, logoutController, signupController } from '../Controller/auth.controller.js'
import verifyToken from '../Middlewares/verifyToken.js'

const authRouter = express.Router()

authRouter.post('/signup',signupController)
authRouter.post('/login',loginController)
authRouter.get('/logout',verifyToken,logoutController)

export default authRouter 