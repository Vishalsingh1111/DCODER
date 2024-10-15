// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ContestCard from './ContestCard';
// import Breadcrumb from '../Breadcrumb';
// import { baseUrl } from "../../Baseurl";
// import Skeleton1 from "../Skeleton";

// const Contest = () => {
//     const [data, setData] = useState([]); // Initialize as empty array
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const getContest = async () => {
//             try {
//                 const res = await axios.get(`${baseUrl}/contestsol`);
//                 const responseData = Array.isArray(res.data) ? res.data : [];
//                 setData(responseData);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false); // Ensure loading stops regardless of success or error
//             }
//         };
//         getContest();
//     }, []);

//     const handleCardClick = (id) => {
//         navigate(`/contestdetail/${id}`);
//     };

//     return (
//         <>
//             <Breadcrumb />
//             {loading ? (
//                 <Skeleton1 />
//             ) : (
//                 <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto md:px-20 px-4 py-5 pt-10">
//                     {data.length > 0 ? (
//                         data.map((item) => (
//                             <ContestCard key={item.id} item={item} onClick={() => handleCardClick(item.id.toString())} />
//                         ))
//                     ) : (
//                         <p>No contests found.</p>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default Contest;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Contestcard from './Contestcard';
import Breadcrumb from '../Breadcrumb';
import SearchForm from '../Searchbar';
import { baseUrl } from '../../Baseurl';

const Contest = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/contestsol`);
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching contests:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <p>Loading contests...</p>;
    }

    return (
        <>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-8 px-8">
                {items.map((item) => (
                    <Contestcard
                        key={item.id}
                        item={item}
                        onClick={() => window.location.href = `/contestdetail/${item.id}`}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Contest;
