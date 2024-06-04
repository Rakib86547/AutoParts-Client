/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/Categories/why4.png';
import '../../App.css'

const FAQ = () => {
    return (
        <div className='parent-container'>
            <div className='faq flex items-center justify-between py-[100px] gap-5'>
                <div className='w-1/2'>
                    <figure><img className='rounded' src={img} alt='FAQ' /></figure>
                </div>

                <div className='w-1/2'>
                    <div className='text-left'>
                        <h1>Frequently Ask Question</h1>
                        <h3 className='text-[#D90368]'>Questions & Answers</h3>
                    </div>

                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What types of auto parts do you sell?
                        </div>
                        <div className="collapse-content">
                            <p>We offer a wide range of auto parts including but not limited to, engine components, brakes, suspension systems, exhaust systems, electrical systems, and accessories for all major car makes and models.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow mt-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I find the right part for my vehicle?
                        </div>
                        <div className="collapse-content">
                            <p>You can use our vehicle lookup tool by entering your cars make, model, and year. Additionally, you can search by part number or keyword. If you need further assistance, our customer service team is available to help.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow mt-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What is your return policy?
                        </div>
                        <div className="collapse-content">
                            <p>We accept returns within 30 days of purchase. The items must be unused and in their original packaging. Please contact our customer service to initiate a return and get a return authorization number. Note that some items may be subject to a restocking fee.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow mt-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer free shipping?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer free standard shipping on orders over $50 within the continental United States. Expedited shipping options are available at an additional cost.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow mt-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I track my order?
                        </div>
                        <div className="collapse-content">
                            <p>Once your order has been shipped, you will receive an email with the tracking information. You can also log into your account on our website and view the tracking details in the order history section.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow mt-3">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Do you provide a warranty on your parts?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we provide a warranty on most of our parts. The warranty period varies depending on the manufacturer and type of part. Please check the product details for specific warranty information. If you have any issues, our customer service team is here to assist you with the warranty process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;