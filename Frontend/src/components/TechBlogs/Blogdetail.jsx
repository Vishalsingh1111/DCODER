
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import List from '../Projects/list';
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


    const increaseThumbsUp = () => {
        setThumbsUpCount(thumbsUpCount + 1);
    };

    const increaseThumbsDown = () => {
        setThumbsDownCount(thumbsDownCount + 1);
    };

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-[50px] mx-auto max-w-screen-2xl md:px-20 px-4 py-5">
                <div className="lg:col-span-2 w-full p-3 sm:p-5 md:p-5 lg:p-10 max-w-[830px] mx-auto p-10 shadow bg-white rounded-2xl dark:bg-slate-800 dark:border-none mt-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <h2 className="text-2xl font-semibold mb-4 sm:mb-0">{item.header}</h2>

                    </div>

                    {item.code && (
                        <div className="my-5 mx-auto text-left content-left">
                            <span className="mb-2">Code:</span><br />
                            <CodeSnippet codeString={item.code} />
                        </div>
                    )}
                    {item.explanation && (
                        <div className="mt-4">
                            <span className="mb-2 text-bold text-justify text-red-500">Explanation:</span><br />
                            <ul className="py-2 list-disc ml-4">
                                {item.explanation.split('\n').map((line, index) => (
                                    <li className="py-1" key={index}>{line.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="flex mt-4 items-center text-xl sm:ml-auto">
                        <button onClick={increaseThumbsUp} className="flex items-center text-gray-700 dark:text-gray-300 mr-4">
                            <FaThumbsUp className="mr-1" style={{ color: 'blue' }} /> {thumbsUpCount}
                        </button>
                        <button onClick={increaseThumbsDown} className="flex items-center text-gray-700 dark:text-gray-300">
                            <FaThumbsDown className="mr-1" style={{ color: 'red' }} /> {thumbsDownCount}
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-auto px-7 py-5 rounded-xl mx-auto md:ml-20 bg-transparent h-auto">
                    <div className="md:sticky md:top-20">
                        <h1 className='text-red-500 mb-5 text-2xl text-center md:text-left'>Recent Project</h1>
                        <div className="flex flex-col justify-center text-left space-y-2">
                            {items
                                .filter(blogItem => blogItem.id.toString() !== id)
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 10)
                                .map(blogItem => (
                                    <div key={blogItem.id} className="mb-2">
                                        <List item={blogItem} onClick={() => handleCardClick(blogItem.id)} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20'>
                <a href='/Technicalblog'><button className="btn bg-blue-500 text-lg text-white hover:bg-blue-600">Show More</button></a>
            </div>
            <div className="flex justify-center mt-4">
                <Commentbox />
            </div>
            <Footer />
        </>
    );
};

export default BlogDetail;
