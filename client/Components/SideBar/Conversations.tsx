import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]
    return (
        <div className='flex w-full flex-col h-full px-2'>
            {
                arr.map((item, index) => (
                    <Conversation key={index} index={index} />
                ))
            }
        </div>
    )
}

export default Conversations