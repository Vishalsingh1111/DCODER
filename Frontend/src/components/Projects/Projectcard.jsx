import React from 'react';

const Projectcard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="p-8 flex flex-col md:flex-row w-full md:w-[350px] cursor-pointer ">
            <div className="rounded-xl p-5 md:p-8 hover:shadow-lg dark:bg-slate-800 dark:text-white dark:border-none bg-white border-gray-700 border ">
                <div className="mb-3 flex items-center justify-center">
                    {item.image1 && <img src={item.image1} alt="Project thumbnail" className=' dark:border-none rounded-xl' />}
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
