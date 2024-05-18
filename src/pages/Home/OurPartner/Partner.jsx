/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from "react-slick";
import img1 from '../../../assets/Sliders/brand-1.png';
import img2 from '../../../assets/Sliders/brand-2.png';
import img3 from '../../../assets/Sliders/brand-3.png';
import img4 from '../../../assets/Sliders/brand-4.png';
import img5 from '../../../assets/Sliders/brand-5.png';
import img6 from '../../../assets/Sliders/brand-6.png';

const Partner = () => {
    const settings = {        
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };
    return (
        <div>
            <div className='text-center mt-[80px]'>
                <h1>Our Partner</h1>
                <h3 className='text-[#D90368]'>Auto Parts distribute.</h3>
            </div>
            <div className="slider-container py-[70px]">
                <Slider {...settings}>
                    <div>
                        <figure className='img-box'><img className='' src={img1} alt='img1' /></figure>
                    </div>
                    <div>
                        <figure><img src={img2} alt='img2'></img></figure>
                    </div>
                    <div>
                        <figure><img src={img3} alt='img3'></img></figure>
                    </div>
                    <div>
                        <figure><img src={img4} alt='img4'></img></figure>
                    </div>
                    <div>
                        <figure><img src={img5} alt='img5'></img></figure>
                    </div>
                    <div>
                        <figure><img src={img6} alt='img6'></img></figure>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Partner;