/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../App.css';
import image from '../../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import facebook from '../../../assets/Facebook.png';
import linkedin from '../../../assets/Linkedin.png';
import instagram from '../../../assets/Instagram.png';
import payment from '../../../assets/payment.jpg';

const Footer = () => {
    return (
        <div>
            <div className='footer-box py-[100px]'>
                <div className="parent-container grid gap-5 grid-cols-1 md:grid-cols2 lg:grid-cols-4 text-[#bdbdbd]">
                    <div className='fd'>
                        <figure className='footer-img-box w-[150px]'><img className='footer-img' src={image} alt='footer image' /></figure>
                        <p className='mt-[30px] text-[17px]'>We work on market over 20 years. We sale only original auto parts and gained confidence of 320k + clients. Buy from AutoParts, join our big community.</p>
                    </div>

                    <div className='text-center'>
                        <h1 className='text-[20px]'>Customer Services</h1>
                        <div className='mt-[30px] text-[17px]'>
                            <Link><h2 className='mt-2'>Contact Us</h2></Link>
                            <Link><h2 className='mt-2'>FAQs</h2></Link>
                            <Link><h2 className='mt-2'>Store Location</h2></Link>
                            <Link><h2 className='mt-2'>Delivery Information</h2></Link>
                        </div>
                    </div>

                    <div className='text-center'>
                        <h1 className='text-[20px]'>About Us</h1>
                        <div className='mt-[30px] text-[17px]'>
                            <Link><h2 className='mt-2'>Site Map</h2></Link>
                            <Link><h2 className='mt-2'>Careers</h2></Link>
                            <Link><h2 className='mt-2'>Projects</h2></Link>
                            <Link><h2 className='mt-2'>Clients</h2></Link>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[20px]'>Contact Us</h1>
                        <div className='flex flex-col gap-5 mt-[30px]'>
                            <div className='flex flex-col gap-3'>
                                <div className='flex items-center'>
                                    <span className="email_icon text-[25px]"><FaRegEnvelopeOpen className='text-[#D90368]' /></span>
                                    <span className='email ml-3 text-[17px] font-semibold'>rakibb8040@gmail.com</span>
                                </div>
                                <div className='flex items-center'>
                                    <span className="phone_icon text-[25px] text-[#D90368]"><FaPhone /></span>
                                    <span className='phone ml-3 text-[17px] font-semibold'>07-455-5148</span>
                                </div>
                            </div>
                            <div className='icon-box flex items-center text-[25px] justify-between w-[120px]'>
                                <a href='#'><img src={facebook} /></a>
                                <a href='#' className='mx-3'><img src={instagram} /></a>
                                <a href='#'><img src={linkedin} /></a>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#121212] py-3'>
                <div className='flex items-center justify-between parent-container footer-last'>
                    <h2 className='text-[#bdbdbd] text-[18px] font-semibold'>All Rights Reserved AutoParts</h2>
                    <figure><img src={payment} /></figure>
                </div>
            </div>
        </div>
    );
};

export default Footer;