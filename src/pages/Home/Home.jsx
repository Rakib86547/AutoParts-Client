/* eslint-disable no-unused-vars */
import React from 'react';
import HomeSlider from './HomeSlider';
import Category from './Category/Category';
import Products from './Products/Products';
import Supports from './Supports/Supports';
import WhyChoseMe from './WhyChoseMe/WhyChoseMe';

const Home = () => {
    return (
        <div>
            <HomeSlider className="-z-10" />
            <div className='parent-container'>
                <Supports />
                <Category />
                <Products />
                <WhyChoseMe />
            </div>
        </div>
    );
};

export default Home;