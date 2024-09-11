// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Sheetpage from '../components/Sriversdecomponents/Sheetpage'
// import CompayWise from '../components/CompanyWise/CompanyMain'
// import Breadcrumb from '../components/Breadcrumb'


// function Sheet() {
//     return (
//         <>
//             <Navbar />
//             <Breadcrumb />

//             <Sheetpage />
//             <CompayWise />
//             <Footer />
//         </>
//     )
// }

// export default Sheet

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

            <div className="text-center mb-4">
                <button
                    className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded m-2"
                    onClick={() => handleButtonClick('Sheetpage')}
                >
                    Updated DSA Sheet
                </button>
                <button
                    className="border-2 border-green-600 text-green-600 px-4 py-2 rounded m-2"
                    onClick={() => handleButtonClick('CompanyWise')}
                >
                    Company Wise Sheet
                </button>
            </div>
            {view === 'Sheetpage' && <Sheetpage />}
            {view === 'CompanyWise' && <CompanyWise />}

            <Footer />
        </>
    );
}

export default Sheet;
