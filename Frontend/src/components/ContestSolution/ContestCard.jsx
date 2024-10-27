import React from 'react';

// Truncate text function
const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
};

const Contestcard = ({ item, onClick }) => {
    return (

        <div
            onClick={onClick}
            className="relative bg-gray-900 border-gray-300 group rounded-md min-h-[200px] m-5 flex flex-col w-full md:w-[350px] dark:border-gray-600 dark:border dark:bg-slate-900 dark:text-white cursor-pointer hover:shadow hover:shadow-black/30 hover:shadow-lg"
        >
            <div className="content flex flex-col m-auto">
                <h3 className="text-2xl font-[600] text-[#20B2AA] dark:text-white  pb-2">
                    {item.header}
                </h3>

                <div className="flex justify-start mt-4">
                    <a
                        className="text-[#20B2AA] inline-block border p-2 rounded-lg border-[#20B2AA] group-hover:shadow-lg group-hover:bg-[#20B2AA] group-hover:text-white group-hover:shadow-black/30 group-hover:border-[#20B2AA] transition-all duration-300"
                        href="#"
                    >
                        Click to open
                    </a>
                </div>
            </div>

        </div>

    );
};

export default Contestcard;
