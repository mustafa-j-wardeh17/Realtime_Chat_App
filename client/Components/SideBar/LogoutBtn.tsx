'use client'
import useLogout from '@/hooks/useLogout';
import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const LogoutBtn = () => {
    const {loading,logout} = useLogout()
    const handleLogout = async() => {
        localStorage.setItem("chat-user",'');
        await logout()
    }
    return (
        <div className='w-full h-[50px] flex items-end'>
            <TbLogout2
                onClick={handleLogout}
                size={22}
                className='hover:text-slate-200 cursor-pointer'
            />
        </div>
    )
}

export default LogoutBtn