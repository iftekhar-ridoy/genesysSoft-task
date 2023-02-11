import React from 'react';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    return (
        <div className='w-full mt-8 md:mt-[100px]'>
            <div className='flex flex-col items-center md:tracking-[0.03em]'>
                <h2 className='text-xl md:text-[32px] text-[#2D2929] md:leading-[48px] mb-4'>RECOVER PASSWORD</h2>
                <h3 className='text-xs md:text-[17px] md:leading-[26px] text-center text-[#2D2929] mb-6 md:mb-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>

                <form className="w-full px-3">
                    <div className='w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            id="email"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black"
                        />
                    </div>
                    <div className='w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-12'>
                        <input
                            type="password"
                            placeholder="Password"

                            id="password"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black"
                        />
                    </div>
                    <div className='w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <button
                            className="w-full max-w-[686px] h-[47px] mx-auto md:leading-[27px] p-2 bg-[#4E4534] hover:bg-black text-white text-base md:text-xl"
                            type="submit">
                            SUBMIT
                        </button>
                    </div>

                    <div className='w-full max-w-[686px] h-[47px] mx-auto'>
                        <p className='text-[#2D2929] md:leading-[26px] text-sm md:text-[17px]'>Remember Password?
                            <span className='underline ml-3'><Link to='/login'>Back to login</Link></span></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default RecoverPassword;