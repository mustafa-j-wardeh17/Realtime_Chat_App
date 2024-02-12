'use client'
import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import useGetConversations from '@/hooks/useGetConversations'
import useConversation from '@/Zustant/zustand'
type ConversationType = {
    _id: string,
    fullName: string,
    profilePic: string
}
const Conversations = () => {
    const { loading, conversations } = useGetConversations()
    const [filteredConversations, setFilteredConversations] = useState<ConversationType[]>(conversations)
    const { filter,setFilter } = useConversation()
    useEffect(() => {
        if (filter.trim() === '') {
            setFilteredConversations(conversations)
        } else {
            setFilteredConversations(conversations.filter((conversation: ConversationType) =>
                conversation.fullName.toLowerCase().trim().includes(filter.toLowerCase().trim())
            ))
        }
    }, [filter, conversations, loading])
    const conversationsLength = filteredConversations?.length

    return (
        <div className='relative flex w-full flex-col h-full  px-2'>
            <div className={`${!loading && 'hidden'} absolute w-[40px] h-[40px] loading 
            right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]`} />
            {
                filteredConversations?.map((item: ConversationType, index: number) => (
                    <Conversation key={index} conversation={item} index={index} lastIndx={conversationsLength} />
                ))
            }
        </div>
    )
}

export default Conversations