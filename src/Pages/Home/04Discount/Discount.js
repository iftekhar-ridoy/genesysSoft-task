import React from 'react';
import discountBackground from '../../../Assets/discount.jpg';

const Discount = () => {

    return (
        <section className='relative'>
            <div>
                <img className='w-full h-[200px] md:h-full' src={discountBackground} alt="" />
            </div>
            <div className='absolute top-[20%] 2xl:top-[30%] left-[10%] md:left-[35%] xl:left-[40%] text-[#FFFFFF]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1
                        className='text-3xl md:text-4xl xl:text-[44px] md:leading-[60px] md:tracking-[0.03em] font-semibold xl:mb-4'>
                        20% OFF
                    </h1>
                    <h3
                        className='text-sm md:text-[17px] md:leading-[26px] md:tracking-[0.03em] mb-3 xl:mb-8'>
                        And extra 50% off sale styles code FORCE20
                    </h3>
                    <button
                        className='w-[100px] md:w-[189px] h-[35px] md:h-[47px] text-sm md:text-[17px] md:leading-[23px] md:tracking-[0.03em] border border-white hover:bg-black'>
                        VIEW ALL
                    </button>
                </div>
            </div>
        </section >
    );
};

export default Discount;