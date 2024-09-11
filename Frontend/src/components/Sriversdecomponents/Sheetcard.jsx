import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sheetproblems from '../Sriversdecomponents/Sheetproblems';
import Sheetheading from '../Sriversdecomponents/Sheetheading';
import { baseUrl } from '../../Baseurl';

function Sheetcard({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [allSheetProblems, setAllSheetProblems] = useState([]);
    const [filteredSheetProblems, setFilteredSheetProblems] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('');

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            const fetchSheetProblems = async () => {
                try {
                    const res = await axios.get(`${baseUrl}/sheetproblem`);
                    const filteredProblems = res.data.filter(data => data.topic === item.Topic);
                    setAllSheetProblems(filteredProblems);
                    setFilteredSheetProblems(filteredProblems);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchSheetProblems();
        }
    }, [isOpen, item.Topic]);

    const handleLevelClick = (level) => {
        setSelectedLevel(level);
        if (level === 'Random') {
            const randomProblem = allSheetProblems[Math.floor(Math.random() * allSheetProblems.length)];
            setFilteredSheetProblems(randomProblem ? [randomProblem] : []);
        } else if (level) {
            const filtered = allSheetProblems.filter(problem => problem.Level === level);
            setFilteredSheetProblems(filtered);
        } else {
            setFilteredSheetProblems(allSheetProblems);
        }
    };

    // Define different background colors based on the `item.name` or other unique identifier
    const backgroundColors = {
        "Basic dsa": "bg-blue-200",
        "Arrays & Matrix": "bg-red-100",
        "String": "bg-green-100",
        "Linked List": "bg-purple-100",
        "Stacks and Queues": "bg-orange-100",
        "Binary Search": "bg-pink-100",
        "Binary Trees": "bg-yellow-100",
        "Binary Search Tree": "bg-blue-200",
        "Heap": "bg-red-100",
        "Trie": "bg-green-100",
        "Graph": "bg-purple-100",
        "Dynamic Programing": "bg-orange-100",
        "default": "bg-gray-100"
    };

    // Use the item's name to determine the background color, or fall back to a default color
    const cardBackground = backgroundColors[item.name] || backgroundColors.default;

    return (
        <div className={`max-w-screen-2xl mx-2 md:mx-10 rounded-lg border-t shadow-md shadow-black/20 dark:bg-slate-800 dark:text-white`}>
            <div className="bg-gray-600 h-1 rounded-t-full" style={{ width: `${(item.completedProblems / item.Problems) * 100}%` }}></div>

            <div className={`flex mb-4 rounded items-center justify-between py-6 lg:px-8 px-2 cursor-pointer ${cardBackground}`} onClick={toggleAccordion}>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-black dark:text-white">{item.name}</h3>
                </div>
                <div className='flex space-x-5'>
                    <div className='mt-2'>
                        <span className="p-1 w-6 h-6 text-black rounded-lg border-2 border-gray-600 dark:bg-slate-700 dark:text-gray-300 px-3 py-1.5">{item.completedProblems}{item.Problems}</span>
                    </div>
                    <button className="p-1.5 border-2 bg-gray-600 border-gray-600 text-white rounded-lg dark:bg-slate-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='w-full dark:bg-slate-800 pb-8 dark:text-white dark:border-none sm:px-0 py-5 md:px-10'>
                    <div className='lg:mt-[-100px] lg:ml-[30%] lg:absolute border-gray-400 mb-2 lg:p-0 px-2 justify-center space-x-2'>
                        <button className="bg-gray-500 shadow-lg hover:shadow-gray-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-gray-500" onClick={() => handleLevelClick('Random')}>Random</button>
                        <button className="bg-green-500 shadow-lg hover:shadow-green-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-green-500" onClick={() => handleLevelClick('Easy')}>Easy</button>
                        <button className="bg-yellow-500 shadow-lg hover:shadow-yellow-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-yellow-500" onClick={() => handleLevelClick('Medium')}>Medium</button>
                        <button className="bg-red-500 shadow-lg hover:shadow-red-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-red-500" onClick={() => handleLevelClick('Hard')}>Hard</button>
                    </div>
                    <div className='lg:mx-8 mx-2 dark:bg-slate-900 dark:text-white dark:border border-2 border-gray-400 rounded-xl overflow-auto'>
                        <table className="table bg-[rgb(255,255,255)] dark:bg-slate-900 dark:text-white dark:border">
                            <thead className='font-semibold text-gray-600 shadow dark:bg-slate-800 dark:text-white'>
                                <Sheetheading />
                            </thead>
                            <tbody>
                                {filteredSheetProblems.map((problem) => (
                                    <Sheetproblems item={problem} key={problem.id} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sheetcard;
