import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Cppcontentfetch from './Cppcontentfetch'
import Breadcrumb from '../../Breadcrumb'

function Cpp() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <Cppcontentfetch />
            <Footer />
        </>
    )
}

export default Cpp