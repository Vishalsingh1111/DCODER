import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Strisdesheetcard from './StriverSDESheet/Strisdesheetcard';
import Strisheetproblemform from './StriverSDESheet/Strisheetproblemform';
import SDEProblemform from './StriverSDESheet/SDEProblemform'
import Strisdecardshowdata from './StriverSDESheet/Strisdecardshowdata';
import Striproblemshowdata from './StriverSDESheet/Striproblemshowdata';
import SDEProblemshowdata from './StriverSDESheet/SDEProblemshowdata';
import Notecardform from './Languages/Notecardform';
import Notecardshowdata from './Languages/Notecardshowdata';
import Notecontentform from './Languages/Notecontentform';
import Notecontentshowdata from './Languages/Notecontentshowdata';
import Techblogform from './Tech Blogs/Techblogform';
import Techblogshowdata from './Tech Blogs/Techblogshowdata';
import ContestSolform from './ContestSol/ContestSolform';
import ContestSolShowdata from './ContestSol/ContestSolShowdata';
import Projectform from './Project/Projectform';
import Projectshowdata from './Project/Projectshowdata';
import Showusersdetail from './Usersdetail/Showusersdetail';
import ShowContactMsg from './Showcontactmsg';
import DashboardCompo from './Dashboardcompo';

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [selectedContent, setSelectedContent] = useState('DashboardCompo');


    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = (dropdownId) => {
        setIsDropdownOpen(isDropdownOpen === dropdownId ? null : dropdownId);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('Users');
        toast.success('Admin logged out successfully');
        navigate('/');
        window.location.reload();
    };

    const handleContentChange = (content) => {
        setSelectedContent(content);
    };

    return (
        <div className="flex">
            <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            <aside
                id="sidebar-multi-level-sidebar "
                className={`fixed top-0 m-5  left-0 z-40 w-[290px] h-screen-minus-5 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-white rounded-xl h-screen-minus-5 border border-gray-300 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className=' pl-3 text-red-500 font-semibold text-left'>
                            <span>DCODER</span>
                        </li>
                        <li>
                            <button
                                onClick={() => handleContentChange('DashboardCompo')}
                                className="flex items-center p-2 text-gray-900 rounded-lg w-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </button>
                        </li>

                        {/* Users */}

                        <li>
                            <button
                                onClick={() => handleContentChange('Showusersdetail')}
                                className="flex items-center p-2 text-gray-900 rounded-lg w-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="ms-3">Users</span>
                            </button>
                        </li>

                        {/* SDE SHEET */}
                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-2"
                                data-collapse-toggle="dropdown-example-2"
                                onClick={() => toggleDropdown(2)}
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Sheet</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example-2"
                                className={`py-2 space-y-2 ${isDropdownOpen === 2 ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Strisdesheetcard')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Create new card
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Strisdecardshowdata')}

                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage card
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Uploadproblem')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload Problem
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Manageproblem')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage Problem
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Uploadsdeproblem')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload SDE Problem
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Managesdeproblem')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage SDE Problem
                                    </button>
                                </li>
                            </ul>
                        </li>

                        {/* Programming Language */}

                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-3"
                                data-collapse-toggle="dropdown-example-3"
                                onClick={() => toggleDropdown(3)}
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Language</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example-3"
                                className={`py-2 space-y-2 ${isDropdownOpen === 3 ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Notecardform')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Create new card
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Notecardshowdata')}

                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage card
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Notecontentform')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload content
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Notecontentshowdata')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage content
                                    </button>
                                </li>
                            </ul>
                        </li>

                        {/* Blog Section */}

                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-4"
                                data-collapse-toggle="dropdown-example-4"
                                onClick={() => toggleDropdown(4)}
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                    <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Technical blogs</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example-4"
                                className={`py-2 space-y-2 ${isDropdownOpen === 4 ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Techblogform')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload blog
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Techblogshowdata')}

                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage blog
                                    </button>
                                </li>
                            </ul>
                        </li>

                        {/* Contest Sol Section */}

                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-4"
                                data-collapse-toggle="dropdown-example-4"
                                onClick={() => toggleDropdown(4.5)}
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                    <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Contest Solution</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example-4"
                                className={`py-2 space-y-2 ${isDropdownOpen === 4.5 ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleContentChange('ContestSolform')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload Solution
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('ContestSolShowdata')}

                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage Solutions
                                    </button>
                                </li>
                            </ul>
                        </li>

                        {/* Project Section */}

                        <li>
                            <button
                                type="button"
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                aria-controls="dropdown-example-5"
                                data-collapse-toggle="dropdown-example-5"
                                onClick={() => toggleDropdown(5)}
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 21"
                                >
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Project playlist</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example-5"
                                className={`py-2 space-y-2 ${isDropdownOpen === 5 ? 'block' : 'hidden'}`}
                            >
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Projectform')}
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Upload project
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleContentChange('Projectshowdata')}

                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                    >
                                        Manage project
                                    </button>
                                </li>
                            </ul>
                        </li>


                        {/* Contact Section */}

                        <li>
                            <button
                                onClick={() => handleContentChange('ShowContactMsg')}
                                className="flex items-center p-2 text-gray-900 rounded-lg w-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M15 8a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 0H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 13a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15ZM6 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
                                </svg>
                                <span className="ms-3">Queries</span>
                            </button>
                        </li>

                        <li>
                            <button
                                className="flex items-center p-2 text-gray-900 rounded-lg w-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <a href='/AddAdmin'><button className=' rounded mr-5 ms-3'>Sign Up</button></a>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={handleLogout}
                                className="fixed bottom-4 left-5 flex items-center p-2 mt-3 px-4 text-white rounded-lg bg-red-500 dark:text-white shadow-lg hover:shadow-red-500/30 shadow-black/30  dark:hover:bg-gray-700 group"
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span className="ms-3">Log Out</span>

                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="ml-[330px] w-full overflow-auto h-screen-minus-5 bg-white shadow pt-8 p-10 rounded-xl m-5 text-center">

                {selectedContent === 'DashboardCompo' && <DashboardCompo />}
                {selectedContent === 'Strisdecardshowdata' && <Strisdecardshowdata />}
                {selectedContent === 'Strisdesheetcard' && <Strisdesheetcard />}
                {selectedContent === 'Uploadproblem' && <Strisheetproblemform />}
                {selectedContent === 'Manageproblem' && <Striproblemshowdata />}
                {selectedContent === 'Uploadsdeproblem' && <SDEProblemform />}
                {selectedContent === 'Managesdeproblem' && <SDEProblemshowdata />}
                {selectedContent === 'Notecardform' && <Notecardform />}
                {selectedContent === 'Notecardshowdata' && <Notecardshowdata />}
                {selectedContent === 'Notecontentform' && <Notecontentform />}
                {selectedContent === 'Notecontentshowdata' && <Notecontentshowdata />}
                {selectedContent === 'Techblogform' && <Techblogform />}
                {selectedContent === 'Techblogshowdata' && <Techblogshowdata />}
                {selectedContent === 'ContestSolform' && <ContestSolform />}
                {selectedContent === 'ContestSolShowdata' && <ContestSolShowdata />}
                {selectedContent === 'Showusersdetail' && <Showusersdetail />}
                {selectedContent === 'ShowContactMsg' && <ShowContactMsg />}
                {selectedContent === 'Projectform' && <Projectform />}
                {selectedContent === 'Projectshowdata' && <Projectshowdata />}
            </div>
        </div>
    );
};

export default Sidebar;


