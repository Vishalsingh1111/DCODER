

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';
import SearchForm from '../Searchbar';
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(null);
    const [activeAccordions, setActiveAccordions] = useState({});
    const [thumbsUpCount, setThumbsUpCount] = useState(0);
    const [thumbsDownCount, setThumbsDownCount] = useState(0);
    const [showHtmlCode, setShowHtmlCode] = useState(false);
    const [showCssCode, setShowCssCode] = useState(false);
    const [showJsCode, setShowJsCode] = useState(false);
    const [showOtherCode, setShowOtherCode] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3); // Number of recent projects to show

    useEffect(() => {
        const getProjectData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/project`);
                const foundItem = res.data.find(item => item.id.toString() === id);
                setItem(foundItem);
                setItems(res.data);
                setLoading(false);
                setMainImage(foundItem?.image1);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getProjectData();
    }, [id]);

    const handleCardClick = (id) => {
        navigate(`/projectdetail/${id}`);
    };

    const renderText = (text) => {
        const parts = text.split(/(<red>|<\/red>|<br\s*\/?>|<bg>|<\/bg>|<li>|<\/li>)/g).filter(Boolean);
        let isred = false;
        let isBg = false;
        let isLi = false;
        let bgContent = [];
        let liContent = [];

        return parts.map((part, index) => {
            if (part === '<red>') {
                isred = true;
                return null;
            } else if (part === '</red>') {
                isred = false;
                return null;
            } else if (part === '<bg>') {
                isBg = true;
                bgContent = [];
                return null;
            } else if (part === '</bg>') {
                isBg = false;
                return (
                    <span key={index} className="inline-block text-red-500 dark:text-white">
                        {bgContent}
                    </span>
                );
            } else if (part === '<li>') {
                isLi = true;
                liContent = [];
                return null;
            } else if (part === '</li>') {
                isLi = false;
                return <li key={index} className="list-disc ml-4 py-1">{liContent}</li>;
            } else if (part.match(/<br\s*\/?>/)) {
                return <br key={index} />;
            } else {
                const content = (
                    <span key={index} className={isred ? "text-black text-xl dark:text-white" : ""}>
                        {part.trim()}
                    </span>
                );
                if (isBg) {
                    bgContent.push(content);
                    return null;
                }
                if (isLi) {
                    liContent.push(content);
                    return null;
                }
                return content;
            }
        }).filter(Boolean);
    };

    const toggleAccordion = (key) => {
        setActiveAccordions((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const increaseThumbsUp = () => setThumbsUpCount(thumbsUpCount + 1);
    const increaseThumbsDown = () => setThumbsDownCount(thumbsDownCount + 1);

    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    };

    if (loading) {
        return (
            <div>
                <Navbar />
                <Breadcrumb />
                <SearchForm />
                <Skeleton1 />
                <Footer />
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <div className="mx-auto max-w-screen-xl text-gray-600 dark:text-white md:px-20 px-4 py-5" style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: '500' }}>
                <div className="w-full max-w-4xl shadow mx-auto content-justify p-3 sm:p-2 md:p-10 bg-white rounded-2xl dark:bg-slate-800 dark:border-none ">
                    <h2 className="text-3xl text-center font-semibold mb-4">{item.header}</h2>
                    {mainImage && (
                        <div className="py-5 md:px-10 text-center">
                            <img src={mainImage} alt="Description of main image" className="max-w-full mx-auto" />
                            <div className="mt-5">
                                <span className="text-2xl text-red-600">Title: {item.figtitle}</span>
                            </div>
                        </div>
                    )}
                    <div className="flex py-5 md:px-10 text-center justify-center space-x-4 bg-base-100 dark:bg-transparent overflow-auto rounded">
                        {item.image1 && <img src={item.image1} alt="Description of image 1" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image1)} />}
                        {item.image2 && <img src={item.image2} alt="Description of image 2" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image2)} />}
                        {item.image3 && <img src={item.image3} alt="Description of image 3" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image3)} />}
                        {item.image4 && <img src={item.image4} alt="Description of image 4" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image4)} />}
                    </div>

                    {['text'].map((key, index) => (
                        item[key] && (
                            <div key={index} className="py-3 text-lg text-justify mt-5 leading-relaxed text-body-color dark:text-dark-6">
                                <h1 className="text-black text-xl mb-2">Introduction:</h1>
                                {renderText(item[key])}
                            </div>
                        )
                    ))}
                    {['statement'].map((key, index) => (
                        item[key] && (
                            <div key={index} className="py-3 text-lg mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </div>
                        )
                    ))}
                    {['substatement1'].map((key, index) => (
                        item[key] && (
                            <div key={index} className="py-3 text-lg mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </div>
                        )
                    ))}
                    {item.code1 && (
                        <div className="my-5 mx-auto text-left ">
                            <button
                                onClick={() => setShowHtmlCode(!showHtmlCode)}
                                className="mb-2 text-sm bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
                            >
                                {showHtmlCode ? "Hide Code" : "Show HTML Code"}
                            </button>
                            {showHtmlCode && <CodeSnippet codeString={item.code1} />}
                        </div>
                    )}
                    {item.code2 && (
                        <div className="my-5 mx-auto text-left">
                            <button
                                onClick={() => setShowCssCode(!showCssCode)}
                                className="mb-2 text-sm bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
                            >
                                {showCssCode ? "Hide Code" : "Show CSS Code"}
                            </button>
                            {showCssCode && <CodeSnippet codeString={item.code2} />}
                        </div>
                    )}
                    {item.code3 && (
                        <div className="my-5 mx-auto text-left">
                            <button
                                onClick={() => setShowJsCode(!showJsCode)}
                                className="mb-2 text-sm bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
                            >
                                {showJsCode ? "Hide Code" : "Show JavaScript Code"}
                            </button>
                            {showJsCode && <CodeSnippet codeString={item.code3} />}
                        </div>
                    )}
                    {item.code4 && (
                        <div className="my-5 mx-auto text-left">
                            <button
                                onClick={() => setShowOtherCode(!showOtherCode)}
                                className="mb-4 text-sm bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600"
                            >
                                {showOtherCode ? "Hide Code" : "Show Other Code"}
                            </button>
                            {showOtherCode && <CodeSnippet codeString={item.code4} />}
                        </div>
                    )}

                    {['statement2'].map((key, index) => (
                        item[key] && (
                            <p key={index} className="pt-3 text-lg mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </p>
                        )
                    ))}
                    {['feature'].map((key, index) => (
                        item[key] && (
                            <p key={index} className="text-lg text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </p>
                        )
                    ))}
                    {['substatement2'].map((key, index) => (
                        item[key] && (
                            <p key={index} className="py-3 text-lg text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </p>
                        )
                    ))}

                    {['explain'].map((key, index) => (
                        item[key] && (
                            <p key={index} className=" text-lg text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </p>
                        )
                    ))}

                    {['note'].map((key, index) => (
                        item[key] && (
                            <p key={index} className=" text-lg text-justify leading-relaxed text-body-color dark:text-dark-6">
                                {renderText(item[key])}
                            </p>
                        )
                    ))}
                    <div className='mt-10 text-center flex justify-start space-x-5'>
                        <Link to={item.link1} className='px-2 py-2 bg-red-500 text-sm rounded group hover:bg-red-900 text-white'>Click to Download from GitHub</Link>
                        <Link to={item.link2} className='px-2 py-2 bg-red-500 text-sm rounded group hover:bg-red-900 text-white'>Watch Live Project</Link>
                    </div>
                </div>

                <div className="my-20 mx-auto max-w-screen-lg ">
                    <h2 className="text-4xl font-semibold text-center mb-8 text-red-500">Recent Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                        {items
                            .filter(item => item.id !== parseInt(id))
                            .slice(0, visibleCount)
                            .map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg space-y-2 dark:bg-slate-800 dark:text-white"
                                    onClick={() => handleCardClick(project.id)}
                                >
                                    <img src={project.image1} alt="Project" className="w-full h-48 object-cover rounded-t" />
                                    <h3 className="mt-2 text-lg font-semibold">{truncateText(project.header, 40)}</h3>
                                    <p className="text-gray-600">{truncateText(project.text, 60)}</p>
                                    <p className='text-red-500'>Read More .. </p>
                                </div>
                            ))}
                    </div>
                    {items.filter(item => item.id !== parseInt(id)).length > visibleCount && (
                        <div className="text-center my-5">
                            <button
                                onClick={() => setVisibleCount(visibleCount + 3)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetail;
