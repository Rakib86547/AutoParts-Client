/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../App.css'

// eslint-disable-next-line react/prop-types
const CategoriesDetails = ({ category }) => {
    // eslint-disable-next-line react/prop-types
    const { img, title, products } = category
    return (
        <div>
            <div className="card card-compact bg-base-100 border border-[#D90368]">
                <figure><img className='w-[30%]' src={img} alt="Parts" /></figure>
                <div className="card-body flex flex-col justify-center text-center">
                    <h2 className="card-title m-auto">{title}</h2>
                    <p>{products?.product1}</p>
                    <p>{products?.product2}</p>
                    <p>{products?.product3}</p>
                    <p>{products?.product4}</p>
                    <div className="card-actions justify-center">
                        <button className="btn text-[16px] font-[500] bg-[#D90368] text-white hover:bg-[#191613]">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDetails;