/* eslint-disable no-unused-vars */
import React from 'react';
import HomeSlider from './HomeSlider';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <HomeSlider className="-z-10" />
            <div className='parent-container'>
                <Category />
            </div>
        </div>
    );
};

export default Home;