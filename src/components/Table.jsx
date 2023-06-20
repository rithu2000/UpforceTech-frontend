import React from 'react'
import UserRow from './UserRow'

const Table = () => {
    return (
        <div className='w-full p-20'>
            <table className='w-full'>
                <thead className='bg-black text-white p-2 text-center'>
                    <tr>
                        <th className='font-medium'>ID</th>
                        <th className='font-medium'>FullName</th>
                        <th className='font-medium'>Email</th>
                        <th className='font-medium'>Gender</th>
                        <th className='font-medium'>Status</th>
                        <th className='font-medium'>Profile</th>
                        <th className='font-medium'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <UserRow />
                </tbody>
            </table>
                <div className='w-full relative'>
                    <div className=' absolute right-0'>
                        <input className='border p-2 text-red-800 rounded-md' type="button" value='<' />
                        <input className='p-2 w-10 text-center bg-red-800 text-white' type="text" value={1} disabled />
                        <input className='border p-2 text-red-800 rounded-md' type="button" value='>' />
                    </div>
                </div>
        </div>
    )
}

export default Table;