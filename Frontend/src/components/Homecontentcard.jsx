import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const resources = [
    {
        title: "Updated DSA Sheet",
        description: "Boost your DSA skills with our handy cheat sheets.",
        buttonText: "Try it free",
        icon: "fa-file-alt",
        link: "/Sheet",
    },
    {
        title: "Programing Languages",
        description: "Design better systems with our simplified approach.",
        buttonText: "Try it free",
        icon: "fa-laptop-code",
        link: "/Languages",
    },
    {
        title: "Technical Blogs",
        description: "Dive Deep into Tech Innovation with Our Engaging Blogs.",
        buttonText: "Try it free",
        icon: "fa-blog",
        link: "/Technicalblog",
    },
    {
        title: "Project's Basket",
        description: "Master algorithms effortlessly with our curated DSA playlist.",
        buttonText: "Watch Now",
        icon: "fa-play-circle",
        link: "/Project",
    },
    {
        title: "CS Fundamental",
        description: "Demystify CS topics with our easy-to-understand guides.",
        buttonText: "Try it free",
        icon: "fa-book",
        link: "/CSPage",
    },
    {
        title: "New CP Sheet",
        description: "Level up your coding game with our practice resources.",
        buttonText: "Try it free",
        icon: "fa-pencil-alt",
        link: "/Pagenotfound",
    },
];

const ResourceCard = ({ title, description, buttonText, icon, link }) => (
    <a href={link} className="block group" >
        <div className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-red-500 transition-colors group dark:bg-slate-800 dark:text-white dark:border-none">
            <div className="w-20 h-20 flex items-center justify-center bg-[#EDE8F5] rounded-xl text-5xl text-red-500 dark:bg-slate-700">
                <i className={`fas ${icon}`}></i>
            </div>
            <h2 className="mt-4 text-xl text-blue-900 font-semibold dark:text-white">{title}</h2>
            <p className="mt-2 text-gray-600 dark:text-white">{description}</p>
            <button className="mt-4 px-4 py-2 border-2 text-blue-900 border-gray-200 text-gray-800 dark:border-white rounded-xl group-hover:border-red-500 group-hover:text-red-500 transition-colors dark:text-white">
                {buttonText} &rarr;
            </button>
        </div>
    </a>
);

const ResourceGrid = () => (
    <div className="p-6 max-w-screen-xl container mx-auto md:px-20 px-4">
        <div className="pb-10 text-center ">
            <h1 className="font-semi-bold text-black dark:text-white text-5xl pb-2" id='homecontentcard'>Free Offered Courses</h1>
            <p >We cover a wide range of programming languages including but not limited to Python, Java, C, C++, DSA etc. Our notes are designed to cater to both beginners and advanced users.</p>
        </div>
        <div className="max-w-screen-xl container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCard key={index} {...resource} />
                ))}
            </div>
        </div>
    </div>
);

export default ResourceGrid;
