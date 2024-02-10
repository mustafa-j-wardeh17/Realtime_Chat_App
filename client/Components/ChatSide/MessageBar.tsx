import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageBar = () => {
  return (
    <div className='w-full relative mb-3 px-2' >
      <input type="text" placeholder="Type here" className="input bg-slate-700 text-[14px] h-[35px] w-full" />
      <button className='absolute right-3 top-[50%] -translate-y-[50%]'>
        <BsSend size={20} className='hover:text-white' />
      </button>
    </div>
  )
}

export default MessageBar