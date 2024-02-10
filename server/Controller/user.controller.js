import User from '../Models/user.model.js'

export const getUsersForSideBar = async (req, res) => {
    const senderId = req.userId
    try {
        const filteredUsers = await User.find({
            _id: {
                $ne: senderId
            }
        }).select("-password")
        res.status(200).json({
            msg: 'users Filtered successfully',
            data: filteredUsers
        })
    } catch (error) {
        console.log("Error in get users for sidebar controller", error.message)
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}