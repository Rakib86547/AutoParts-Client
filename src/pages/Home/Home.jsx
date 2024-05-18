/* eslint-disable no-unused-vars */
import React from 'react';
import HomeSlider from './HomeSlider';
import Category from './Category/Category';
import Products from './Products/Products';
import Supports from './Supports/Supports';
import WhyChoseMe from './WhyChoseMe/WhyChoseMe';
import '../../App.css'
import Features from './Features/Features';
import Partner from './OurPartner/Partner';

const Home = () => {
    return (
        <div>
            <HomeSlider className="-z-10" />
            <div className='parent-container'>
                <Supports />
                <Category />
                <Products />
            </div>
            <WhyChoseMe />
            <div className='parent-container'>
                <Partner />
                <Features />                
            </div>
        </div>
    );
};

export default Home;