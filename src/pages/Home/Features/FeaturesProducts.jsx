/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FeaturesProductsDetails from './FeaturesProductsDetails';

const FeaturesProducts = () => {
    const [featureProducts, setFeatureProducts] = useState([]);
    useEffect(() => {
        fetch('FeatureProducts.json')
            .then(res => res.json())
            .then(data => setFeatureProducts(data))
    }, [])
    return (
        <div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    featureProducts.map(products => <FeaturesProductsDetails key={products.product_id} products={products} />)
                }
            </div>
        </div>
    );
};

export default FeaturesProducts;