import React from 'react'
import ChatHeader from './ChatHeader'
import ChatContainer from './ChatContainer'
import MessageBar from './MessageBar'

const ChatSide = () => {
  return (
    <div className='flex flex-col   border-l-[1.5px] border-[#676869]'>
      <ChatHeader />
      <div className='w-full flex-1 overflow-auto'>
        <ChatContainer />
      </div>
      <MessageBar />

    </div>
  )
}

export default ChatSide