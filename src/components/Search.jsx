import React from 'react'

const Search = () => {
  return (
    <div className='flex w-full justify-between p-6'>
        <div className='flex flex-row w-[40%]'>
            <input className='border rounded-md w-[50%] p-1' type="text" placeholder='Search' />
            <button className='bg-red-800 rounded-md w-[15%] ml-2 p-1 border hover:bg-white text-white duration-300 border-red-800 hover:text-red-800'>Search</button>
        </div>
        <div className='flex flex-row'>
            <button className='bg-red-800 rounded-md p-1 px-2 border hover:bg-white text-white duration-300 border-red-800 hover:text-red-800'>+ Add User</button>
            <button className='bg-red-800 rounded-md ml-2 p-1 px-2 border hover:bg-white text-white duration-300 border-red-800 hover:text-red-800'>Export To Csv</button>
        </div>
    </div>
  )
}

export default Search;