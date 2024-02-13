import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import useGetMessages from '@/hooks/useGetMessages'
import MessageSkeleton from './Skeleton';
import useListenMessage from '@/hooks/useListenMessage';


type Message = {
  _id:string,
  senderId: string,
  receiverId: string,
  message: string,
  createdAt: Date
};
const ChatContainer = () => {
  const { messages, loading } = useGetMessages()
  const lastMessageRef = useRef<any>();
  useListenMessage()
  
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      
    }, 100);
	}, [messages]);
  return (
    <div className='flex flex-1 flex-col mb-2 px-3 py-2 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message:Message,index:number) => (
          <div key={index} ref={lastMessageRef}>
            <ChatMessage message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((item, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default ChatContainer


