import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import Commentbox from '../Commentbox';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';
import SearchForm from '../Searchbar';
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [thumbsUpCount, setThumbsUpCount] = useState(0);
    const [thumbsDownCount, setThumbsDownCount] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [showCode, setShowCode] = useState(false);

    useEffect(() => {
        const getBlogData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/blog`);
                const foundItem = res.data.find(item => item.id.toString() === id);
                setItem(foundItem);
                setItems(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        getBlogData();
    }, [id]);

    if (loading) {
        return (
            <>
                <Navbar />
                <Breadcrumb />
                <SearchForm />
                <Skeleton1 />
                <Footer />
            </>
        );
    }

    const increaseThumbsUp = () => setThumbsUpCount(thumbsUpCount + 1);
    const increaseThumbsDown = () => setThumbsDownCount(thumbsDownCount + 1);

    const handleCardClick = (id) => navigate(`/detail/${id}`);

    const handleShowMore = () => {
        if (visibleCount + 5 >= items.length) {
            setVisibleCount(items.length);
        } else {
            setVisibleCount(visibleCount + 3);
        }
    };

    const handleHide = () => setVisibleCount(3);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    return (
        <>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <div className="pt-[50px] mx-auto max-w-screen-2xl md:px-20 px-4 py-5" style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: '500' }}>
                <div className="w-full p-3 sm:p-5 md:p-8 lg:p-10 max-w-[930px] mx-auto shadow bg-white rounded-2xl dark:bg-slate-800 dark:border-none mt-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <h2 className="text-2xl font-semibold mb-4 sm:mb-0">{item.header}</h2>
                    </div>

                    {item.code && (
                        <div className="my-5 mx-auto text-left">
                            <button
                                onClick={() => setShowCode(!showCode)}
                                className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            >
                                {showCode ? "Hide Code" : "Show Code"}
                            </button>
                            {showCode && <CodeSnippet codeString={item.code} />}
                        </div>
                    )}

                    {item.explanation && (
                        <div className="mt-4">
                            <span className="text-2xl font-semibold text-gray-500">Explanation:</span>
                            <ul className="py-2 list-disc ml-4">
                                {item.explanation.split('\n').map((line, index) => (
                                    <li className="py-1 text-xl" key={index}>{line.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex mt-4 items-center text-xl">
                        <button onClick={increaseThumbsUp} className="flex items-center text-gray-700 dark:text-gray-300 mr-4">
                            <FaThumbsUp className="mr-1 text-blue-500" /> {thumbsUpCount}
                        </button>
                        <button onClick={increaseThumbsDown} className="flex items-center text-gray-700 dark:text-gray-300">
                            <FaThumbsDown className="mr-1 text-red-500" /> {thumbsDownCount}
                        </button>
                    </div>
                </div>

                <div className="pt-[80px] mx-auto max-w-[1080px] md:px-20 px-4 py-5">
                    <div className="md:sticky md:top-20">
                        <h1 className="text-red-500 mb-8 text-4xl font-semibold text-center">Recent Uploaded Blogs</h1>
                        <div className="grid grid-cols-1 gap-4">
                            {items
                                .filter(blogItem => blogItem.id.toString() !== id)
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, visibleCount)
                                .map(blogItem => (
                                    <div key={blogItem.id} className="flex flex-col lg:flex-row items-center group justify-between bg-white shadow dark:bg-slate-800 rounded-lg p-4 md:p-8 cursor-pointer space-y-4 lg:space-y-0 lg:space-x-8">
                                        <div className="flex-1 text-left" onClick={() => handleCardClick(blogItem.id)}>
                                            <h3 className="text-2xl">{blogItem.header}</h3>
                                            <p className="text-lg text-gray-500 mt-2">{truncateText(blogItem.explanation, 150)}</p>

                                            <p className='inline-block rounded-md text-red-500 mt-3 border p-2 border-red-600 group-hover:bg-red-500 group-hover:text-white transition duration-200'>
                                                Read more
                                            </p>
                                        </div>
                                    </div>


                                ))}
                        </div>

                        <div className="text-center mt-6">
                            {visibleCount < items.length ? (
                                <button onClick={handleShowMore} className="bg-red-500 text-lg text-white hover:bg-red-600 py-2 px-4 rounded">Show More</button>
                            ) : (
                                <button onClick={handleHide} className="bg-red-500 text-lg text-white hover:bg-red-600 py-2 px-4 rounded">Close</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <Commentbox />
            </div>

            <Footer />
        </>
    );
};

export default BlogDetail;
