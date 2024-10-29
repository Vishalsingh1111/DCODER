// import React, { useEffect, useState } from 'react';
// import { baseUrl } from '../Baseurl'; // Ensure this is the correct path
// import axios from 'axios';

// const PageViewCounter = ({ pageId }) => {
//     const [viewCount, setViewCount] = useState(0);

//     useEffect(() => {
//         // Fetch the current view count
//         const fetchViewCount = async () => {
//             try {
//                 const response = await axios.get(`${baseUrl}/viewercount/${pageId}`);
//                 setViewCount(response.data.count);
//             } catch (error) {
//                 console.error("Error fetching view count:", error);
//             }
//         };

//         // Increment the view count when component mounts
//         const incrementViewCount = async () => {
//             try {
//                 const response = await axios.post(`${baseUrl}/viewercount/increment`, { pageId });
//                 setViewCount(response.data.count);
//             } catch (error) {
//                 console.error("Error incrementing view count:", error);
//             }
//         };

//         fetchViewCount();
//         incrementViewCount();
//     }, [pageId]);

//     return <div>View Count: {viewCount}</div>;
// };

// export default PageViewCounter;

import React, { useEffect, useState } from 'react';
import { baseUrl } from '../Baseurl'; // Ensure this is the correct path
import axios from 'axios';

const PageViewCounter = ({ pageId }) => {
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        // Fetch the current view count
        const fetchViewCount = async () => {
            try {
                const response = await axios.get(`${baseUrl}/viewercount/${pageId}`);
                setViewCount(response.data.count);
            } catch (error) {
                console.error("Error fetching view count:", error);
            }
        };

        // Increment the view count when component mounts
        const incrementViewCount = async () => {
            try {
                const response = await axios.post(`${baseUrl}/viewercount/increment`, { pageId });
                setViewCount(response.data.count);
            } catch (error) {
                console.error("Error incrementing view count:", error);
            }
        };

        fetchViewCount();
        incrementViewCount();
    }, [pageId]);

    return (
        <div className="flex flex-col justify-center w-full items-center border-gray-400 dark:border-gray-600  my-10 p-20 dark:from-slate-800 border-b border-t max-w-6xl mx-auto">
            {/* bg-gradient-to-t from-[#ffffff] to-[#ffffff]  */}

            <div className='w-full text-center'>
                <span className="md:text-4xl text-lg dark:text-white text-gray-500 font-semibold">Total User Visited :</span>
            </div>
            <div className='w-full text-center mt-8'>
                <span className="md:text-6xl text-lg text-red-500 font-semibold">{viewCount}</span>
            </div>
        </div>
    );
};

export default PageViewCounter;
