/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import Sliders from './Sliders';
import banner1 from '../../../src/assets/Sliders/banner-1.jpg'
import banner2 from '../../../src/assets/Sliders/banner-2.png'
import banner3 from '../../../src/assets/Sliders/banner-3.png'

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 200,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const sliderContent = [
        {
            img: banner1,
            title: 'This is heading title1',
            description: 'Feugiat tristique parturient sapien senectus per tortor suspendisse sem at scelerisque, curae id mattis curabitur varius magna integer quam tempus, cum nec bibendum hac euismod faucibus fermentum tempor odio. Venenatis congue diam turpis velit rutrum quam, justo euismod ultricies ante habitasse, ad arcu quis felis et. Neque ante dictum donec sociosqu pellentesque massa facilisis hac lectus, nunc pretium eget',
            btn: 'Shop Now'
        },
        {
            img: banner2,
            title: 'This is heading title2',
            description: 'Feugiat tristique parturient sapien senectus per tortor suspendisse sem at scelerisque, curae id mattis curabitur varius magna integer quam tempus, cum nec bibendum hac euismod faucibus fermentum tempor odio. Venenatis congue diam turpis velit rutrum quam, justo euismod ultricies ante habitasse, ad arcu quis felis et. Neque ante dictum donec sociosqu pellentesque massa facilisis hac lectus, nunc pretium eget',
            btn: 'Shop Now'
        },
        {
            img: banner3,
            title: 'This is heading title3',
            description: 'Feugiat tristique parturient sapien senectus per tortor suspendisse sem at scelerisque, curae id mattis curabitur varius magna integer quam tempus, cum nec bibendum hac euismod faucibus fermentum tempor odio. Venenatis congue diam turpis velit rutrum quam, justo euismod ultricies ante habitasse, ad arcu quis felis et. Neque ante dictum donec sociosqu pellentesque massa facilisis hac lectus, nunc pretium eget',
            btn: 'Shop Now'
        },
    ]
    return (
        <div className='overflow-hidden'>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        sliderContent.map(content => (<Sliders content={content}></Sliders>))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default HomeSlider;