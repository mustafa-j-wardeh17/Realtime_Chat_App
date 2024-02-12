import Conversation from '../Models/conversation.model.js'
import Message from '../Models/message.model.js';
import { io, getReceiverSocketId } from '../Socket/socket.js';

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params
        const senderId = req.userId
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages")//array sending

        if (!conversation) return res.status(200).json({
            msg: 'Successfull recive messages',
            data: []
        })

        res.status(200).json({
            msg: 'Successfull recive messages',
            data: conversation.messages
        })

    } catch (error) {
        console.log("Error in get messages controller", error.message)
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}


export const sendMessage = async (req, res) => {
    const { message } = req.body;
    const { id: receiverId } = req.params
    const senderId = req.userId
    try {
        //check conversation between {sender and reciver} if not found create a new one
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        //create a message to push it to conversation and to save it to messageModel
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage)
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const reciverSocketId = getReceiverSocketId(receiverId);
        io.to(reciverSocketId).emit('getMessage', newMessage)
        res.status(200).json({
            msg: 'Message Send Succcessfully',
            data: newMessage
        })
    } catch (error) {
        console.log("Error in send message controller", error.message)
        res.status(500).json({
            msg: 'Internal server error'
        })
    }
}