import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Ccontentfetch from './Ccontentfetch'
import Breadcrumb from '../../Breadcrumb'

function C() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <Ccontentfetch />
            <Footer />
        </>
    )
}

export default C