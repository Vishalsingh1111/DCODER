import React from 'react';
import Navbar from '../Navbar';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer'
import CSContentFetch from '../CSSubject/CSContentFetch';

function CSPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <CSContentFetch />
            <Footer />
        </>
    )
}

export default CSPage