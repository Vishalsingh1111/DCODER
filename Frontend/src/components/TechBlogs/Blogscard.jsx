import React from 'react';

// Truncate text function
const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
};

const Blogcard = ({ item, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative p-5 border border-gray-300 bg-white min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group  rounded-xl dark:border-none dark:bg-slate-800 dark:text-white cursor-pointer"
        >
            <div className="content flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-[500] text-blue-900 mb-2 mt-4 dark:text-white">
                        {item.header}
                    </h3>
                    <p className="text-md text-gray-900 mb-2 dark:text-white">
                        {truncateText(item.explanation, 60)}
                    </p>
                </div>
                <div className="flex justify-start mt-4">
                    <a
                        className="text-red-500 dark:text-white inline-block border p-2 rounded-lg border-gray-300 group-hover:text-white group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300"
                        href="#"
                    >
                        Click to open
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;
