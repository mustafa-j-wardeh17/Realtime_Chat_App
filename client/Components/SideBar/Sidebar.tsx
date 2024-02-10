import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col px-4 py-4 h-full '>
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