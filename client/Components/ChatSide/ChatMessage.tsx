import React from 'react'

interface messageProp {
    message: string;
    time?: string;
    profilePic?: string,
    isMe: boolean
}

const ChatMessage = ({ message, time = '12:00', profilePic = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg", isMe }: messageProp) => {
    return (
        <div className='w-full flex'>
            {
                isMe == true ? (
                    <div className='w-full flex justify-end'>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                            <div className="chat-bubble bg-sky-500">{message}</div>
                            <div className="chat-footer opacity-50">
                                {time}
                            </div>
                        </div>

                    </div >

                )
                    : (
                        <div className='w-full flex '>
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>

                                <div className="chat-bubble bg-sky-500">{message}</div>
                                <div className="chat-footer opacity-50">
                                    {time}
                                </div>
                            </div>
                        </div >
                    )
            }

        </div>
    )
}

export default ChatMessage