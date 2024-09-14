import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sheetpage from '../components/Sriversdecomponents/Sheetpage';
import CompanyWise from '../components/CompanyWise/CompanyMain';
import Breadcrumb from '../components/Breadcrumb';

function Sheet() {
    const [view, setView] = useState('Sheetpage');

    const handleButtonClick = (viewName) => {
        setView(viewName);
    };

    return (
        <>
            <Navbar />
            <Breadcrumb />

            {view === 'Sheetpage' && (
                <div className='flex flex-col sm:flex-row lg:flex-row justify-between  bg-gradient-to-t from-[#fef3f3] to-white text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                    <div className='flex flex-col space-y-4'>
                        <span>SDE SHEET Most Asked Problems.</span>
                        <span className='text-sm'>Last Updated: August 8, 2024</span>
                    </div>
                    <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                        <a href="path-to-your-file.pdf" download>
                            <button className='bg-white text-sm text-red-500 border dark:bg-slate-900  border-red-500 px-5 py-3 rounded-xl'>Download PDF</button>
                        </a>
                    </div>
                </div>

            )}

            {view === 'CompanyWise' && (
                <div className='flex flex-col sm:flex-row lg:flex-row justify-between bg-gradient-to-t from-[#fef3f3] to-white text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                    <div className='flex flex-col space-y-4'>
                        <span>SDE SHEET Based on Companies.</span>
                        <span className='text-sm'>Last Updated: August 18, 2024</span>
                    </div>
                    <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                        <a href="path-to-your-file.pdf" download>
                            <button className='bg-white text-sm text-red-500 border dark:bg-slate-900 border-red-500 px-5 py-3 rounded-xl'>Download PDF</button>
                        </a>
                    </div>
                </div>
            )}

            <div className="lg:flex justify-between lg:mx-1">
                <div className="bg-[rgb(255,255,255)] dark:border-none dark:bg-slate-900 text-center lg:flex lg:flex-col lg:w-[17%] lg:border-t lg:mt-[15px] lg:shadow-md lg:rounded-xl lg:max-h-[500px] lg:sticky lg:top-20 lg:left-10 lg:mb-20">
                    <button
                        className={`text-sm dark:text-white lg:border-b-2 dark:border-none text-black text-left pl-5 border-gray-200 py-4 ${view === 'Sheetpage' ? 'text-red-500 dark:text-red-500' : ''}`}
                        onClick={() => handleButtonClick('Sheetpage')}
                    >
                        {"Updated DSA Sheet "} &rarr;
                    </button>
                    <button
                        className={`text-sm dark:text-white  lg:border-b-2 dark:border-none  text-black text-left pl-5 border-gray-200 py-4 ${view === 'CompanyWise' ? 'text-red-500 dark:text-red-500' : ''}`}
                        onClick={() => handleButtonClick('CompanyWise')}
                    >
                        {"Company Wise Sheet"} &rarr;
                    </button>
                    <button
                        className={`text-sm dark:text-white  lg:border-b-2 dark:border-none text-black text-left pl-5 border-gray-200 py-4 ${view === 'Top60FANG' ? 'text-red-500 dark:text-red-500' : ''}`}
                        onClick={() => handleButtonClick('Top60FANG')}
                    >
                        {"Top-60 FANG"} &rarr;
                    </button>
                </div>
                <div className="lg:w-[80%]" style={{ marginLeft: '0px' }}>
                    {view === 'Sheetpage' && <Sheetpage />}
                    {view === 'CompanyWise' && <CompanyWise />}
                    {view === 'Top60FANG' && <div>Top-60 FANG content here</div>}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Sheet;
