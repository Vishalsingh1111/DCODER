import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Pyhtoncontentfetch from './PythonContentFetch'
import Breadcrumb from '../../Breadcrumb'

function Python() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <Pyhtoncontentfetch />
            <Footer />
        </>
    )
}

export default Python