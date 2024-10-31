import React, { useState, useEffect, useRef } from "react";
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
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown

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

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 px-5 lg:px-20'>
                <div className='flex flex-col space-y-2'>
                    <span>Basic Interview Questions.</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>

                <div className="flex justify-center items-center mb-4 w-[250px] md:w-[500px] md:mt-0 mt-5">
                    <div className="relative w-full" ref={dropdownRef}>
                        <button
                            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white dark:bg-slate-900 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {activeSection === "os" ? "Operating System" : "Computer Network"}
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-slate-800">
                                <div className="py-1 border rounded-lg" role="menu" aria-orientation="vertical">
                                    <button
                                        className={`block w-full text-left px-4 py-3 border-b text-sm ${activeSection === "os" ? "text-red-500 bg-gray-100 dark:bg-slate-700" : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"}`}
                                        onClick={() => {
                                            handleSectionChange("os");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Operating System
                                    </button>
                                    <button
                                        className={`block w-full text-left px-4 py-3 text-sm ${activeSection === "cn" ? "text-red-500 bg-gray-100 dark:bg-slate-700" : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700"}`}
                                        onClick={() => {
                                            handleSectionChange("cn");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        Computer Network
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='mt-4 sm:mt-0'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-white text-sm dark:bg-slate-900 text-red-500 border border-red-500 px-4 py-3 rounded-md'>Download PDF</button>
                    </a>
                </div>
            </div>

            <section className="max-w-screen-2xl container mx-auto py-5 md:px-10 px-4  dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">
                <div className="mx-auto text-left">
                    <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 max-w-[950px] mx-auto border-t md:shadow-sm md:shadow-black/30 rounded-xl bg-white dark:bg-slate-800 dark:border-none mt-3">
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
                <div className="mt-6 flex justify-center space-x-2">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 text-black disabled:opacity-50"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    {renderPageNumbers()}
                    <button
                        className="px-4 py-2 rounded bg-gray-200 text-black disabled:opacity-50"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
};

export default CScontentfetch;
