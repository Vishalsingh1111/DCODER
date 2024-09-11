import React from 'react';

function Card({ item }) {
    const figureBackgroundColors = {
        "DSA Notes": "bg-blue-100 text-blue-500",
        "Python Notes": "bg-green-100 text-green-500",
        "OOPS Notes": "bg-red-100 text-red-500",
        "DBMS Notes": "bg-purple-100 text-purple-500",
        "Java Notes": "bg-orange-100 text-orange-500",
        "C Notes": "bg-pink-100 text-pink-500",
        default: "bg-gray-100 text-gray-500",
    };

    const figureBgClass = figureBackgroundColors[item.name] || figureBackgroundColors.default;

    const categoryBgClass = item.category === "Free" ? "bg-green-500" : "bg-red-500";

    return (
        <>
            <div>
                <a href={item.link}>
                    <div className="card w-72 rounded-lg bg-white m-5 border-t bg-white shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl cursor-pointer transition-transform duration-300 group dark:bg-slate-900 dark:text-white dark:border">

                        <figure className={`relative dark:bg-slate-800 dark:text-white ${figureBgClass}`}>
                            <div className='flex justify-center items-center h-50 pb-1'>
                                <img src={item.image} alt="Course Img" className='px-10 pb-5 pt-2 w-[82%] h-auto' />
                            </div>
                        </figure>

                        <div className="card-body pt-4 px-5">
                            <div className="absolute bottom-4 center flex space-x-[130px]">
                                <div className="badge rounded-lg border-none badge-outline dark:bg-slate-800 dark:text-white py-3.5 bg-gray-700 text-white">
                                    Price: ${item.price}
                                </div>
                                <div className={`badge rounded-lg py-3.5 text-white border-none ${categoryBgClass}`}>
                                    {item.category}
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title text-black dark:text-white">{item.name}</h2>
                            </div>
                            <p className='text-gray-500 dark:text-gray-400 mb-5'>{item.title}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Card;
