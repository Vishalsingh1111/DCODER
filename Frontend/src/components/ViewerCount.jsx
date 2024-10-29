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
        <div className="flex justify-center w-full items-center space-x-10 my-10 p-20 bg-gradient-to-t from-[#ffffff] to-[#ffffff]  dark:from-slate-800 rounded-lg shadow max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
                <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.5c3.75 0 7.5 3 9 4.5a16.5 16.5 0 01-18 0c1.5-1.5 5.25-4.5 9-4.5z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 12c3.75 0 7.5 3 9 4.5a16.5 16.5 0 01-18 0c1.5-1.5 5.25-4.5 9-4.5z"
                    />
                </svg>

            </div>
            <div>
                <span className="text-3xl text-red-500 font-semibold">Total Viewers Count: {viewCount}</span>
            </div>
        </div>
    );
};

export default PageViewCounter;
