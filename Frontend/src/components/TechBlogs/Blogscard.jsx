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
            className="relative border-t bg-white shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl bg-[rgb(255,255,255)] min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group  rounded-xl dark:border-gray-600 dark:border dark:bg-slate-900 dark:text-white cursor-pointer"
        >
            <div className="content flex flex-col justify-between ">
                <h3 className="text-xl font-[500] text-black mb-2 dark:text-white p-5 pb-0">
                    {item.header}
                </h3>
                <div className='p-5 pt-0 bg-gradient-to-t from-[#fef3f3] to-white rounded-xl dark:from-slate-800'>
                    <p className="text-md text-gray-600 dark:text-white">
                        {truncateText(item.explanation, 70)}
                    </p>
                    <div className="flex justify-start mt-4">
                        <a
                            className="text-red-500  inline-block border p-2 rounded-lg border-red-500  rounded-lg group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-all duration-300"
                            href="#"
                        >
                            Click to open
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;
