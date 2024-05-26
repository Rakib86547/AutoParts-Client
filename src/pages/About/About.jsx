/* eslint-disable no-unused-vars */
import React from 'react';
import about from '../../assets/About/about-banner.png';
import team1 from '../../assets/About/team1.png';
import team2 from '../../assets/About/team2.png';
import team3 from '../../assets/About/team3.png';
import team4 from '../../assets/About/team4.png';
import { FaFacebook, FaSkype } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CountUp from 'react-countup';
import '../../App.css';

const About = () => {
    return (
        <div>
            <div className='parent-container'>
                <div>
                    <div className='grid gap-5 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-10 mt-10  max-[1280px]:px-5'>
                        <div className="">
                            <div className='text-left pb-6'>
                                <h1 className='text-[#D90368]'>About AutoParts</h1>
                                <h3 className='font-semibold'>Quality service. How do we do it?</h3>
                            </div>
                            <div className='text-justify'>
                                <p>
                                    Welcome to Apex Auto Parts, your one-stop destination for all your automotive needs. Located conveniently in the heart of the city, we pride ourselves on offering a vast selection of high-quality auto parts and accessories for all makes and models. Whether you are a professional mechanic or a DIY enthusiast, our knowledgeable and friendly staff are here to help you find exactly what you need.
                                </p>
                                <br />
                                <p>
                                    At Apex Auto Parts, we stock everything from essential engine components and brake systems to exterior accessories and performance upgrades. We partner with top brands to ensure that every product on our shelves meets the highest standards of reliability and performance. Our commitment to customer satisfaction means we provide competitive pricing and exceptional service every day.
                                </p>
                                <br />
                                <p>
                                    Need help with installation? Our expert technicians are available to offer advice and guidance, ensuring your project is completed smoothly and efficiently. Plus, with our easy online ordering system and fast shipping options, getting the parts you need has never been more convenient.
                                </p>
                            </div>
                        </div>

                        <div className="image-box">
                            <figure><img src={about} alt='about us' /></figure>
                        </div>
                    </div>

                    <div className='team-container mt-10 max-[1280px]:px-5'>
                        <div>
                            <h1>AutoParts Team</h1>
                            <h3>Meet the Professionals</h3>
                        </div>
                        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mt-9 pb-10'>
                            <div className='bg-slate-200 rounded box-container duration-300 relative overflow-hidden'>
                                <div className='relative'>
                                    <figure><img className='object-cover rounded-t-md rounded-tr-md team-img w-full' src={team1} alt='about us' /></figure>
                                    <div className="overlay"></div>
                                </div>

                                <div className='team-social-icon-box flex m-auto absolute translate-x-[-125%] top-[50%] justify-evenly text-[16px] w-[200px] left-0 right-0 duration-500 '>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaFacebook className='de' /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaInstagram /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaLinkedin /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaXTwitter /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaSkype /></a>
                                </div>
                                <div className='py-5'>
                                    <h2 className='text-[20px] font-bold text-[#D90368]'>Albert Yearn</h2>
                                    <h3 className='text-[16px]'>CEO & Founder</h3>
                                </div>

                            </div>
                            <div className='bg-slate-200 rounded box-container duration-300 relative overflow-hidden'>
                                <div className='relative'>
                                    <figure><img className='object-cover rounded-t-md rounded-tr-md team-img w-full' src={team2} alt='about us' /></figure>
                                    <div className="overlay"></div>
                                </div>

                                <div className='team-social-icon-box flex m-auto absolute translate-x-[-125%] top-[50%] justify-evenly text-[16px] w-[200px] left-0 right-0 duration-500 '>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaFacebook className='de' /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaInstagram /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaLinkedin /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaXTwitter /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaSkype /></a>
                                </div>
                                <div className='py-5'>
                                    <h2 className='text-[20px] font-bold text-[#D90368]'>Benzamin Luice</h2>
                                    <h3 className='text-[16px]'>Sales Manger</h3>
                                </div>

                            </div>
                            <div className='bg-slate-200 rounded box-container duration-300 relative overflow-hidden'>
                                <div className='relative'>
                                    <figure><img className='object-cover rounded-t-md rounded-tr-md team-img w-full' src={team3} alt='about us' /></figure>
                                    <div className="overlay"></div>
                                </div>

                                <div className='team-social-icon-box flex m-auto absolute translate-x-[-125%] top-[50%] justify-evenly text-[16px] w-[200px] left-0 right-0 duration-500 '>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaFacebook className='de' /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaInstagram /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaLinkedin /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaXTwitter /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaSkype /></a>
                                </div>
                                <div className='py-5'>
                                    <h2 className='text-[20px] font-bold text-[#D90368]'>Declan Barnett</h2>
                                    <h3 className='text-[16px]'>Finance Executive</h3>
                                </div>

                            </div>
                            <div className='bg-slate-200 rounded box-container duration-300 relative overflow-hidden'>
                                <div className='relative'>
                                    <figure><img className='object-cover rounded-t-md rounded-tr-md team-img w-full' src={team4} alt='about us' /></figure>
                                    <div className="overlay"></div>
                                </div>

                                <div className='team-social-icon-box flex m-auto absolute translate-x-[-125%] top-[50%] justify-evenly text-[16px] w-[200px] left-0 right-0 duration-500 '>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaFacebook className='de' /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaInstagram /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaLinkedin /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaXTwitter /></a>
                                    <a href='#' className='p-[6px] bg-[#1F2937] text-white hover:bg-[#D90368] duration-500 rounded-full'><FaSkype /></a>
                                </div>
                                <div className='py-5'>
                                    <h2 className='text-[20px] font-bold text-[#D90368]'>Mollie Bishop</h2>
                                    <h3 className='text-[16px]'>Manager & Admin</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-slate-200 py-10 my-[80px] max-[1024px]:hidden'>
                <div className='parent-container'>
                    <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
                        <div>
                            <CountUp
                                end={500}
                                suffix='K'
                                className='text-[50px] font-semibold text-[#D90368]'
                            />
                            <h4 className='text-[18px] font-semibold'>Items Sold</h4>
                        </div>
                        <div>
                            <CountUp
                                end={15}
                                suffix='%'
                                className='text-[50px] font-semibold text-[#D90368]'
                            />
                            <h4 className='text-[18px] font-semibold'>Market increase</h4>
                        </div>
                        <div>
                            <CountUp
                                end={100}
                                suffix='+'
                                className='text-[50px] font-semibold text-[#D90368]'
                            />
                            <h4 className='text-[18px] font-semibold'>New employees</h4>
                        </div>
                        <div>
                            <CountUp
                                end={400}
                                suffix=''
                                className='text-[50px] font-semibold text-[#D90368]'
                            />
                            <h4 className='text-[18px] font-semibold'>Brands</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;