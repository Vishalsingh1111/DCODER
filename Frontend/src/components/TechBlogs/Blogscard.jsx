import React from 'react';

const Blogcard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="p-5 shadow bg-white min-h-[180px]  m-5 flex flex-col md:flex-row w-full md:w-[350px] hover:shadow-xl rounded-xl dark:bg-slate-800 dark:text-white cursor-pointer">
            <div className="content">
                <h3 className="text-lg text-blue-900 font-semibold mb-2">{item.image}</h3>
                <h3 className="text-lg text-blue-900 font-semibold mb-2">{item.header}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.category}</p>
                <a className="text-red-500 mt-2 inline-block">{"Click to open"} &rarr;</a>
            </div>
        </div>
    );
};

export default Blogcard;




