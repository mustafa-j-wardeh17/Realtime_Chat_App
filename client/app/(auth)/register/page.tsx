'use client'
import useSignup from '@/hooks/useSignUp'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Register = () => {
    const { loading, signup } = useSignup()
    const [error, setError] = useState('')
    const [gender, setGender] = useState<'male' | 'female'>('male')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await signup({fullName, email, password, confirmPassword, gender})
    }
    return (
        <div className='glassmorphism flex flex-col items-center space-y-4'>
            <h1 className='text-4xl text-white font-bold tracking-wide'>
                Sign Up {''}
                <span className='text-blue-600'>ChatApp</span>
            </h1>
            <form
                className='flex flex-col space-y-4 w-full'
                onSubmit={(e) => { handleSubmit(e) }}
            >
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Full Name</label>
                    <input
                        value={fullName}
                        className='input input-bordered w-full'
                        type='text'
                        placeholder='Full Name'
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Email</label>
                    <input
                        value={email}
                        className='input input-bordered w-full'
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Password</label>
                    <input
                        value={password}
                        className='input input-bordered w-full'
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Confirm Password</label>
                    <input
                        value={confirmPassword}
                        className='input input-bordered w-full'
                        type='password'
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='flex space-x-2'>
                    <div className="form-control">
                        <label className="label cursor-pointer before:">
                            <span className="label-text">Male</span>
                            <input
                                checked={gender === 'male'}
                                type="checkbox"
                                className="ml-2 checkbox"
                                onChange={(e) => setGender('male')}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer before:">
                            <span className="label-text">Female</span>
                            <input
                                checked={gender === 'female'}
                                type="checkbox"
                                className="ml-2 checkbox"
                                onChange={() => setGender('female')}
                            />
                        </label>
                    </div>
                </div>
                <p>Allready have an account ? {" "}
                    <a
                        href='/login'
                        className='hover:text-white'
                    >
                        Login
                    </a>
                </p>
                <button className='btn btn-neutral'>Register</button>
            </form>
        </div>
    )
}

export default Register