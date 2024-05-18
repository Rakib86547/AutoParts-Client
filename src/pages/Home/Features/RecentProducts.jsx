/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import RecentProductsDetails from './RecentProductsDetails';

const RecentProducts = () => {
    const [recentProducts, setRecentProducts] = useState([]);
    useEffect(() => {
        fetch('RecentProducts.json')
            .then(res => res.json())
            .then(data => setRecentProducts(data))
    }, [])
    return (
        <div>
            <div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                    {
                        recentProducts.map(products => <RecentProductsDetails key={products.product_id} products={products} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentProducts;