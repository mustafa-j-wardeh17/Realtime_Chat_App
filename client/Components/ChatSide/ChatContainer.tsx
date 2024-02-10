import React from 'react'
import ChatMessage from './ChatMessage'

const ChatContainer = () => {
  const messages = [
    {message:'Hi There',isMe:true},
    {message:'Hi There',isMe:false},
    {message:'Hi There',isMe:true},
    {message:'Hi There',isMe:false},
    {message:'Hi There Today I wILL Go To University At 2:00 PM',isMe:false},
    {message:'Hi There Today I wILL Go To University At 2:00 PM',isMe:false},
    {message:'Hi There Today I wILL Go To University At 2:00 PM',isMe:true},
  ]
  return (
    <div className='flex flex-1 flex-col p-2 overflow-auto'>
      {
        messages.map((item,index)=>(
          <ChatMessage message={item.message} isMe={item.isMe} />
        ))
      }
    </div>
  )
}

export default ChatContainer