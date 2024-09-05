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
        <div className="p-6 border-t bg-[rgb(255,255,255)] shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl transition-colors dark:bg-slate-800 dark:text-white dark:border-none">
            <div className="w-20 h-20 flex items-center border border-red-200 justify-center bg-red-100 rounded-xl text-5xl text-red-500 dark:bg-slate-700">
                <i className={`fas ${icon}`}></i>
            </div>
            <h2 className="mt-4 text-xl  font-semibold text-black dark:text-white">{title}</h2>
            <p className="mt-2 text-gray-600 dark:text-white">{description}</p>
            <button className="mt-4 px-4 py-2 border text-red-500 border-gray-400 dark:border-white rounded-xl group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-colors dark:text-white">
                {buttonText} &rarr;
            </button>
        </div>
    </a>
);

const ResourceGrid = () => (
    <div className="p-6 max-w-screen-xl container mx-auto md:px-20 px-4">
        <div className="pb-10 text-center ">
            <h1 className="font-[600] text-black dark:text-white text-4xl pb-2" id='homecontentcard'>Free Offered Courses</h1>
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
