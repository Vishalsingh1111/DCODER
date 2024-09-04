import React from 'react';

const Projectcard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="p-4 flex flex-col md:flex-row w-full md:w-[350px] cursor-pointer ">
            <div className="rounded-xl p-6 hover:shadow-lg dark:bg-slate-800 dark:text-white dark:border-none bg-[rgb(255,255,255)] border-gray-300 border ">
                <div className="mb-3 flex items-center justify-center">
                    {item.image1 && <img src={item.image1} alt="Project thumbnail" className=' dark:border-none w-[300px] h-[150px] rounded-lg object-cover' />}
                </div>
                <div className='bg-gray'>
                    <h4 className="mb-2 text-xl text-blue-900 font-semibold text-dark dark:text-white">
                        {item.header}
                    </h4>
                    <p className="mb-2 text-sm dark:text-dark-6">
                        {item.substatement3}
                    </p>
                    <p className="mb-2 text-sm dark:text-dark-6">
                        {item.category}
                    </p>
                    <a className="text-red-500 inline-block">{"Click for details"} &rarr;</a>
                </div>
            </div>
        </div>
    );
};
export default Projectcard;


