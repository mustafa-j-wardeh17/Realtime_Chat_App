'use client'
import useLogin from '@/hooks/useLogin'
import React, { useState } from 'react'

const Login = () => {
    const { error, login, loading } = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await login({ email, password })
    }
    return (
        <div className='relative glassmorphism flex flex-col items-center space-y-4'>
            <div className={`${!loading&&'hidden'} absolute w-[60px] h-[60px] bg-gray-400 
            translate-x-[50%] right-[50%] top-[50%] -translate-y-[50%] loading`} />
            <h1 className='text-4xl text-white font-bold tracking-wide'>
                Login {''}
                <span className='text-blue-600'>ChatApp</span>
            </h1>
            <form
                className='flex flex-col space-y-4 w-full'
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Email</label>
                    <input
                        className='input input-bordered w-full'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Password</label>
                    <input
                        className='input input-bordered w-full'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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