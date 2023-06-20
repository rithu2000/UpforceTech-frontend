import { useState } from 'react'
import profileImg from '../assets/profile.png'

const UserRow = () => {
    const [statusOpen, setStatusOpen] = useState(false);
    const [actionOpen, setActionOpen] = useState(false);

    return (
        <tr>
            <td>1</td>
            <td>subu</td>
            <td>alolam@gmail.com</td>
            <td>m</td>
            <td>
                <div className='text-center flex justify-center'>
                    <h1 className='bg-red-800 text-white px-3 cursor-pointer rounded-md' onClick={() => setStatusOpen(!statusOpen)}>Active <i class="fa-solid fa-chevron-down"/></h1>
                {statusOpen && <div className="bg-white border text-base shadow-lg absolute z-30 mt-6">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex gap-2">
                            Active
                        </li>
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex gap-2">
                            Inactive
                        </li>
                    </ul>
                </div>}
                </div>
            </td>
            <td className='flex justify-center'><img className='h-14 rounded-full w-auto' src={profileImg} alt="" /></td>
            <td>
                <i onClick={() => setActionOpen(!actionOpen)} className="fa-solid fa-ellipsis-v cursor-pointer" />
                {actionOpen && <div className="bg-white border text-base shadow-lg absolute z-30">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex gap-2">
                            <i className="fa-solid fa-eye text-green-700" />
                            view
                        </li>
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex gap-2">
                            <i className="fa-solid fa-pen-to-square text-blue-600" />
                            Edit
                        </li>
                        <li className="hover:bg-gray-200 p-2 cursor-pointer flex gap-2">
                            <i className="fa-solid fa-trash text-red-600" />
                            Delete
                        </li>
                    </ul>
                </div>}
            </td>
        </tr>
    )
}

export default UserRow;