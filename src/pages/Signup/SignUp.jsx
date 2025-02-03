/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createUser, toggleLoading } from '../../redux/features/users/userSlice';
import { useSaveSignupUserMutation } from '../../redux/api/baseUrl/userApi';
import ScaleLoader from "react-spinners/ScaleLoader";
import toast from 'react-hot-toast';


const SignUp = () => {
    const { register, handleSubmit, watch, reset, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isMatch, setIsMatch] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [saveUser, { data, isLoading, isError, isSuccess, error }] = useSaveSignupUserMutation();
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    };

    useEffect(() => {
        if (password !== confirmPassword) {
            setIsMatch(false)
        } else {
            setIsMatch(true)
        }
    }, [password, confirmPassword]);

    useEffect(() => {
        if (isSuccess) {
            if (data?.status == 'success') {
                localStorage.setItem('token', data?.token);
                toast.success('Signup Successfully');
                reset()
            }

        }
        if (isError) {
            setErrorMessage(error?.data?.message)
        }
    }, [data, isError, error, isSuccess, reset])

    useEffect(() => {
        if (data?.status == 'success') {
            dispatch(createUser(data?.user));
            localStorage.setItem('user', JSON.stringify(data?.user));
        }
    }, [data, isSuccess, dispatch])


    const handleSignup = (data) => {
        if (!isMatch) {
            setMessage('password did not match');
            return;
        } else {
            setMessage(' ')
        }

        // const image = data?.file[0];
        const formData = new FormData();
        formData.append('image', data?.file[0]);
        formData.append('name', data?.name);
        formData.append('email', data?.email);
        formData.append('password', data?.password);
        formData.append('confirmPassword', data?.confirmPassword);
        // console.log('formData content =');
        // for (const [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
        saveUser(formData)
        // reset()
        navigate('/login')
    }


    return (

        <div className='parent-container'>
            <div className='py-[100px]'>
                <div className="w-[600px] mx-auto max-w-full overflow-hidden bg-white rounded-lg dark:bg-gray-800">
                    <div className="px-6 py-4">
                        <div className="flex justify-center items-center gap-3 mx-auto">
                            <h2 className="mt-3 text-[35px] font-medium text-center text-gray-600 dark:text-gray-200">Welcome to</h2>
                            <img className="w-auto h-7 sm:h-8 mt-2" src={logo} alt="" />
                        </div>
                        <p className="mt-1 text-center text-[20px] text-gray-500 dark:text-gray-400">Create your account</p>

                        <form onSubmit={handleSubmit(handleSignup)}>
                            <div className="w-full mt-4">
                                <input
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                    type="name"
                                    placeholder="Your Name"
                                    aria-label="Name"
                                    {...register("name")}
                                />
                            </div>


                            <div className="w-full mt-4">
                                <input
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                    type="email"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                    {...register("email")}
                                />
                                <span className='text-red-500 flex items-start'>{isError ? errorMessage : ' '}</span>
                            </div>


                            <div className="w-full mt-4">
                                <input
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                    type="file"
                                    placeholder="Your Image"
                                    aria-label="Email Address"
                                    {...register("file")}
                                />
                            </div>


                            <div className="w-full mt-4 flex items-center relative">

                                <input
                                    name='password'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    aria-label="Password"
                                    {...register("password")}
                                    onChange={(e) => (setPassword(e.target.value))}
                                />
                                <span onClick={handleShowPassword} className='cursor-pointer absolute right-[20px] mt-2'> {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                            </div>


                            <div className="w-full mt-4 flex items-center relative">
                                <input
                                    name='confirmPassword'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    aria-label="Confirm Password"
                                    {...register("confirmPassword")}
                                    onChange={(e) => (setConfirmPassword(e.target.value))}
                                />
                                <span onClick={handleShowConfirmPassword} className='cursor-pointer absolute right-[20px] mt-2'> {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                                <span>{ }</span>
                            </div>
                            <div className='relative pb-2 pt-1'>
                                <span className='text-red-500 left-0 absolute'>{isMatch ? '' : message}</span>
                            </div>
                            <div className="mt-6">
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide  capitalize transition-colors  transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 bg-[#D90368] text-white hover:bg-[#191613] duration-300">
                                    {
                                        isLoading ? (<ScaleLoader
                                            color={"#fff"}
                                            loading={isLoading}
                                            cssOverride={{
                                                display: "block",
                                                margin: "0 auto",
                                            }}
                                            // size={1}
                                            height={10}
                                            aria-label="Loading Spinner"
                                            data-testid="loader"
                                        />)
                                            :
                                            'Sign Up'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>

                        <Link to='/login' href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;