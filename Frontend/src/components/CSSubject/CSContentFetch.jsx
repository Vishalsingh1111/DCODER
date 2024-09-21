import React, { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl } from "../../Baseurl";
import GetContent from "../Language/GetContent";
import Skeleton1 from "../../components/Skeleton";


const QUESTIONS_PER_PAGE = 10;

const CScontentfetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSection, setActiveSection] = useState("os");

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/notecontent`);
                const filteredData = res.data.filter(item => item.category === activeSection);
                const sortedData = filteredData.sort((a, b) => a.id - b.id);
                setData(sortedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getBlogs();
    }, [activeSection]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [currentPage]);

    const totalPages = Math.ceil(data.length / QUESTIONS_PER_PAGE);

    const paginatedData = data.slice(
        (currentPage - 1) * QUESTIONS_PER_PAGE,
        currentPage * QUESTIONS_PER_PAGE
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setCurrentPage(1);
    };


    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 5) {

            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {

            for (let i = 1; i <= 2; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }

            if (currentPage > 3) {
                pageNumbers.push(<span key="ellipsis" className="px-4 py-2 mx-1">...</span>);
            }


            if (currentPage > 2 && currentPage < totalPages - 1) {
                pageNumbers.push(
                    <button
                        key={currentPage}
                        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded"
                        onClick={() => handlePageChange(currentPage)}
                    >
                        {currentPage}
                    </button>
                );
            }


            if (currentPage < totalPages - 2) {
                pageNumbers.push(<span key="ellipsis2" className="px-4 py-2 mx-1">...</span>);
            }


            for (let i = totalPages - 1; i <= totalPages; i++) {
                if (i > 2) {
                    pageNumbers.push(
                        <button
                            key={i}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                            onClick={() => handlePageChange(i)}
                        >
                            {i}
                        </button>
                    );
                }
            }
        }

        return pageNumbers;
    };

    return (
        <>
            <div className='flex flex-col sm:flex-row lg:flex-row justify-between  bg-gradient-to-t from-gray-100 to-[#ffffff]  text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                <div className='flex flex-col space-y-4'>
                    <span>Basic Interview Questions.</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>
                <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-[#ffffff] text-sm dark:bg-slate-900 text-red-500 border border-red-500 px-4 py-3 rounded-xl'>Download PDF</button>
                    </a>
                </div>
            </div>

            <section className="max-w-screen-2xl container mx-auto py-12 md:px-20 px-4 relative z-20 overflow-hidden dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">
                <div className="flex justify-center">
                    <button
                        className={`text-lg p-2 ${activeSection === "os" ? "text-red-500 border-2 rounded-md  border-red-500" : "text-gray-500 rounded-md border-2 border-gray-500"}`}
                        onClick={() => handleSectionChange("os")}
                    >
                        Operating System
                    </button>
                    <button
                        className={`text-lg ml-4 p-2 ${activeSection === "cn" ? "text-red-500 border-2 rounded-md border-red-500" : "text-gray-500 rounded-md border-2 border-gray-500"}`}
                        onClick={() => handleSectionChange("cn")}
                    >
                        Computer Network
                    </button>
                </div>



                <div className="mx-auto text-left">
                    <div className="w-full p-0 sm:p-5 md:p-8 lg:p-10 max-w-[930px] mx-auto dark:bg-slate-900 dark:border-none mt-3">
                        {loading ? (
                            <Skeleton1 />
                        ) : (
                            paginatedData.map((item) => (
                                <GetContent key={item.id} item={item} />
                            ))
                        )}
                    </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-10">
                    <button
                        className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {"<<"}
                    </button>

                    {renderPageNumbers()}

                    <button
                        className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {">>"}
                    </button>
                </div>
            </section>
        </>
    );
};

export default CScontentfetch;
