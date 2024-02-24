import useConversation from '@/Zustant/zustand';
import { useSocketContext } from '@/context/socketContext';
import { getRandomEmoji } from '@/utils/emojis';
import Image from 'next/image';
import React from 'react'

interface ConversationProps {
    index: number;
    lastIndx: number;
    conversation: any,
}
const Conversation = ({ index, lastIndx, conversation }: ConversationProps) => {
    const { setSelectedConversation, selectedConversation } = useConversation()
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id);
    const handleSelectedConversation = () => {
        setSelectedConversation(conversation)
    }
    return (
        <div
            onClick={handleSelectedConversation}
            className={`${selectedConversation?._id === conversation._id && 'bg-sky-500'} flex flex-col w-full  rounded  justify-center hover:bg-sky-500`}
        >
            <div className='flex w-full h-full p-2 space-x-3 items-center justify-center cursor-pointer'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt='user avatar' />
                    </div>
                </div>
                <div className='flex flex-1 justify-between items-center'>
                    <p className='text-white capitalize font-bold tracking-wider md:text-[13px] sm:text-[11px]'>{conversation.fullName}</p>
                    <p>{getRandomEmoji()}</p>
                </div>
            </div>
            {
                index !== lastIndx-1 && (
                    <div className='divider m-0 p-0 h-1' />
                )
            }
        </div>
    )
}

export default Conversation