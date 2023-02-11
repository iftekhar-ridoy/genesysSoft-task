import React from 'react';
import bannerBackground from '../../../Assets/banner-background.jpg';
import './Banner.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";

const Banner = () => {
    const banner = [
        {
            id: 1,
            bannerBackground: bannerBackground,
            title: 'Lorem Ipsum is simply dummy text of the printing',
            subTitle: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            id: 2,
            bannerBackground: bannerBackground,
            title: 'Lorem Ipsum is simply dummy text of the printing',
            subTitle: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            id: 3,
            bannerBackground: bannerBackground,
            title: 'Lorem Ipsum is simply dummy text of the printing',
            subTitle: 'Lorem Ipsum is simply dummy text of the.'
        },
        {
            id: 4,
            bannerBackground: bannerBackground,
            title: 'Lorem Ipsum is simply dummy text of the printing',
            subTitle: 'Lorem Ipsum is simply dummy text of the.'
        }
    ]


    return (
        <div>
            <Swiper

                style={{
                    "--swiper-pagination-color": "#FFFFFF",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}

                className="mySwiper"
                slidesPerView={1}
                // spaceBetween={30}

                freeMode={true}

                pagination={{
                    clickable: true,
                }}

                loop={true}
                // loopFillGroupWithBlank={true}
                // navigation={true}

                autoplay={{
                    delay: 3000
                }}

                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        // spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 1,
                        // spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        // spaceBetween: 40,
                    }
                }}
                modules={[FreeMode, Pagination, Autoplay, Navigation]}
            >
                <>
                    {
                        banner.length &&
                        <>
                            <div>
                                {
                                    banner?.map((ban) => (
                                        <SwiperSlide key={ban.id}>
                                            <div className="relative w-full h-full">
                                                <figure>
                                                    <img
                                                        src={ban.bannerBackground}
                                                        className="w-full md:h-[792px]"
                                                        alt="bannerBackground"
                                                    />
                                                </figure>
                                                <div className="absolute top-[40px] md:top-[400px] left-1 md:left-[99px] w-[150px] md:w-[533px] text-white">
                                                    <h2
                                                        className="text-xs md:text-[40px] md:leading-[54px] m-0 p-0">
                                                        {ban.title}
                                                    </h2>
                                                    <h3
                                                        className='text-[8px] md:text-xl mt-1 md:mt-6 md:leading-[27px] md:tracking-[0.03em]'>
                                                        {ban.subTitle}
                                                    </h3>
                                                    <button
                                                        className='mt-4 md:mt-12 py-[2px] md:py-3 px-2 md:px-14 bg-[#BCB2A0] text-[8px] md:text-xl text-[#2D2929] hover:text-[#BCB2A0] hover:bg-[#2D2929]'>
                                                        SHOP NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </div>
                        </>

                    }
                </>

            </Swiper>
        </div>
    );
};

export default Banner;