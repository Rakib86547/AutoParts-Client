/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/logo2.png';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const PasswordReset = () => {
    const { register, handleSubmit, setValue, getValues, watch, reset, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    };
    return (
        <div>
            <div className='parent-container'>
                <div className='py-[100px]'>
                    <div className="w-[600px] max-w-full mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800">
                        <div className="px-6 py-4">
                            <div className="flex justify-center mx-auto items-center mt-4 gap-4">
                                <h2 className="mt-3 text-[30px] font-medium text-center text-gray-600 dark:text-gray-200">Reset Your Password</h2>
                                <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
                            </div>

                            {/* <p className="mt-1 text-center text-[20px] text-gray-500 dark:text-gray-400">Login your account</p> */}

                            <form>                                
                                {/* <div>
                                <span className='text-red-500 flex justify-start'>{ errorMessage ? errorMessage : ''}</span>
                            </div> */}

                                <div className="w-full mt-4 flex items-center relative">
                                    <input
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="New Password"
                                        aria-label="New Password"
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
                                        placeholder="Confirm New Password"
                                        aria-label="Confirm New Password"
                                        {...register("confirmPassword")}
                                        onChange={(e) => (setConfirmPassword(e.target.value))}
                                    />
                                    <span onClick={handleShowConfirmPassword} className='cursor-pointer absolute right-[20px] mt-2'> {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                                    <span>{ }</span>
                                </div>

                            </form>
                        </div>

                        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;