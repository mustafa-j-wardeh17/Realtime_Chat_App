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
    <div className={`${!selectedConversation&&'md:flex md:flex-col hidden h-full'} lg:w-[600px] md:w-[500px] w-full  `}>
      {
        !selectedConversation  ? (
          <NoChatSelected />
        ) : (
          <div className='flex flex-col w-full h-full relative  md:border-l-[1.5px] md:border-[#676869]'>
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