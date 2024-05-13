/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CategoriesDetails from './CategoriesDetails';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect((() => {
        fetch('Categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }), [])
    return (
        <div>
            <div className='text-center py-8 mt-10'>
                <h1>Products Category</h1>
                <h3 className='text-[#D90368]'> Our Best Categories</h3>
            </div>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    categories.map(category => (<CategoriesDetails key={category.category_id} category={category} />))
                }
            </div>
        </div>
    );
};

export default Category;