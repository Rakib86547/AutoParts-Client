// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { BsCartPlus } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { HiBars3 } from "react-icons/hi2";
import '../../../App.css';

const ResponsiveNavbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [open, setIsOpen] = useState(true);
    const handleOpen = () => { setIsOpen(!open) }

    return (
        <div className='parent-container py-2 respon-menu'>
            <div className='nav-parent-box parent-container'>
                <div className='flex w-full justify-between items-center px-3 pb-[15px] border-b'>
                    <div className='logo-box w-[130px] h-[46px]'>
                        <Link to='/'><img className='w-full h-full' src={logo} alt='Logo' /></Link>
                    </div>

                    <div
                        onClick={handleOpen}
                    >
                        {
                            open ? <span className='text-[25px]'><HiBars3 /></span> : <span className='text-[25px]'><RxCross1 /></span>
                        }
                    </div>
                </div>

                <div className={`bg-[#D90368] w-[200px] pl-3 pt-3 h-screen absolute ${open ? '-left-full duration-500' : 'left-0 duration-500'}`}>
                    <ul className='menu-list-box'>
                        <li><Link>Home</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link>Products</Link></li>
                    </ul>
                    <div
                        className='mt-4 flex justify-between items-center w-[85px] text-white cursor-pointer'>
                        <Link><li className=''><BsCartPlus className='text-[25px]' /></li></Link>
                        <Link><li><FaRegUserCircle className='text-[25px]' /></li></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;