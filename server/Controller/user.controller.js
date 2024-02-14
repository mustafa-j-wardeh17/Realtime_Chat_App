import User from '../Models/user.model.js';
import Message from '../Models/message.model.js';

export const getUsersForSideBar = async (req, res) => {
    const senderId = req.userId;
    try {
        // Find all users except the sender
        const users = await User.find({ _id: { $ne: senderId } }).select("-password");

        // Fetch the last message for each user
        const usersWithLastMessage = await Promise.all(users.map(async user => {
            const lastMessage = await Message.findOne({
                $or: [
                    { senderId: user._id, receiverId: senderId },
                    { senderId: senderId, receiverId: user._id }
                ]
            }).sort({ createdAt: -1 }).limit(1);

            return {
                user,
                lastMessage
            };
        }));

        // Sort users based on the timestamp of their last message
        usersWithLastMessage.sort((a, b) => {
            if (!a.lastMessage) return 1;
            if (!b.lastMessage) return -1;
            return b.lastMessage.createdAt - a.lastMessage.createdAt;
        });

        // Extract user data and last message data
        const formattedUsers = usersWithLastMessage.map(({ user, lastMessage }) => ({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            gender: user.gender,
            profilePic: user.profilePic,
            lastMessage: lastMessage ? {
                message: lastMessage.message,
                createdAt: lastMessage.createdAt
            } : null
        }));

        res.status(200).json({
            msg: 'Users filtered successfully',
            data: formattedUsers
        });
    } catch (error) {
        console.log("Error in get users for sidebar controller", error.message);
        res.status(500).json({
            msg: 'Internal server error'
        });
    }
};
