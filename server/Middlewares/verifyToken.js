import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt
    if (!token) {
        return res.status(401).json({
            msg: "User not autherized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decoded) {
            return res.status(401).json({
                msg: "User not autherized"
            })
        }
        req.userId = decoded.userId
        next()
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Oops: Server Error'
        })
    }
}

export default verifyToken