/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='parent-container'>
            <div className='py-[100px]'>
                <div className="w-[600px] max-w-full mx-auto overflow-hidden bg-white rounded-lg  dark:bg-gray-800">
                    <div className="px-6 py-4">
                        <div className="flex justify-center mx-auto items-center mt-4 gap-4">
                            <h2 className="mt-3 text-[30px] font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h2>
                            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
                        </div>

                        <p className="mt-1 text-center text-[20px] text-gray-500 dark:text-gray-400">Login your account</p>

                        <form>
                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368]  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]" type="email" placeholder="Email Address" aria-label="Email Address" />
                            </div>

                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-[#D90368] focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#cf548d]" type="password" placeholder="Password" aria-label="Password" />
                            </div>

                            {/* <div className="flex items-center justify-between mt-4">
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                                <button className="px-6 py-2 text-sm font-medium tracking-wide capitalize transition-colors transform rounded-lg focus:outline-none  focus:ring-[#D90368] bg-[#D90368] text-white hover:bg-[#191613] duration-300">
                                    Sign In
                                </button>
                            </div> */}
                            <div className="mt-6">
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide  capitalize transition-colors  transform  rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 bg-[#D90368] text-white hover:bg-[#191613] duration-300">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

                    <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>

                        <span className="mx-2">Sign in with Google</span>
                    </a>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                        <Link to='/signup' href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;