/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { PiEyeLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const RecentProductsDetails = ({ products }) => {
    const { product_title, img, price, descriptions } = products;
    return (
        <div>
            <div className=''>
                <div className="card card-compact bg-white product-card shadow border border-[#ddd] overflow-hidden">
                    <figure><img className='w-[50%]' src={img} alt="Products" /></figure>
                    <div className="card-body flex flex-col justify-center text-center relative">
                        <Link className=' m-auto hover:text-[#D90368] duration-300'>
                            <h2 className="card-title">{product_title.slice(0, 20) + '...'}</h2>
                        </Link>
                        <p>{descriptions.slice(0, 80) + '...'}</p>
                        <h3 className='text-[#191613] font-semibold'>{price}</h3>
                    </div>
                    <div className='pb-4'>
                        <button className=' flex items-center justify-center m-auto text-[#D90368] py-2 px-[52px] hover:text-[#191613] rounded-[30px] font-semibold  duration-300'>Add To Cart <BsCart4 className='ml-2' /></button>
                    </div>
                    {/* --- hid section --- */}
                    <div className='product-button absolute translate-x-[-100%] top-2 duration-300 h-[100px] mb-5'>
                        <button className='text-[20px] bg-[#ddd] p-2 rounded-[30px] hover:bg-[#D90368] hover:text-white duration-300' title='Wishlist'><IoMdHeartEmpty /></button> <br />
                        <button className='text-[20px] bg-[#ddd] p-2 rounded-[30px] hover:bg-[#D90368] hover:text-white duration-300 mt-2' title='Quick View'><PiEyeLight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProductsDetails;