import React, { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl } from "../../../Baseurl";
import GetContent from "../GetContent";
import Skeleton1 from "../../Skeleton";

const QUESTIONS_PER_PAGE = 10;

const PythonContentFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/notecontent`);
                const filteredData = res.data.filter(item => item.category === "py");
                setData(filteredData);
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
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}
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
        <section className="max-w-screen-2xl container mx-auto py-12 md:px-20 px-4 relative z-20 overflow-hidden dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">

            <div className='text-3xl text-purple-500 pb-10 text-center'>
                <span>Basic Interview Questions – Python</span>
            </div>

            <div className="mx-auto text-left">
                <div className="w-full lg:px-20 max-w-screen-lg mx-auto shadow bg-white rounded-2xl dark:bg-slate-800 py-5 mb-10">
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
                    Previous
                </button>

                {renderPageNumbers()}

                <button
                    className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default PythonContentFetch;

