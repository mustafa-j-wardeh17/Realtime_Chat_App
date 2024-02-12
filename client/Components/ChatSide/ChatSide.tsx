'use client'
import React, { useEffect } from 'react'
import ChatHeader from './ChatHeader'
import ChatContainer from './ChatContainer'
import MessageBar from './MessageBar'
import useConversation from '@/Zustant/zustand'
import NoChatSelected from './NoChatSelected'

const ChatSide = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  
  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);


  return (
    <div className='w-[500px] h-full'>
      {
        !selectedConversation  ? (
          <NoChatSelected />
        ) : (
          <div className='flex flex-col w-full h-full relative  border-l-[1.5px] border-[#676869]'>
            <ChatHeader />
            <div className='w-full flex-1 overflow-auto'>
              <ChatContainer />
            </div>
            <MessageBar />
          </div>
        )
      }
    </div>
  )
}

export default ChatSide