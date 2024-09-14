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
            className="relative p-5 border-t bg-white shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl bg-[rgb(255,255,255)] min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group  rounded-xl dark:border-none dark:bg-slate-800 dark:text-white cursor-pointer"
        >
            <div className="content flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-[500] text-black mb-2 dark:text-white">
                        {item.header}
                    </h3>
                    <p className="text-md text-gray-600 mb-2 dark:text-white">
                        {truncateText(item.explanation, 70)}
                    </p>
                </div>
                <div className="flex justify-start mt-4">
                    <a
                        className="text-red-500 dark:text-white inline-block border p-2 rounded-lg border-gray-300  rounded-lg group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-all duration-300"
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
