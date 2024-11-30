import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sheetpage from '../components/Sriversdecomponents/Sheetpage';
import CompanyWise from '../components/CompanyWise/CompanyMain';
import Breadcrumb from '../components/Breadcrumb';
import Searchbar from '../components/Searchbar';

function Sheet() {
    const [view, setView] = useState('Sheetpage');

    const handleButtonClick = (viewName) => {
        setView(viewName);
    };

    return (
        <>
            <Navbar />
            <Breadcrumb />


            <div className='flex flex-col sm:flex-row lg:flex-row justify-between  text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                <div className='flex flex-col space-y-4'>
                    <span>SDE SHEET Most Asked Problems.</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>
                <div className='lg:w-[580px] mr-2'>
                    <Searchbar />
                </div>
                <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-white text-sm text-red-500 border dark:bg-slate-900  border-red-500 px-5 py-3 rounded-md'>Download PDF</button>
                    </a>
                </div>
            </div>
            <Sheetpage />
            <Footer />
        </>
    );
}

export default Sheet;
