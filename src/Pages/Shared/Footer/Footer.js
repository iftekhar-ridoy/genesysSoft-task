import React from 'react';
import logo from '../../../Assets/logo.png';
import card1 from '../../../Assets/card/Layer 3.png';
import card2 from '../../../Assets/card/Layer 4.png';
import card3 from '../../../Assets/card/Layer 5.png';
import card4 from '../../../Assets/card/Layer 6.png';
import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#F0F0F0] md:mt-[100px] text-[#2D2929] md:tracking-[0.03em]'>
            <div className='px-5 md:px-[100px] pt-5 md:pt-[100px] flex flex-col md:flex-row justify-between gap-8 md:gap-16'>
                <div className='md:w-1/3'>
                    <img className='w-[105px] h-[120px]' src={logo} alt="" />
                    <h3 className='text-sm md:text-[15px] md:leading-[26px] mt-3 md:mt-12'>By completing this form you're signing <br /> up to receive our emails and can <br /> unsubscribe at any time</h3>
                </div>
                <div className='md:w-1/3'>
                    <div className='flex flex-col md:flex-row justify-between gap-8'>
                        <div>
                            <h2 className='text-sm md:leading-[22px] font-semibold mb-1 md:mb-7'>MENU</h2>
                            <ul className='text-sm md:leading-[22px]'>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Home</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Gift Card</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Seasonal</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Kid & Nursery</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Pet</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Gift Registry</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-sm md:leading-[22px] font-semibold mb-1 md:mb-7'>CUSTOMER CARE</h2>
                            <ul className='text-sm md:leading-[22px]'>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Contact Us</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Shipping Policy</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Returns Policy</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-sm md:leading-[22px] font-semibold mb-1 md:mb-7'>ABOUT US</h2>
                            <ul className='text-sm md:leading-[22px]'>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Our Story</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Terms Of Services</li>
                                <li className='mb-1 md:mb-4 hover:text-blue-700 hover:underline cursor-pointer'>Articles</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3'>
                    <h2 className='text-sm md:leading-[22px] font-semibold mb-1 md:mb-7'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <h3 className='text-xs md:text-sm md:leading-[21px] mb-3 md:mb-0'>Signup for our newsletter to stay up to dare on sales and events.</h3>

                    <form className="md:mt-6 flex">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            className="w-full max-w-[398px] outline-none p-2 px-5 border border-solid border-black text-sm" />
                        <button
                            className="p-2 w-[100px] bg-black hover:border-black text-white border border-solid border-black text-sm"
                            type="submit">
                            join
                        </button>
                    </form>

                    <h3 className='mt-3 md:mt-4 text-xs md:text-sm md:leading-[21px]'>By completing this form you're signing up to receive our emails and can unsubscribe at any time</h3>
                </div>
            </div>

            <div className='flex flex-col items-end justify-end px-5 md:px-[100px] mt-5 md:mt-0'>
                <select className="select rounded-none text-sm font-normal h-12 w-[190px] border border-[#2D2929]">
                    <option>United States (USD $)</option>
                    <option>Banladesh (TK $)</option>
                    <option>India (INR $)</option>
                </select>
            </div>

            <div className='flex items-center justify-between py-5 md:py-6 px-5 md:px-[100px]'>
                <div className='flex gap-5'>
                    <FaFacebookF className='w-5 h-5 hover:text-sky-700 cursor-pointer'></FaFacebookF>
                    <FaTwitter className='w-5 h-5 hover:text-sky-600 cursor-pointer'></FaTwitter>
                    <FaInstagramSquare className='w-5 h-5 hover:text-orange-600 cursor-pointer'></FaInstagramSquare>
                </div>
                <div className='flex gap-2'>
                    <img className='w-8 h-5' src={card1} alt="card" />
                    <img className='w-8 h-5' src={card2} alt="card" />
                    <img className='w-8 h-5' src={card3} alt="card" />
                    <img className='w-8 h-5' src={card4} alt="card" />
                </div>
            </div>
            <div className='divider mx-5 md:mx-[100px] m-0'></div>
            <h3 className='text-center text-xs md:text-sm md:leading-[22px] py-5'>© Copyright 2023 by Iftekharul Islam Ridoy. All rights reserved.</h3>

        </footer>
    )
};

export default Footer;