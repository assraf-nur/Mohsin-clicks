import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Service></Service>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;