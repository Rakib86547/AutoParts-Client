/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../../assets/Categories/why4.png';
import { FcAdvertising } from "react-icons/fc";

const WhyChoseMe = () => {
    return (
        <div className='bg-[#F5F5F5] mt-[80px]'>
            <div className='parent-container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className='why-parent'>
                        <h1 className='text-[20px] pt-10'>WHY CHOOSE <br /> <span className='text-[35px] text-[#D90368]'>AUTO PARTS</span></h1>
                        <div className='flex mt-5'>
                            <div><span className='add-icon text-[45px]'><FcAdvertising /></span></div>
                            <div className='ml-5'>
                                <h1 className='text-[25px] mb-2'>Car parts Shop</h1>
                                <p className='text-[16px] font-medium w-[400px]'>Because of its extensive experience and thousands of happy clients, Mobimax is one of the top online retailers for auto components.</p>
                            </div>
                        </div>

                        <div className='flex mt-5'>
                            <div><span className='add-icon text-[45px]'><FcAdvertising /></span></div>
                            <div className='ml-5'>
                                <h1 className='text-[25px] mb-2'>High quality brand Auto parts</h1>
                                <p className='text-[16px] font-medium w-[400px]'>Road safety and vehicle mobility are ensured by a wide range of manufacturers and premium auto parts.</p>
                            </div>
                        </div>

                        <div className='flex mt-5 pb-10'>
                            <div><span className='add-icon text-[45px]'><FcAdvertising /></span></div>
                            <div className='ml-5'>
                                <h1 className='text-[25px] mb-2'>Original Parts Quality</h1>
                                <p className='text-[16px] font-medium w-[400px]'>The complete line of vehicle components is supplied by reputable and certified sources. MobiMax provides premium brand replacement parts.</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <figure><img className='iiim' src={image} alt='img' /></figure>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChoseMe;