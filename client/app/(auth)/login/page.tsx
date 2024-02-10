import React from 'react'

const Login = () => {
    // const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    //    e.preventDefault()
    // } 
    return (
        <div className='glassmorphism flex flex-col items-center space-y-4'>
            <h1 className='text-4xl text-white font-bold tracking-wide'>
                Login {''}
                <span className='text-blue-600'>ChatApp</span>
            </h1>
            <form
                className='flex flex-col space-y-4 w-full'
            >
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Email</label>
                    <input
                        className='input input-bordered w-full'
                        type='email'
                        placeholder='Email'
                    />
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Password</label>
                    <input
                        className='input input-bordered w-full'
                        type='password'
                        placeholder='Password'
                    />
                </div>
                <p>Don't have an account{" "}
                    <a
                        href='/register'
                        className='hover:text-white'
                    >
                        Sign Up
                    </a>
                </p>
                <button className='btn btn-neutral'>Login</button>
            </form>
        </div>
    )
}

export default Login