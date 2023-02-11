import React from 'react';
import useTitle from '../../../Hook/useTitle';
import Banner from '../02Banner/Banner';
import Collection from '../03Collection/Collection';
import Discount from '../04Discount/Discount';
import Blog from '../05Blog/Blog';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <Discount></Discount>
            <Blog></Blog>
        </div>
    );
};

export default Home;