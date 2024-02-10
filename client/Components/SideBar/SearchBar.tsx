import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className='flex space-x-3'>
            <form 
                className='flex space-x-3 items-center'
            >
                <input
                    type="text"
                    placeholder="Type here"
                    className="input rounded-full  w-4/5 "
                />
                <button className='bg-info h-[45px] w-[45px] flex justify-center items-center border-neutral-600 border-2 rounded-full  text-white '>
                    <IoSearch size={28}/>
                </button>
            </form>

        </div>
    )
}

export default SearchBar