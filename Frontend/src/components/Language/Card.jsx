import React from 'react';

function Card({ item }) {
    const figureBackgroundColors = {
        "DSA Notes": "text-blue-500 bg-gradient-to-t from-blue-100 to-white",
        "Python Notes": "text-green-500 bg-gradient-to-t from-green-100 to-white",
        "OOPS Notes": "text-red-500 bg-gradient-to-t from-red-100 to-white",
        "DBMS Notes": "text-purple-500 bg-gradient-to-t from-purple-100 to-white",
        "Java Notes": "text-orange-500 bg-gradient-to-t from-orange-100 to-white",
        "C Notes": "text-pink-500 bg-gradient-to-t from-pink-100 to-white",
        default: "text-gray-500 bg-gradient-to-t from-gray-100 to-white",
    };

    const figureBgClass = figureBackgroundColors[item.name] || figureBackgroundColors.default;
    const categoryBgClass = item.category === "Free" ? "bg-green-500" : "bg-red-500";

    return (
        <div className="w-full md:w-auto">
            <a href={item.link}>
                <div className="card rounded-xl bg-white m-5 shadow shadow-black/40 hover:shadow-md hover:shadow-black/70 transition-transform duration-300 group dark:bg-slate-900 dark:text-white dark:border dark:border-gray-600">
                    <figure className="relative flex justify-center items-center h-50 p-2">
                        <img src={item.image} alt="Course Img" className="w-[50%] h-auto" />

                    </figure>
                    <div className={`card-body pt-4 px-6 ${figureBgClass} rounded-xl dark:from-slate-800`}>
                        <h2 className="card-title text-2xl text-black dark:text-white">{item.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">{item.title}</p>
                    </div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-6">
                        <div className="badge rounded-lg bg-gray-700 text-white py-3.5 dark:bg-slate-800">
                            Price: ${item.price}
                        </div>
                        <div className={`badge rounded-lg py-3.5 text-white ${categoryBgClass}`}>
                            {item.category}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
