import express from 'express'
import { checkAuthentication, loginController, logoutController, signupController } from '../Controller/auth.controller.js'
import verifyToken from '../Middlewares/verifyToken.js'

const authRouter = express.Router()

authRouter.post('/signup',signupController)
authRouter.post('/login',loginController)
authRouter.get('/logout',verifyToken,logoutController)
authRouter.get('/',verifyToken,checkAuthentication)

export default authRouter 