import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../Baseurl';

function SearchForm() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            const fetchSuggestions = async () => {
                try {
                    const response = await axios.get(`${baseUrl}/search/suggestions`, {
                        params: { q: query },
                    });
                    setSuggestions(response.data);
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                }
            };

            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${baseUrl}/search`, {
                params: { q: query },
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleSuggestionClick = async (suggestion) => {
        setQuery(suggestion.header);
        try {
            const response = await axios.get(`${baseUrl}/search`, {
                params: { q: suggestion.header },
            });
            setResults(response.data);
            setSuggestions([]);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="relative flex flex-col items-center max-w-2xl mx-auto px-5 bg-transparent">
            <form onSubmit={handleSearch} className="w-full flex items-center mb-5">
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>

                    <input
                        type="text"
                        id="voice-search"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-3 dark:bg-slate-800 dark:border-none dark:placeholder-white dark:text-white"
                        placeholder="Search your contents"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />
                    <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                        </svg>
                    </button>
                </div>
            </form>

            <div className="w-full relative">
                {suggestions.length > 0 && (
                    <ul className="absolute w-full bg-white text-left shadow-md h-[350px] overflow-auto rounded-lg p-2 mb-4 dark:bg-slate-800 z-10">
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion._id}
                                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion.header}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {results.length > 0 && (
                <div className="w-full bg-[rgb(255,255,255)] shadow-md rounded-lg p-5 mt-2 dark:bg-slate-800">
                    {results.map((result) => (
                        <div key={result._id} className="bg-white shadow-md rounded-lg p-5 mb-4 dark:bg-slate-800">
                            <h3 className="text-lg font-bold mb-2 dark:text-white">{result.header}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{result.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchForm;

