import Image from 'next/image'
import React from 'react'
import notFoundImage from '@/public/error-page-svgrepo-com.svg'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div
            className='w-4/6 h-4/6 flex flex-col space-y-6 justify-center items-center glassmorphismHome '
        >
            <Image
                src={notFoundImage}
                alt='404'
                className='w-3/5 h-2/5'
            />
            <div className='flex flex-col space-y-5 text-center items-center'>
                <h1 className="text-3xl font-bold text-slate-200">404 - Page Not Found</h1>
                <p className='text-[14px] text-slate-200'>The page are you looking for might have removed had it's name changed or is temporarily unavilable.</p>
                <Link
                    className='btn btn-primary  text-white rounded-full w-[260px]'
                    href={'/'}
                    replace
                >
                    GO TO HOMEPAGE
                </Link>
            </div>
        </div>
    )
}

export default NotFound