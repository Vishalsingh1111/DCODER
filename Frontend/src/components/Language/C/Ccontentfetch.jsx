import React, { useState, useEffect } from "react";
import axios from 'axios';
import Searchbar from '../../Searchbar'
import DSAaccordion from "../Accordion";
import { baseUrl } from "../../../Baseurl";

const Ccontentfetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/notecontent`);
                const filteredData = res.data.filter(item => item.category === "c");
                setData(filteredData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    return (
        <section className="max-w-screen-2xl bg-gray-100 container mx-auto pb-12 md:px-20 px-4 relative z-20 overflow-hidden dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">
            <div className="mb-10"><Searchbar /></div>
            <div className='text-3xl text-red-500 pb-10 text-center'><span>Conceptual Coding Interview Questions</span></div>
            <div className="mx-auto text-left">
                <div className="w-full px-4 max-w-screen-lg mx-auto shadow bg-white rounded-2xl dark:bg-slate-800 py-5 mb-10">
                    {
                        data.map((item) => (
                            <DSAaccordion key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default Ccontentfetch;
