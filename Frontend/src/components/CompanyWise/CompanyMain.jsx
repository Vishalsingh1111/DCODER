import React, { useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl } from "../../Baseurl";
import Sheetheading from "../Sriversdecomponents/Sheetheading";
import Skeleton1 from "../Skeleton";

const CompanyMain = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("adobe");
    const [checkboxes, setCheckboxes] = useState({});
    const [starredProblems, setStarredProblems] = useState({});
    const [notesArray, setNotesArray] = useState({});
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [filteredSheetProblems, setFilteredSheetProblems] = useState([]);

    // Load states from localStorage when the component mounts
    useEffect(() => {
        const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes')) || {};
        const savedStarredProblems = JSON.parse(localStorage.getItem('starredProblems')) || {};
        setCheckboxes(savedCheckboxes);
        setStarredProblems(savedStarredProblems);
    }, []);

    // Save checkboxes state to localStorage when it's updated
    useEffect(() => {
        localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
    }, [checkboxes]);

    // Save starred problems state to localStorage when it's updated
    useEffect(() => {
        localStorage.setItem('starredProblems', JSON.stringify(starredProblems));
    }, [starredProblems]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/sdeproblem`);
                const filteredData = res.data.filter(item => item.companies === activeSection);
                const sortedData = filteredData.sort((a, b) => a.id - b.id);
                setData(sortedData);
                setFilteredSheetProblems(sortedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getBlogs();
    }, [activeSection]);

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setSelectedLevel(null);
    };

    const handleCheckboxChange = (id) => {
        setCheckboxes(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleStarClick = (id) => {
        setStarredProblems(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleNoteClick = (problemName) => {
        const note = prompt("Enter your note:");
        if (note) {
            setNotesArray(prev => ({
                ...prev,
                [problemName]: note,
            }));
        }
    };

    const getLevelClass = (level) => {
        switch (level) {
            case "Easy":
                return "bg-green-500";
            case "Medium":
                return "bg-yellow-500";
            case "Hard":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    const handleLevelClick = (level) => {
        setSelectedLevel(level);
        if (level === 'Random') {
            const randomProblem = data[Math.floor(Math.random() * data.length)];
            setFilteredSheetProblems(randomProblem ? [randomProblem] : []);
        } else if (level) {
            const filtered = data.filter(problem => problem.Level === level);
            setFilteredSheetProblems(filtered);
        } else {
            setFilteredSheetProblems(data);
        }
    };

    return (
        <>
            <div className="w-full  pb-1 mb-4">

                {/* Section Buttons */}
                <div className="flex justify-center mb-4">
                    <button
                        className={`text-md px-2 py-1 ${activeSection === "adobe" ? "text-red-500 border-2 rounded-md border-red-500" : "text-gray-500 rounded-md border-2 border-gray-500"}`}
                        onClick={() => handleSectionChange("adobe")}
                    >
                        Adobe
                    </button>
                    <button
                        className={`text-md ml-2 px-2 py-1 ${activeSection === "airbnb" ? "text-red-500 border-2 rounded-md border-red-500" : "text-gray-500 rounded-md border-2 border-gray-500"}`}
                        onClick={() => handleSectionChange("airbnb")}
                    >
                        Airbnb
                    </button>
                </div>
            </div>
            <section className="max-w-screen-2xl container mx-auto py-8 md:px-5 px-4 relative z-20 overflow-hidden dark:bg-slate-900 dark:text-white lg:pb-[90px] lg:pt-[10px] text-center">


                {/* Data Table */}
                <div className="mx-auto text-left border dark:border-none dark:bg-slate-800 border-gray-200 rounded-xl">

                    {/* Level Buttons */}
                    <div className='flex px-2 justify-center space-x-2 py-3 bg-gradient-to-t from-[#f2f4fb] to-[#ffffff] dark:from-slate-800 rounded-t-lg'>
                        <button className="bg-gray-500 shadow-lg hover:shadow-gray-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-gray-500" onClick={() => handleLevelClick('Random')}>Random</button>
                        <button className="bg-green-500 shadow-lg hover:shadow-green-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-green-500" onClick={() => handleLevelClick('Easy')}>Easy</button>
                        <button className="bg-yellow-500 shadow-lg hover:shadow-yellow-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-yellow-500" onClick={() => handleLevelClick('Medium')}>Medium</button>
                        <button className="bg-red-500 shadow-lg hover:shadow-red-500/30 shadow-black/30 text-white dark:bg-slate-800 dark:text-white px-2 py-1 border-2 rounded-lg border-red-500" onClick={() => handleLevelClick('Hard')}>Hard</button>
                    </div>

                    <div className="w-full p-0 sm:p-0 md:p-4 lg:p-4 max-w-full mx-auto bg-[#ffffff] dark:bg-slate-800 dark:border-none">
                        {loading ? (
                            <Skeleton1 />
                        ) : (
                            <div className='lg:mx-4 mx-0 dark:bg-slate-900 dark:text-white dark:border border-2 border-gray-400 rounded-xl overflow-auto '>
                                <table className="table dark:bg-slate-900 dark:text-white dark:border ">
                                    <thead className='font-semibold text-gray-600 shadow dark:bg-slate-900 dark:text-white'>
                                        <Sheetheading />
                                    </thead>
                                    <tbody>
                                        {filteredSheetProblems.map((item, index) => (
                                            <tr key={index} className={`dark:bg-slate-900 dark:text-white border-t-2 border-gray-400 ${checkboxes[item.id] ? 'bg-gray-300' : ''}`}>
                                                <td className='text-center'>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox dark:bg-slate-700 dark:text-white"
                                                            checked={checkboxes[item.id] || false}
                                                            onChange={() => handleCheckboxChange(item.id)}
                                                        />
                                                    </label>
                                                </td>
                                                <td className='border-r-2 border-gray-400 border-l-2'><span>{item.name}</span></td>
                                                <td className='border-r-2 border-gray-400 text-left'>
                                                    <span className={`${getLevelClass(item.Level)} text-white px-2 py-1 w-16 rounded-lg`}>{item.Level}</span>
                                                </td>
                                                <td className='border-r-2 border-gray-400 text-center'>Soon</td>
                                                <td className='border-r-2 border-gray-400 border-l-2'>
                                                    <button className="bg-blue-500 text-white rounded px-2 py-1 ml-2">Show</button>
                                                </td>
                                                <td className='text-center'>
                                                    <a href={item.link} className="text-red-500 hover:underline">
                                                        <img src={'leetcode.svg'} alt="LeetCode" className="mx-auto w-[23px]" />
                                                    </a>
                                                </td>
                                                <td className='border-l-2 border-gray-400 text-center'>
                                                    <img
                                                        src={starredProblems[item.id] ? '/fill-star.svg' : '/empty-start.svg'}
                                                        alt="Revision"
                                                        className='cursor-pointer w-[26px] mx-auto'
                                                        onClick={() => handleStarClick(item.id)}
                                                    />
                                                </td>
                                                <td className='border-l-2 border-gray-400'>
                                                    <img
                                                        src={'/note.svg'}
                                                        alt="Note"
                                                        className='cursor-pointer w-[26px] mx-auto'
                                                        onClick={() => handleNoteClick(item.name)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CompanyMain;
