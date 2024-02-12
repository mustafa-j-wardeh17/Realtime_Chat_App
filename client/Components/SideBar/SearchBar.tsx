'use client'
import useConversation from '@/Zustant/zustand';
import useGetConversations from '@/hooks/useGetConversations';
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const [filterdSearchConversation, setFilterdSearchConversation] = useState<string>("");
    const {  setFilter } = useConversation()

    const handleFilteredConversation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFilter(filterdSearchConversation)
        setFilterdSearchConversation('')
    }
    return (
        <div className={`  w-full  space-x-3`}>
            <form
                className='flex space-x-3 w-full justify-center items-center'
                onSubmit={(e) => { handleFilteredConversation(e) }}
            >
                <input
                    value={filterdSearchConversation}
                    type="text"
                    placeholder="Type here"
                    className="input rounded-full w-4/5 "
                    onChange={(e) => setFilterdSearchConversation(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-info h-[45px] w-[45px] flex justify-center items-center border-neutral-600 border-2 rounded-full  text-white '
                >
                    <IoSearch size={18} />
                </button>
            </form>

        </div>
    )
}

export default SearchBar