/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Error from "../../Share/Error/Error";
import Home from '../../Home/Home';
import About from '../../About/About';
import Contact from '../../Contact Us/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
]);

export default router;