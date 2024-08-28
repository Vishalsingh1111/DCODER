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
            className="relative p-5 border bg-white min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group hover:shadow-xl rounded-xl dark:bg-slate-800 dark:text-white cursor-pointer"
        >
            <div className="content flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg text-blue-900 mb-2 mt-4 dark:text-white">
                        {item.header}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 dark:text-white">
                        {truncateText(item.explanation, 80)}
                    </p>
                </div>
                <div className="flex justify-start mt-4">
                    <a
                        className="text-purple-700 inline-block border p-2 rounded-lg border-purple-500 group-hover:bg-purple-700 group-hover:text-white group-hover:border-purple-700 transition-all duration-300"
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
