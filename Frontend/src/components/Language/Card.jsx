import React from 'react';

function Card({ item }) {
    const iconBackgroundColors = {
        default: "bg-gray-100"
    };

    const bgColor = iconBackgroundColors[item.name] || iconBackgroundColors.default;

    return (
        <div className="w-full md:w-auto">
            <a href={item.link} className="block group">
                <div className="bg-[#ffffff] border border-gray-300 group rounded-2xl transition-colors dark:bg-slate-900 dark:text-white dark:border dark:border-gray-600">
                    <div className='flex justify-between'>
                        <div className={`w-[100px] h-[100px] m-6 mb-0 flex items-center justify-center rounded-full text-xl dark:bg-slate-700`}>
                            <img src={item.image} alt="Course Img" className="w-[100%] h-auto" />
                        </div>
                        <div className="flex flex-col m-7 mb-0 justify-end space-y-2">
                            {/* Show category only if it is 'Free' */}
                            {item.category === "Free" && (
                                <div className="badge rounded-lg px-6 py-4 text-white bg-green-500">
                                    {item.category}
                                </div>
                            )}
                            {/* Show price only if category is not 'Free' */}
                            {item.category !== "Free" && (
                                <div className="badge rounded-lg text-sm bg-red-500 text-white py-4 dark:bg-red-800">
                                    Price: ${item.price}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='bg-gradient-to-t from-gray-200 to-[#ffffff] p-6 pt-1 rounded-2xl dark:from-slate-800'>
                        <h2 className="mt-4 text-xl font-semibold text-black dark:text-white">{item.name}</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-white">{item.title}</p>
                        <button className="mt-4 px-4 py-2 border text-red-500 border-red-400 dark:border-white rounded-xl group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-colors dark:text-white">
                            {"Click to Open"} &rarr;
                        </button>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
