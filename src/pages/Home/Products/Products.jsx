/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProductsDetails from './ProductsDetails';
import { IoIosArrowForward } from "react-icons/io";


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect((() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }), [])
    return (
        <div>
            <div className='text-center py-8 mt-10'>
                <h1>Popular Products</h1>
                <h3 className='text-[#D90368]'> Our Popular Products</h3>
            </div>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5'>
                {
                    products.map(product => <ProductsDetails key={product.product_id} product={product} />)
                }
            </div>
            <div className='flex justify-center mt-5'>
                <button className='bg-[#D90368] text-white py-2 px-[52px] rounded-[30px] font-semibold hover:bg-[#191613] duration-300 flex items-center justify-center'>More Products <IoIosArrowForward className='ml-2' /> </button>
            </div>
        </div>
    );
};

export default Products;