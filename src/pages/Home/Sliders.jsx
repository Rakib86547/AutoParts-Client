/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../../App.css'
// import Slider from "react-slick";


const Sliders = ({ content }) => {
    const { img, title, description, btn } = content;

    return (
        <div style={{
            backgroundImage: `url(${img})`, 
        }} className='slider-box text-center'>
            <div>
                <h1 className='text-[40px] text-white font-semibold'>{title}</h1>
                <p className='text-white text-[16px] w-[700px] m-auto pt-5'>{description}</p>
                <button className='shp-btn bg-[#D90368] mt-[35px] text-white px-[40px] py-[10px] rounded-lg hover:bg-[#191613] duration-500 transition-all'>{btn}</button>
            </div>
        </div>
    );
};

export default Sliders;