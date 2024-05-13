/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import ResponsiveNavbar from './ResponsiveNavbar';
import '../../../App.css';

const Navbar = () => {
    return (
        <>
            <div className='border-b border-[#D90368] laptop-menu sticky top-0 left-0 w-full bg-white z-10 '>
                <div className='nav-parent-box flex items-center justify-between w-full py-[20px] parent-container'>
                    <div className='logo-box w-[130px] h-[46px]'>
                        <Link to='/'><img className='w-full h-full' src={logo} alt='Logo' /></Link>
                    </div>

                    <div className='flex'>
                        <ul className='menu-list-box flex items-center justify-between pl-[10px] w-[750px] mr-3'>
                            <span className='src-box w-[350px] border border-[#ddd] px-[3px] py-[10px] relative rounded'>
                                <input type='text' placeholder='search your products...' className='src-input pl-2' />
                                <button className='src-btn bg-[#D90368] text-white px-[18px] rounded py-[3px] absolute right-0 top-0 bottom-0'>Search</button>
                            </span>

                            <li><Link>Home</Link></li>
                            <li><Link>Blogs</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                            <li><Link>Products</Link></li>
                        </ul>
                        <div className='icon-box flex w-[75px] ml-[20px] items-center justify-between'>
                            <Link><li className=''><BsCartPlus className='user text-[25px]' /></li></Link>
                            <Link><li><FaRegUserCircle className='text-[25px]' /></li></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------- RESPONSIVE NAVBAR ---------- */}
            <div className=''>
                <ResponsiveNavbar />
            </div>
        </>
    );
};

export default Navbar;