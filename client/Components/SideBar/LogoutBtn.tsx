'use client'
import useLogout from '@/hooks/useLogout';
import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const LogoutBtn = () => {
    const { loading, logout } = useLogout()
    const handleLogout = async () => {
        localStorage.setItem("chat-user", '');
        await logout()
    }
    return (
        <div className='flex h-[50px] w-full  items-end '>

            {
                !loading
                    ? (
                        <button onClick={handleLogout} className='w-[30px] h-[30px] flex justify-center items-center'>
                            <TbLogout2
                                size={22}
                                className='hover:text-slate-200 text-slate-300 cursor-pointer'
                            />
                        </button>
                    )
                    : (
                        <div className='w-[30px] h-[30px] loading bg-slate-200' />
                    )
            }
        </div>
    )
}

export default LogoutBtn