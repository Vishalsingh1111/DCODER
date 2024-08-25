import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import DSAcontentfetch from './DSAcontentfetch'
import Breadcrumb from '../../Breadcrumb'

function DSA() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <DSAcontentfetch />
            <Footer />
        </>
    )
}

export default DSA