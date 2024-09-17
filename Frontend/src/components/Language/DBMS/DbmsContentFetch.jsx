import React, { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl } from "../../../Baseurl";
import GetContent from "../GetContent";
import Skeleton1 from "../../Skeleton";
import TechAICard from "../../TechAICard";

const QUESTIONS_PER_PAGE = 10;

const DbmsContentFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/notecontent`);
                const filteredData = res.data.filter(item => item.category === "dbms");
                const sortedData = filteredData.sort((a, b) => a.id - b.id);
                setData(sortedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

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

    // Generate pagination with first two pages, last two pages, and ellipsis in between
    const renderPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 5) {
            // If there are 5 or fewer pages, show them all
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Always show the first two pages
            for (let i = 1; i <= 2; i++) {
                pageNumbers.push(
                    <button
                        key={i}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }

            // Show ellipsis if there are pages between 2 and the second-to-last page
            if (currentPage > 3) {
                pageNumbers.push(<span key="ellipsis" className="px-4 py-2 mx-1">...</span>);
            }

            // Show the current page if it's in the middle range
            if (currentPage > 2 && currentPage < totalPages - 1) {
                pageNumbers.push(
                    <button
                        key={currentPage}
                        className="px-4 py-2 mx-1 bg-blue-700 text-white rounded"
                        onClick={() => handlePageChange(currentPage)}
                    >
                        {currentPage}
                    </button>
                );
            }

            // Show ellipsis if there are pages between the current page and the last two pages
            if (currentPage < totalPages - 2) {
                pageNumbers.push(<span key="ellipsis2" className="px-4 py-2 mx-1">...</span>);
            }

            // Always show the last two pages
            for (let i = totalPages - 1; i <= totalPages; i++) {
                if (i > 2) {
                    pageNumbers.push(
                        <button
                            key={i}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}
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
            <div className='flex flex-col sm:flex-row lg:flex-row justify-between  bg-gradient-to-t from-[#dfe4f5] to-[#f2f4fb] text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                <div className='flex flex-col space-y-4'>
                    <span>SBasic Interview Questions – Database Management System (DBMS).</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>
                <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-white text-sm dark:bg-slate-900  text-red-500 border border-red-500 px-5 py-3 rounded-xl'>Download PDF</button>
                    </a>
                </div>
            </div>

            <section className="max-w-screen-2xl container mx-auto pb-12 px-4 relative z-20 overflow-hidden dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">
                <div className="mx-auto text-left">
                    <div className="w-full p-0 sm:p-2 max-w-[850px] mx-auto dark:bg-slate-900 dark:border-none mt-3">
                        {loading ? (
                            <Skeleton1 />
                        ) : (
                            paginatedData.map((item) => (
                                <GetContent key={item.id} item={item} />
                            ))
                        )}
                    </div>
                    <div>
                        <TechAICard />
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

export default DbmsContentFetch;

