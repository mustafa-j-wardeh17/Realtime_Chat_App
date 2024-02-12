'use client'
import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '@/hooks/useGetConversations'

const Conversations = () => {
    const { loading, conversations } = useGetConversations()

    const conversationsLength = conversations?.length
    return (
        <div className='relative flex w-full flex-col h-full px-2'>
            <div className={`${!loading && 'hidden'} absolute w-[40px] h-[40px] loading 
            right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]`} />
            {
                conversations?.map((item, index) => (
                    <Conversation key={index} conversation={item} index={index} lastIndx={conversationsLength} />
                ))
            }
        </div>
    )
}

export default Conversations