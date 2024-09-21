import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { baseUrl } from '../Baseurl';

const formatResponse = (response) => {
    let formattedResponse = response
        .replace(/\*\*/g, '') // Remove bold markers
        .replace(/^\*\s+/gm, '<ul><li>') // Start unordered list
        .replace(/^\d+\.\s+/gm, '<ol><li>') // Start ordered list
        .replace(/<\/li>\n<li>/g, '</li><li>') // Fix list item breaks
        .replace(/<\/ol>\n<ol>/g, '') // Fix ordered list breaks
        .replace(/<\/ul>\n<ul>/g, '') // Fix unordered list breaks
        .replace(/<\/li>\n?$/g, '</li>') // Close last list item
        .replace(/\n/g, '<br/>') // Replace new lines with <br/>
        + '</ul>'; // Close any open lists

    formattedResponse = formattedResponse
        .replace(/<ul><\/ul>/g, '')
        .replace(/<ol><\/ol>/g, '');

    return formattedResponse;
};

const Chat = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const responseRef = useRef(null); // Ref for the response container

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = localStorage.getItem('Users');
        if (userData) {
            setAuthUser(JSON.parse(userData));
        }
    }, []);

    useEffect(() => {
        if (responseRef.current) {
            responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [response]);

    const handleQuery = async (prompt) => {
        setLoading(true);
        try {
            const res = await axios.post(`${baseUrl}/chat`, { prompt });
            setResponse(formatResponse(res.data.text));
            setQuery('');
        } catch (error) {
            console.error('Error sending query:', error);
            setResponse('Failed to get a response from the server.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleQuery(query);
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen pt-20 dark:bg-none dark:text-white"> {/* Adjusted padding */}
                <div className='w-full sm:w-[100px] md:w-full mb-5'>
                    <img src="/robot.jpg" alt="AI Illustration" className="w-[100px] rounded-full border-2  border-blue-500 mx-auto" />
                </div>
                <div className="mb-5 max-w-4xl text-left mx-auto space-y-3 ">
                    <h1 className="md:text-5xl text-xl font-semibold mb-2">
                        Hello, <span className="text-red-500">{authUser?.firstName || 'Guest'}</span>
                    </h1>
                    <h2 className="md:text-5xl text-xl font-semibold text-gray-500 mb-20">
                        How can I help you today?
                    </h2>
                </div>
                <div className=" w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols gap-4">
                    <button
                        className="p-8 border rounded-2xl border-gray-300 justify-start flex text-left dark:bg-slate-800 dark-text-white"
                        onClick={() => handleQuery('Outline a way to home routine: organizing my closet')}
                    >
                        Outline a way to home routine: organizing my closet
                    </button>
                    <button
                        className="p-8 border rounded-2xl border-gray-300 justify-start flex text-left dark:bg-slate-800 dark-text-white"
                        onClick={() => handleQuery('Help me incorporate more plant-based options in my diet')}
                    >
                        Help me incorporate more plant-based options in my diet
                    </button>
                    <button
                        className="p-8 border rounded-2xl border-gray-300 justify-start flex text-left dark:bg-slate-800 dark-text-white"
                        onClick={() => handleQuery('Come up with a recipe for an upcoming event')}
                    >
                        Come up with a recipe for an upcoming event
                    </button>
                    <button
                        className="p-8 border rounded-2xl border-gray-300 justify-start flex text-left dark:bg-slate-800 dark-text-white"
                        onClick={() => handleQuery('Create a 12-week study plan for learning a new language')}
                    >
                        Create a 12-week study plan for learning a new language
                    </button>
                </div>
                <div className='w-full max-w-4xl mx-auto mb-32 text-justify justify-start md:mt-10 mt-32 rounded  dark-text-white rounded-xl'>
                    {loading ? (
                        <div className="text-center text-2xl text-red-500">
                            Getting Your Response Ready 😃
                        </div>
                    ) : (
                        <div ref={responseRef} dangerouslySetInnerHTML={{ __html: response }} />

                    )}

                </div>
            </div>
            <div className="w-full max-w-4xl p-4 bg-white shadow-md border-t rounded-full flex items-center fixed bottom-10 items-center left-1/2 transform -translate-x-1/2 dark:bg-slate-800 dark-text-white">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask with TechAI"
                    className="w-full px-5 p-1 border-none outline-none dark:bg-slate-800 dark-text-white "
                />
                {query && (
                    <button onClick={() => handleQuery(query)}>
                        <img className='w-[40%] h-[40%] mx-5' src='/icons8-send-button-60.png' alt="Send" />
                    </button>
                )}
            </div>
        </>
    );
};

export default Chat;

