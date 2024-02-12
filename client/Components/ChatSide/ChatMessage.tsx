import useConversation from '@/Zustant/zustand';
import { useAuthContext } from '@/context/authContext';
import { useSocketContext } from '@/context/socketContext';
import { extractTime } from '@/utils/extractTime';
import React, { TimeHTMLAttributes } from 'react'


interface messageProp {
    message: {
        senderId: string,
        receiverId: string,
        message: string,
        createdAt: Date,
        shouldShake?: boolean
    };
}

const ChatMessage = ({ message }: messageProp) => {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
	const shakeClass = message.shouldShake ? "shake" : "";


    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white text-[13px] ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div> 
    )
}

export default ChatMessage