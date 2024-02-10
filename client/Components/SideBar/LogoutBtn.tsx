import React from 'react'
import { TbLogout2 } from "react-icons/tb";

const LogoutBtn = () => {
    return (
        <div className='w-full h-[50px] flex items-end'>
            <TbLogout2
                size={22}
                className='hover:text-slate-200 cursor-pointer'
            />
        </div>
    )
}

export default LogoutBtn