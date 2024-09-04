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

    return (
        <div className="w-full bg-white rounded-lg shadow dark:bg-slate-800 dark:text-white">
            <div className="bg-gray-600 h-1 rounded-t-full" style={{ width: `${(item.completedProblems / item.Problems) * 100}%` }}></div>
            <div className="flex  bg-[#F3F3F9] dark:bg-slate-800 mb-4 rounded items-center justify-between py-4 lg:px-8 px-2 cursor-pointer" onClick={toggleAccordion}>
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-white">{item.name}</h3>
                </div>
                <div className='flex space-x-5'>
                    <div className='mt-2'>
                        <span className="p-1 w-6 h-6 text-gray-500 rounded-lg border-2 border-gray-400 dark:bg-slate-700 dark:text-gray-300 px-3 py-1.5">{item.completedProblems}{item.Problems}</span>
                    </div>
                    <button className="p-1.5 border-2 bg-gray-600 border-gray-600 text-white rounded-lg dark:bg-slate-700 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='w-full dark:bg-slate-800 pb-8 dark:text-white dark:border-none'>
                    <div className='lg:mt-[-68px] lg:ml-[20%] lg:absolute border-gray-400 mb-2 lg:p-0 px-2 justify-center space-x-2' >
                        <button className="bg-gray-500 hover:text-black text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-gray-500 " onClick={() => handleLevelClick('Random')}>Random</button>
                        <button className="bg-green-500 hover:text-black text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-green-500" onClick={() => handleLevelClick('Easy')}>Easy</button>
                        <button className="bg-yellow-500 hover:text-black text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-yellow-500" onClick={() => handleLevelClick('Medium')}>Medium</button>
                        <button className="bg-red-500 hover:text-black text-white dark:bg-slate-800 dark:text-white  px-2 py-1 border-2 rounded-lg border-red-500" onClick={() => handleLevelClick('Hard')}>Hard</button>
                    </div>
                    <div className='lg:mx-8 mx-2 dark:bg-slate-900 dark:text-white dark:border border-2 border-gray-400 rounded-xl overflow-auto '>
                        <table className="table bg-white  dark:bg-slate-900 dark:text-white dark:border ">
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
