/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../App.css'
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoriesDetails = ({ category }) => {
    // eslint-disable-next-line react/prop-types
    const { img, category_name } = category
    return (
        <div>
            <Link className='category-box'>
                <div className="card card-compact bg-[#F5F5F5]">
                    <figure><img className='w-[30%]' src={img} alt="Parts" /></figure>
                    <div className="card-body flex flex-col justify-center text-center">
                        <h2 className="card-title m-auto">{category_name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesDetails;