// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ContestCard from './ContestCard';
// import Breadcrumb from '../Breadcrumb';
// import { baseUrl } from "../../Baseurl";
// import Skeleton1 from "../Skeleton";

// const Contest = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const getBlogs = async () => {
//             try {
//                 const res = await axios.get(`${baseUrl}/contestsol`);
//                 const filteredData = res.data.filter(item => item.category === "dsa");
//                 setData(filteredData);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             }
//         };
//         getBlogs();
//     }, []);

//     const handleCardClick = (id) => {
//         navigate(`/detail/${id}`);
//     };



//     return (
//         <>
//             <Breadcrumb />
//             {loading ? (
//                 <Skeleton1 />
//             ) : (
//                 <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto md:px-20 px-4 py-5 pt-10">
//                     {data.map(item => (
//                         <ContestCard key={item.id} item={item} onClick={() => handleCardClick(item.id.toString())} />
//                     ))}
//                 </div>)}
//         </>
//     );
// };

// export default Contest;

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContestCard from './ContestCard';
import Breadcrumb from '../Breadcrumb';
import { baseUrl } from "../../Baseurl";
import Skeleton1 from "../Skeleton";

const Contest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/contestsol`);
                const filteredData = res.data.filter(item => item.category === "dsa");
                setData(filteredData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <Breadcrumb />
            {loading ? (
                <Skeleton1 />
            ) : (
                <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto md:px-20 px-4 py-5 pt-10">
                    {data.map(item => (
                        <ContestCard key={item.id} item={item} onClick={() => handleCardClick(item.id.toString())} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Contest;
