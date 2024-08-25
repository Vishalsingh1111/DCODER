import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import DbmsContentfetch from './DbmsContentFetch'
import Breadcrumb from '../../Breadcrumb'

function Dbms() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <DbmsContentfetch />
            <Footer />
        </>
    )
}

export default Dbms;