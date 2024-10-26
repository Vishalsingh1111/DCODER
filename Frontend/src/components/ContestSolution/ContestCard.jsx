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
            className="relative bg-black border-gray-300 group rounded-md bg-[url('./CF_Contest.png')] bg-cover bg-center min-h-[200px] m-5 flex flex-col w-full md:w-[350px] dark:border-gray-600 dark:border dark:bg-slate-900 dark:text-white cursor-pointer"
        >
            <div className="content flex flex-col absolute bottom-[20%] left-[10%]">
                <h3 className="text-xl font-[600] text-[#20B2AA] dark:text-white p-5 pb-2">
                    {item.header}
                </h3>

                <div className="flex justify-start mt-4">
                    <a
                        className="text-white inline-block border p-2 rounded-lg border-[#20B2AA] group-hover:shadow-lg group-hover:bg-[#20B2AA] group-hover:text-white group-hover:shadow-black/30 group-hover:border-[#20B2AA] transition-all duration-300"
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
