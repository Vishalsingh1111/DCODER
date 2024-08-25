import React from 'react'
import Navbar from '../components/Navbar'
import Prolanpage from '../components/Language/Prolangpage'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

function Contents() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <Prolanpage />
            <Footer />
        </>
    )
}

export default Contents