import React from 'react'
import banner from '/home.png'
import SearchForm from './Searchbar'

function Banner() {
    return (
        <>
            <div className='pt-[80px]'><SearchForm /></div>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-5 dark:bg-slate-900 dark:text-white' >
                <div className='w-full order-2 md:order-1 md:w-1/2 md:mt-10'>
                    <div className='space-y-8 '>
                        <h1 className='text-4xl text-gray-800 dark:text-white md:text-7xl pt-5 font-extrabold' style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500' }}>Gear Up for{" "}<span className='text-purple-600' >Success:</span> Your Ultimate Preparation Hub!</h1>
                        <p className='text-lg'>Simplify complex concepts with our detailed programming notes and ace your interviews with expert-curated questions. Master DSA through comprehensive sheets and hands-on projects, ensuring we meet your learning needs.</p>
                    </div>
                    <a href='#homecontentcard'><button className="border border-purple-500 py-2 rounded-lg text-purple-500 mb-10 px-4 mt-6 group hover:bg-purple-500 hover:text-white">Get Started &rarr;</button></a>
                </div>

                <div className='w-full order-1 md:order-2 md:w-1/2 flex justify-center items-center '>
                    <img src={banner} className="w-full opacity-90" alt='img' />
                </div>
            </div>

        </>
    )
}

export default Banner 