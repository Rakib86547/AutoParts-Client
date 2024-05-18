/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../App.css';
import image from '../../../assets/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-box py-[100px]'>
            <div className="parent-container grid gap-5 grid-cols-1 md:grid-cols2 lg:grid-cols-4 text-white">
                <div>
                    <figure className='footer-img-box w-[150px]'><img className='footer-img' src={image} alt='footer image' /></figure>
                    <p className='mt-[30px] text-[17px]'>We work on market over 20 years. We sale only original auto parts and gained confidence of 320k + clients. Buy from AutoParts, join our big community.</p>
                </div>

                <div>
                    <h1 className='text-[25px]'>Customer Services</h1>
                    <div className='mt-[30px] text-[17px]'>
                        <Link><h2>Contact Us</h2></Link>
                        <Link><h2>FAQs</h2></Link>
                        <Link><h2>Store Location</h2></Link>
                        <Link><h2>Delivery Information</h2></Link>
                    </div>
                </div>

                <div>
                    <h1>Contact Us</h1>
                </div>

                <div>
                    <h1>Google Maps</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;