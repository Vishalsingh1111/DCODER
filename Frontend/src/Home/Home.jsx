import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NewsletterSubscription from '../components/NewsletterSubscription';
import FAQ from '../components/FAQ';
import Homecontentcard from '../components/Homecontentcard';
import Homepromo from '../components/Homepromo';
import PageViewCounter from '../components/ViewerCount';
import HomeVideo from '../components/HomeVideo';
import HomeCorousel from '../components/HomeCorousel'


function Home() {
    const pageId = 'home-page'; // Unique ID for the home page

    return (
        <>
            <Navbar />
            <Banner />
            <Homecontentcard />
            <HomeVideo />
            {/* <PageViewCounter pageId={pageId} /> */}

            <HomeCorousel />
            {/* <NewsletterSubscription /> */}
            <FAQ />
            <Homepromo />
            <Footer />
        </>
    );
}

export default Home;
