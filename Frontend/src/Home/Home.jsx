// import React from 'react'
// import Navbar from '../components/Navbar'
// import Banner from '../components/Banner'
// import Footer from '../components/Footer'
// import NewsletterSubscription from '../components/NewsletterSubscription'
// import FAQ from '../components/FAQ'
// import Homecontentcard from '../components/Homecontentcard'
// import Homepromo from '../components/Homepromo'
// import ViewerCount from '../components/ViewerCount'


// function Home() {
//     return (
//         <>
//             <Navbar />
//             <Banner />
//             <Homecontentcard />
//             <NewsletterSubscription />
//             <FAQ />
//             <ViewerCount />
//             <Homepromo />
//             <Footer />
//         </>
//     )
// }

// export default Home

// pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NewsletterSubscription from '../components/NewsletterSubscription';
import FAQ from '../components/FAQ';
import Homecontentcard from '../components/Homecontentcard';
import Homepromo from '../components/Homepromo';
import PageViewCounter from '../components/ViewerCount'; // Import the counter

function Home() {
    const pageId = 'home-page'; // Unique ID for the home page

    return (
        <>
            <Navbar />
            <Banner />
            <Homecontentcard />
            <NewsletterSubscription />
            <FAQ />
            <PageViewCounter pageId={pageId} /> {/* Pass the pageId to PageViewCounter */}
            <Homepromo />
            <Footer />
        </>
    );
}

export default Home;
