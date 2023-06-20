import { useState } from 'react'
import profileImg from '../assets/profile.png'
import { registerUser } from '../axios/axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [signupData, setSignupData] = useState([])

    const handleChange = async (e) => {
        const { value, name } = e.target
        console.log( value, name,990990);
        setSignupData({ ...signupData, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const isValid = validateForm();
            if (isValid) {
                const response = await registerUser(signupData)
                if (response.message) {
                    toast.success(response.message)
                    navigate('/userDetails')
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const validateForm = () => {
        const newErrors = {};

        if (!signupData.firstName?.trim()) {
            newErrors.firstName = 'required';
        } else if (!/^[A-Za-z ]+$/.test(signupData.firstName)) {
            newErrors.firstName = 'Alphabetic characters only';
        } else if (signupData.firstName.length > 50) {
            newErrors.firstName = 'Maximum 50 characters long';
        }

        if (!signupData.lastName?.trim()) {
            newErrors.lastName = 'required';
        } else if (!/^[A-Za-z ]+$/.test(signupData.lastName)) {
            newErrors.lastName = 'Alphabetic characters only';
        } else if (signupData.lastName.length > 50) {
            newErrors.lastName = 'Maximum 50 characters long';
        }

        if (!signupData.email?.trim()) {
            newErrors.email = 'required';
        } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
            newErrors.email = 'Email Address is not valid';
        }

        if (!signupData.mobile?.trim()) {
            newErrors.mobile = 'required';
        } else if (!/^\d{10}$/.test(signupData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10 digit number';
        }

        if (!signupData.location?.trim()) {
            newErrors.location = 'required';
        } else if (!/^[A-Za-z ]+$/.test(signupData.location)) {
            newErrors.location = 'Only alphabetic characters';
        } else if (signupData.location.length > 50) {
            newErrors.location = 'City should not be maximum 50 characters long';
        }

        if (!signupData.status?.trim()) {
            newErrors.status = 'required';
        }

        if (!signupData.profile?.trim()) {
            newErrors.profile = 'required';
        }

        if (!signupData.gender?.trim()) {
            newErrors.gender = 'required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div>
            <div className='text-center p-4'>
                <h1 className='font-semibold text-4xl'>Register Your Details</h1>
            </div>
            <div className='px-20' >
                <form action="">
                <div className='border shadow-md'>
                    <img className='mx-auto h-14 mt-6 border border-black rounded-full' src={profileImg} alt="" />
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 w-full p-3'>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="firstName">First Name</label>{errors.firstName && <span className="text-red-500 text-xs">{`*${errors.firstName}`}</span>}
                            <input className='p-2 border rounded-md' type="text" id='firstName' name='firstName' placeholder='Enter FirstName' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="lastName">Last Name</label>{errors.lastName && <span className="text-red-500 text-xs">{`*${errors.lastName}`}</span>}
                            <input className='p-2 border rounded-md' type="text" id='lastName' name='lastName' placeholder='Enter LastName' onChange={handleChange} />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 w-full p-3'>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="emailAddress">Email Address</label>{errors.email && <span className="text-red-500 text-xs">{`*${errors.email}`}</span>}
                            <input className='p-2 border rounded-md' type="text" id='emailAddress' name='email' placeholder='Enter EmailAddress' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="mobile">Mobile</label>{errors.mobile && <span className="text-red-500 text-xs">{`*${errors.mobile}`}</span>}
                            <input className='p-2 border rounded-md' type="text" id='mobile' name='mobile' placeholder='Enter Mobile' onChange={handleChange} />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 w-full p-3'>
                        <div className='flex flex-col w-full'>
                            <h2 className='p-1'>Select Your Gender</h2>{errors.gender && <span className="text-red-500 text-xs">{`*${errors.gender}`}</span>}
                            <div className='flex gap-2'>
                                <input className='p-2 border' type="radio" name='gender' value='M'  id='male' onChange={handleChange} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className='flex gap-2'>
                                <input className='p-2 border' type="radio" name='gender' value='F' id='female' onChange={handleChange} />
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="status">Select Your Status</label>{errors.address && <span className="text-red-500 text-xs">{`*${errors.address}`}</span>}
                            <select className='p-3 border rounded-md' name="status" id="status" onChange={handleChange}>
                                <option value="">Select Your Status</option>
                                <option value="Active">Active</option>
                                <option value="InActive">InActive</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 w-full p-3'>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="profile">Select Your Profile</label>{errors.profile && <span className="text-red-500 text-xs">{`*${errors.profile}`}</span>}
                            <input className='p-2 border rounded-md' type="file" id='profile' name='profile' placeholder='No file chosen' onChange={handleChange} />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='p-1' htmlFor="location">Enter Your Location</label>{errors.location && <span className="text-red-500 text-xs">{`*${errors.location}`}</span>}
                            <input className='p-2 border rounded-md' type="text" id='location' name='location' placeholder='Enter Your Location' onChange={handleChange} />
                        </div>
                    </div>
                    <div className='w-full p-3'>
                        <button onClick={handleSubmit} className='bg-red-800 rounded-md w-full p-2 border hover:bg-white text-white duration-300 border-red-800 hover:text-red-800'>Submit</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Register;