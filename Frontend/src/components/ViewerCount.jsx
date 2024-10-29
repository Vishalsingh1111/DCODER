// import React, { useEffect, useState } from 'react';
// import { baseUrl } from '../Baseurl';
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
//                 const response = await axios.post(`${baseUrl}/viewercount/increment', { pageId }`);
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

// // Usage Example in a Page Component
// const SomePage = () => {
//     const pageId = 'home-page'; // This can be a unique ID for each page

//     return (
//         <div>
//             <h1>Welcome to Some Page</h1>
//             <PageViewCounter pageId={pageId} />
//         </div>
//     );
// };

// export default SomePage;


// components/PageViewCounter.js
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

    return <div>View Count: {viewCount}</div>;
};

export default PageViewCounter;
