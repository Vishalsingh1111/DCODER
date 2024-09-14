// import React from 'react';

// const Projectcard = ({ item, onClick }) => {
//     return (
//         <div onClick={onClick} className="p-4 flex flex-col md:flex-row w-full md:w-[350px] cursor-pointer ">
//             <div className="rounded-xl p-6 border-t shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl dark:bg-slate-800 dark:text-white dark:border-none bg-[rgb(255,255,255)] ">
//                 <div className="mb-3 flex items-center justify-center">
//                     {item.image1 && <img src={item.image1} alt="Project thumbnail" className=' dark:border-none w-[300px] h-[150px] rounded-lg object-cover' />}
//                 </div>
//                 <div className='bg-gray'>
//                     <h4 className="mb-2 text-xl text-black font-semibold text-dark dark:text-white">
//                         {item.header}
//                     </h4>
//                     <div className='flex justify-between'>
//                         <p className="mb-2 text-md text-gray-500 mt-1 dark:text-dark-6">
//                             {item.substatement3}
//                         </p>
//                         <p className="mb-2 text-sm text-blue-500 bg-blue-100 py-1 px-2 rounded-lg border border-blue-300 dark:text-dark-6">
//                             {item.category}
//                         </p>
//                     </div>
//                     <a
//                         className="text-red-500 mt-4 dark:text-white inline-block border p-2 rounded-lg border-gray-300  rounded-lg group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-all duration-300"
//                         href="#"
//                     >
//                         {"Click for details"} &rarr;
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Projectcard;


import React from 'react';

const Projectcard = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className="p-4 flex flex-col md:flex-row w-full md:w-[350px] cursor-pointer ">
            <div className="rounded-xl p-6 border-t shadow shadow-black/40 group hover:shadow-md hover:shadow-black/70 rounded-xl dark:bg-slate-800 dark:text-white dark:border-none bg-[rgb(255,255,255)] flex flex-col justify-between h-full">
                <div>
                    <div className="mb-3 flex items-center justify-center">
                        {item.image1 && <img src={item.image1} alt="Project thumbnail" className='dark:border-none w-[300px] h-[150px] rounded-lg object-cover' />}
                    </div>
                    <div className='bg-gray'>
                        <h4 className="mb-2 text-xl text-black font-semibold text-dark dark:text-white">
                            {item.header}
                        </h4>
                        <div className='flex justify-between'>
                            <p className="mb-2 text-md text-gray-500 mt-1 dark:text-dark-6">
                                {item.substatement3}
                            </p>
                            <p className="mb-2 text-sm text-blue-500 bg-blue-100 py-1 px-2 rounded-lg border border-blue-300 dark:bg-slate-900 dark:text-white dark:border-white">
                                {item.category}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <a
                        className="text-red-500 mt-4 dark:text-white inline-block border p-2 rounded-lg border-gray-300 group-hover:shadow-lg group-hover:bg-red-500 group-hover:text-white group-hover:shadow-black/30 group-hover:border-red-500 transition-all duration-300"
                        href="#"
                    >
                        {"Detail"} &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projectcard;
