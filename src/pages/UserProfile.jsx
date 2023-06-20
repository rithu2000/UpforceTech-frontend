import React from 'react'
import ProfilePic from '../assets/profile.png'

const UserProfile = () => {
  return (
    <div className='flex w-full justify-center items-center'>
                <div className='w-[70%] flex mt-24'>
                    <div className='w-[40%] relative'>
                        <div className='bg-slate-200 absolute right-10 rounded-full flex justify-center w-1/4 items-center'>
                            <img className='w-full h-auto' src={ProfilePic} alt="" />
                        </div>
                    </div>
                    <div className=' w-[40%] border rounded p-3'>
                        <h1 className='text-base text-gray-500'>PROFILE</h1>
                        <div className='grid grid-cols-2 w-full mt-5 gap-5'>
                            <div>
                                <h1 className='text-gray-500'>First Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Last Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Email</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Gender</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Mobile</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Status</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Location</h1>
                            </div>
                            <div>
                                <h1 className='text-gray-500'>Name</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default UserProfile