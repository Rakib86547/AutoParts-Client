/* eslint-disable no-unused-vars */
import React from 'react';
import shipping from '../../../assets/System/free delivery.png';
import support from '../../../assets/System/24 houre.png';
import money from '../../../assets/System/money bank.png';
import offer from '../../../assets/System/offer.png';

const Supports = () => {
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[1050px] m-auto max-w-full py-6 border-b border-[#ddd]'>
            <div className='flex justify-center'>
                <figure><img className='w-12 h-12' src={shipping} alt='' /></figure>
                <div className='ml-4'>
                    <h2 className='font-bold text-[18px]'>Free Shipping</h2>
                    <p>For orders from $50</p>
                </div>
            </div>

            
            <div className='flex justify-center'>
                <figure><img className='w-12 h-12' src={support} alt='' /></figure>
                <div className='ml-4'>
                    <h2 className='font-bold text-[18px]'>Support 24/7</h2>
                    <p>Call us anytime</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <figure><img className='w-12 h-12' src={money} alt='' /></figure>
                <div className='ml-4'>
                    <h2 className='font-bold text-[18px]'>100% Safety</h2>
                    <p>Only secure payments</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <figure><img className='w-12 h-12' src={offer} alt='' /></figure>
                <div className='ml-4'>
                    <h2 className='font-bold text-[18px]'>Hot Offers</h2>
                    <p>Discounts up to 90%</p>
                </div>
            </div>


        </div>
    );
};

export default Supports;