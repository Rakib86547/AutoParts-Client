/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useForm } from "react-hook-form"
import '../../App.css'
import { toast } from 'react-hot-toast';
import { FaPhone, FaRegEnvelopeOpen } from 'react-icons/fa';
import facebook from '../../assets/Facebook.png';
import linkedin from '../../assets/Linkedin.png';
import instagram from '../../assets/Instagram.png';
import { RxDoubleArrowRight } from "react-icons/rx";

const Contact = () => {
    const [loading, setLoading] = useState(true)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const handleFormSubmit = (data) => {
        setLoading(false)
        if (loading === false) {
            toast.success('Thank You For Your Message!');
            reset()
        }
        console.log(loading)
    }
    return (
        <div className='parent-container '>
            <div className='py-[100px]'>
                <div className='grid gap-5 lg:grid-cols-2 max-[1024px]:grid-cols-1'>

                    <div className="google-map">
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>

                    <div className="contact-form">
                        <div className='text-left pl-[30px]'>
                            <h1>Contact Us</h1>
                            <h3 className='text-[#D90368]'>Get In Touch</h3>
                        </div>
                        <div className="hero">
                            <div className="hero-content">
                                <div className="card shrink-0 w-full">
                                    <form className="card-body" onSubmit={handleSubmit(handleFormSubmit)}>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[18px] font-semibold">Name</span>
                                            </label>
                                            <input
                                                {...register("name", { required: true })}
                                                type="text"
                                                placeholder="your name"
                                                className="input input-bordered contact-border"
                                            />
                                        </div>
                                        {errors.name && <p className='text-red-500 text-left'>Please Enter Your Name</p>}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[18px] font-semibold">Email</span>
                                            </label>
                                            <input
                                                {...register("email", { required: true })}
                                                type="email"
                                                placeholder="email"
                                                className="input input-bordered contact-border"
                                            />
                                        </div>
                                        {errors.email && <p className='text-red-500 text-left'>Please Enter Your Valid Email</p>}

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-[18px] font-semibold">Subject</span>
                                            </label>
                                            <input
                                                {...register("subject", { required: true })}
                                                type="text"
                                                placeholder="subject"
                                                className="input input-bordered contact-border"
                                            />
                                        </div>
                                        {errors.subject && <p className='text-red-500 text-left'>Please Enter Your Subject</p>}

                                        <div>
                                            <label className="label">
                                                <span className="label-text text-[18px] font-semibold">Your Message</span>
                                            </label>
                                            <textarea
                                                {...register("message", { required: true })}
                                                className="textarea textarea-error textarea-lg w-full"
                                                placeholder="write your message..."></textarea>
                                        </div>
                                        {errors.message && <p className='text-red-500 text-left'>Please Write Your Messages</p>}
                                        <div className="form-control mt-6">
                                            <button className="btn bg-[#1F2937] text-white hover:bg-[#D90368] text-[17px]">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid gap-5 lg:grid-cols-3 pb-[80px] max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 '>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px]'>Head Office</h1>
                    <div className='mt-5'>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />1987 Davis Lane Englewood</span>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />516-582-7348</span>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />inbox@autoparts.uk</span>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px]'>Branch Office</h1>
                    <div className=' flex-col mt-5'>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />675 Burning Memory Lane</span>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />516-582-7348</span>
                        <span className='flex items-center'><RxDoubleArrowRight className='mr-2 text-[#D90368]' />inbox@autoparts.uk</span>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                <h1 className='text-[25px]'>Social Links</h1>
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
    );
};

export default Contact;