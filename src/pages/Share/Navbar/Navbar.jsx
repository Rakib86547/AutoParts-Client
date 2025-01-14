/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo2.png';
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import ResponsiveNavbar from './ResponsiveNavbar';
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/features/users/userSlice';

const Navbar = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSignOut = () => {
        dispatch(logOut());
        navigate('/login')
    };
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
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link>Shops</Link></li>
                        </ul>

                        {
                            user?.email ?
                                
                                (<div className="flex justify-evenly items-center w-[128px]">
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="cart-icon">
                                            <div className="indicator">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="badge badge-sm indicator-item">8</span>
                                            </div>
                                        </div>
                                        <div
                                            tabIndex={0}
                                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                            <div className="card-body">
                                                <span className="text-lg font-bold">8 Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="rounded-full overflow-hidden border border-[#D90368]">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    alt="Image"
                                                    src={user?.image} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                            <li><a className="justify-between">Profile</a></li>
                                            <li><a>Settings</a></li>
                                            <li onClick={handleSignOut}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>)
                                :
                                (<div className='icon-box flex w-[75px] ml-[20px] items-center justify-between'>
                                    {/* <Link><li className=''><BsCartPlus className='user text-[25px]' /></li></Link> */}
                                    <Link to='/login' className="tooltip tooltip-bottom" data-tip="Login"><li><FaRegUserCircle className='text-[25px]' /></li></Link>
                                </div>)
                        }





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

{/* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>

  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}