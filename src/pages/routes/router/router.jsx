/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Error from "../../Share/Error/Error";
import Home from '../../Home/Home';
import About from '../../About/About';
import Contact from '../../Contact Us/Contact';
import FAQ from '../../FAQ/FAQ';
import Login from '../../Login/Login';
import SignUp from '../../Signup/SignUp';
import PasswordReset from '../../Login/PasswordReset';

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
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/reset-page',
                element: <PasswordReset />
            }
        ]
    }
]);

export default router;