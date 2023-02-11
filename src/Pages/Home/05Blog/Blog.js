import React from 'react';
import img1 from '../../../Assets/blog/01.jpg';
import img2 from '../../../Assets/blog/02.jpg';
import img3 from '../../../Assets/blog/03.jpg';
import img4 from '../../../Assets/blog/04.jpg';

const Blog = () => {
    const blogs = [
        {
            id: 2,
            image: img2,
            time: '16 May, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 3,
            image: img3,
            time: '16 May, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 4,
            image: img4,
            time: '16 May, 2022',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
    ]

    return (
        <section className='mt-5 md:mt-[100px]  md:tracking-[0.03em] text-[#2D2929]'>
            <h2 className='text-center md:text-[28px] md:leading-[38px] mb-2 md:mb-12'>OUR BLOG</h2>
            <div className='flex flex-col md:flex-row gap-3 md:gap-6 mx-1 md:mx-[100px] text-sm md:text-[17px]'>
                <div className='flex flex-row md:flex-col gap-1 md:w-1/2'>
                    <div className='w-1/2 md:w-full'>
                        <img className='w-full' src={img1} alt="" />
                    </div>
                    <div className='flex flex-col w-1/2 md:w-full'>
                        <h2 className='md:leading-[23px] md:mt-6'>16 May, 2022</h2>
                        <h2 className='md:leading-[26px] md:mt-3 font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    </div>
                </div>
                <div className="divider divider-horizontal p-0 m-0"></div>
                <div className='md:w-1/2'>
                    {
                        blogs.map(blog =>
                            <div key={blog.id}>
                                <div className='flex mb-6 gap-1 md:gap-6'>
                                    <div className='w-1/2'>
                                        <img className='md:w-[350px] xl:w-full' src={blog.image} alt="blog_image" />
                                    </div>
                                    <div className='w-1/2'>
                                        <h2 className='md:leading-[23px]'>{blog.time}</h2>
                                        <h2 className='md:leading-[26px] md:mt-3 font-semibold'>{blog.text}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='p-2 md:p-0 md:w-[241px] md:h-[47px] md:mt-16 mb-5 md:mb-0 border border-[#2D2929] text-sm md:text-[17px] md:leading-[23px] hover:bg-black hover:text-white'>VIEW ALL BLOG</button>
            </div>
        </section>
    );
};

export default Blog;