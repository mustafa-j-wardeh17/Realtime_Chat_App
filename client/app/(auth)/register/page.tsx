import React from 'react'

const Register = () => {
    // const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    //    e.preventDefault()
    // } 
    return (
        <div className='glassmorphism flex flex-col items-center space-y-4'>
            <h1 className='text-4xl text-white font-bold tracking-wide'>
                Sign Up {''}
                <span className='text-blue-600'>ChatApp</span>
            </h1>
            <form
                className='flex flex-col space-y-4 w-full'
            >
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Full Name</label>
                    <input
                        className='input input-bordered w-full'
                        type='text'
                        placeholder='Full Name'
                    />
                </div>
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
                <div className='w-full flex flex-col space-y-2'>
                    <label className='pl-1 text-[18px]'>Confirm Password</label>
                    <input
                        className='input input-bordered w-full'
                        type='password'
                        placeholder='Confirm Password'
                    />
                </div>
                <div className='flex space-x-2'>
                    <div className="form-control">
                        <label className="label cursor-pointer before:">
                            <span className="label-text">Male</span>
                            <input type="checkbox" className="ml-2 checkbox" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer before:">
                            <span className="label-text">Female</span>
                            <input type="checkbox" className="ml-2 checkbox" />
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