import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import List from '../Projects/list';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';
import SearchForm from '../Searchbar';
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(null);
    const [activeAccordions, setActiveAccordions] = useState({});

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
        let isRed = false;
        let isBg = false;
        let isLi = false;
        let bgContent = [];
        let liContent = [];

        return parts.map((part, index) => {
            if (part === '<red>') {
                isRed = true;
                return null;
            } else if (part === '</red>') {
                isRed = false;
                return null;
            } else if (part === '<bg>') {
                isBg = true;
                bgContent = [];
                return null;
            } else if (part === '</bg>') {
                isBg = false;
                return (
                    <span key={index} className="inline-block bg-red-200 rounded py-1 px-2 dark:bg-slate-700 dark:text-white">
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
                    <span key={index} className={isRed ? "text-red-500" : ""}>
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

    if (loading) {
        return <div>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <Skeleton1 />
            <Footer />
        </div>;
    }



    return (
        <>
            <Navbar />
            <Breadcrumb />
            <SearchForm />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-[50px] mx-auto max-w-screen-2xl md:px-20 px-4 py-5">
                <div className="lg:col-span-2 w-full">

                    <div className="w-full max-w-screen-xl mx-auto p-10 bg-white rounded-2xl dark:bg-slate-800 dark:border-none">
                        <h2 className="text-3xl text-center font-semibold mb-4">{item.header}</h2>
                        {mainImage && (
                            <div className="py-5 md:px-10 text-center">
                                <img src={mainImage} alt="Description of main image" className="max-w-full mx-auto" />
                                <div className="mt-5">
                                    <span className="text-2xl text-red-600">Title: {item.figtitle}</span>
                                </div>
                            </div>
                        )}
                        <div className="flex py-5 md:px-10 text-center justify-center space-x-4 bg-base-100 overflow-auto rounded ">
                            {item.image1 && <img src={item.image1} alt="Description of image 1" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image1)} />}
                            {item.image2 && <img src={item.image2} alt="Description of image 2" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image2)} />}
                            {item.image3 && <img src={item.image3} alt="Description of image 3" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image3)} />}
                            {item.image4 && <img src={item.image4} alt="Description of image 4" className="max-w-[25%] flex-1 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={() => setMainImage(item.image4)} />}
                        </div>

                        {['text'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="py-3 text-base text-justify mt-5 leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        {['statement'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="py-3 text-xl mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        {['substatement1'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="py-3 text-base mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        {item.code1 && (
                            <div className="my-5 mx-auto text-left">
                                <div onClick={() => toggleAccordion('code1')} className="cursor-pointer bg-base-100 dark:bg-gray-700 p-3 rounded-md flex justify-between">
                                    <span className="font-semibold">HTML</span>
                                    <span className="font-semibold mr-5">&#9660;</span>
                                </div>
                                {activeAccordions['code1'] && <CodeSnippet codeString={item.code1} />}
                            </div>
                        )}
                        {item.code2 && (
                            <div className="my-5 mx-auto text-left">
                                <div onClick={() => toggleAccordion('code2')} className="cursor-pointer bg-base-100 dark:bg-gray-700 p-3 rounded-md flex justify-between">
                                    <span className="font-semibold">CSS</span>
                                    <span className="font-semibold mr-5">&#9660;</span>
                                </div>
                                {activeAccordions['code2'] && <CodeSnippet codeString={item.code2} />}
                            </div>
                        )}
                        {item.code3 && (
                            <div className="my-5 mx-auto text-left">
                                <div onClick={() => toggleAccordion('code3')} className="cursor-pointer bg-base-100 dark:bg-gray-700 p-3 rounded-md flex justify-between">
                                    <span className="font-semibold">JavaScript</span>
                                    <span className="font-semibold mr-5">&#9660;</span>
                                </div>
                                {activeAccordions['code3'] && <CodeSnippet codeString={item.code3} />}
                            </div>
                        )}
                        {item.code4 && (
                            <div className="my-5 mx-auto text-left">
                                <div onClick={() => toggleAccordion('code4')} className="cursor-pointer bg-gray-200 dark:bg-gray-700 p-3 rounded-md flex justify-between">
                                    <span className="font-semibold">JavaScript</span>
                                    <span className="font-semibold mr-5">&#9660;</span>
                                </div>
                                {activeAccordions['code4'] && <CodeSnippet codeString={item.code4} />}
                            </div>
                        )}

                        {['statement2'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="pt-3 text-xl mt-5 text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        {['feature'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        {['substatement2'].map((key, index) => (
                            item[key] && (
                                <p key={index} className="py-3 text-xl text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}

                        {['explain'].map((key, index) => (
                            item[key] && (
                                <p key={index} className=" text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}

                        {['note'].map((key, index) => (
                            item[key] && (
                                <p key={index} className=" text-base text-justify leading-relaxed text-body-color dark:text-dark-6">
                                    {renderText(item[key])}
                                </p>
                            )
                        ))}
                        <div className='mt-10 text-center flex justify-between'>
                            <Link to={item.link1} className='p-3 bg-blue-500 rounded group hover:bg-blue-900 text-white'>Click to Download from GitHub</Link>
                            <Link to={item.link2} className='p-3 bg-red-500 rounded group hover:bg-red-900 text-white'>Watch Live Project</Link>
                        </div>
                    </div>

                </div>

                <div className="w-[300px] md:w-auto px-7 py-5 rounded-xl mx-auto md:ml-20 bg-transparent h-auto">
                    <div className="md:sticky md:top-20">
                        <h1 className='text-red-500 mb-5 text-2xl text-center md:text-left'>Recent Project</h1>
                        <div className="flex flex-col justify-center text-left space-y-2">
                            {items
                                .filter(blogItem => blogItem.id.toString() !== id)
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .slice(0, 10)
                                .map(blogItem => (
                                    <div key={blogItem.id}>
                                        <List item={blogItem} onClick={() => handleCardClick(blogItem.id)} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>




            </div>
            <div className='text-center my-20'>
                <a href='/Project'><button className="btn bg-red-500 text-lg text-white hover:bg-red-800">More Project</button></a>
            </div>

            <Footer />
        </>
    );
};

export default ProjectDetail;




