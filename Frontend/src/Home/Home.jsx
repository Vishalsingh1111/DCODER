import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import NewsletterSubscription from '../components/NewsletterSubscription'
import FAQ from '../components/FAQ'
import Homecontentcard from '../components/Homecontentcard'
import Homepromo from '../components/Homepromo'
import Whatweoffer from '../components/Whatweoffer'


function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Homecontentcard />
            <NewsletterSubscription />
            <Whatweoffer />
            <FAQ />
            <Homepromo />
            <Footer />
        </>
    )
}

export default Home