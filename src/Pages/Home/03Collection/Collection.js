import React from 'react';
import collection1 from '../../../Assets/collection1.jpg';
import collection2 from '../../../Assets/collection2.jpg';
import collection3 from '../../../Assets/collection3.jpg';
// import './Collection.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";

const Collection = () => {
    const ourCollections = [
        {
            id: 1,
            image: collection1,
            title: 'Flower',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            id: 2,
            image: collection2,
            title: 'Candles',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            id: 3,
            image: collection3,
            title: 'Lamp Shade',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            id: 4,
            image: collection2,
            title: 'Candles',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            id: 5,
            image: collection1,
            title: 'Flower',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            id: 6,
            image: collection3,
            title: 'Lamp Shade',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
    ]

    return (
        <section className='pt-5 md:pt-[100px] bg-[#F0F0F0] pb-10'>
            <div className="px-1 md:px-[100px]">
                <h1 className='text-base md:text-[28px] text-[#2D2929] text-center md:text-start leading-[38px] tracking-[0.03em]'>OUR COLLECTION</h1>

                <Swiper
                    style={{
                        "--swiper-pagination-color": "black",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                    className="mySwiper"
                    slidesPerView={3}
                    spaceBetween={30}

                    freeMode={true}

                    pagination={{
                        clickable: true,
                        // bulletClass: `swiper-pagination-bullet`,
                        // renderBullet: (index, className) => {
                        //     return `<span class="${className} feature-pagination-2"></span>`;
                        // }
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
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    modules={[FreeMode, Pagination, Autoplay, Navigation]}
                >
                    <>
                        {
                            ourCollections.length &&
                            <>

                                <div className="">
                                    {
                                        ourCollections?.map((collection) => (
                                            <SwiperSlide key={collection.id}>
                                                <div className="w-full h-full pt-1 md:pt-12">
                                                    <figure className='px-10 md:px-0'>
                                                        <img
                                                            src={collection.image}
                                                            className=""
                                                            alt="collection!"
                                                        />
                                                    </figure>
                                                    <div className="mt-0 mx-10 mb-8 md:mb-24 text-center text-[#2D2929]">
                                                        <p
                                                            className="mt-1 md:mt-6 text-base md:text-[20px] md:leading-[27px] md:tracking-[0.03em]">
                                                            {collection.title}
                                                        </p>
                                                        <h3
                                                            className='text-[10px] md:text-[14px] mt-1 md:mt-3 md:leading-[26px] md:tracking-[0.03em] text-center'>
                                                            {collection.description}
                                                        </h3>
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
        </section>
    );
};

export default Collection;