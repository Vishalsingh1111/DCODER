import React from 'react'
import Footer from '../components/Footer'
import Contactsales from './Contactsales'
import Navbar from '../components/Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div>
                <Contactsales />
            </div>
            <Footer />

        </>
    )
}

export default Contact