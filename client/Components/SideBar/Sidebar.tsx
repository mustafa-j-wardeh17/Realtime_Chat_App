import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'
import useConversation from '@/Zustant/zustand'

const Sidebar = () => {
  const { selectedConversation } = useConversation()
  return (
    <div className={`${selectedConversation ?'md:flex hidden':'flex'}  flex-col px-4 py-4  lg:w-[400px] md:w-[300px] w-full  h-full`}>
      <SearchBar />
      <div className='divider ' />
      <div className='w-full h-full flex overflow-auto'>
        <Conversations />
      </div>
      <LogoutBtn />
    </div>
  )
}

export default Sidebar