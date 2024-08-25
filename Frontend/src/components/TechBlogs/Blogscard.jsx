import React from 'react';

const Blogcard = ({ item, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative p-5 border bg-white min-h-[180px] m-5 flex flex-col md:flex-row w-full md:w-[350px] group hover:shadow-xl rounded-xl dark:bg-slate-800 dark:text-white cursor-pointer"
        >
            <div className="content flex-1 flex flex-col justify-between">
                <div>
                    <img
                        src={item.image}
                        className="w-full h-[150px] object-cover rounded-lg"
                        alt="Blog"
                    />
                    <h3 className="text-lg text-blue-900 my-2 dark:text-white">
                        {item.header}
                    </h3>
                    <p className="text-red-600 dark:text-gray-500">
                        {item.category}
                    </p>
                </div>
                <div className="flex justify-start mt-4">
                    <a
                        className="text-gray-700 inline-block border p-2 rounded-lg border-gray-500 group-hover:bg-gray-700 group-hover:text-white group-hover:border-gray-700 transition-all duration-300"
                        href="#"
                    >
                        Click to opendfadsfads
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;
