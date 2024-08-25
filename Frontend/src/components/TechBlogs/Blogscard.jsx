import React from 'react';

const Blogcard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="p-5 border bg-white min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group hover:shadow-xl rounded-xl dark:bg-slate-800 dark:text-white cursor-pointer">
            <div className="content">
                <img src={item.image} className='w-full pb-2' alt="Blog" />
                <h3 className="text-lg text-blue-900 font-semibold mb-2 dark:text-white">{item.header}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.category}</p>
                <a className="text-purple-500 mt-2 inline-block border p-2 rounded-lg border-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                    {"Click to open"} &rarr;
                </a>
            </div>
        </div>
    );
};

export default Blogcard;
