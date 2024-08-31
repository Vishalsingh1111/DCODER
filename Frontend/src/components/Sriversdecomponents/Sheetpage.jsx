
// import React, { useEffect, useState } from 'react';
// import Sheetcard from './Sheetcard';
// import axios from "axios";
// import { baseUrl } from '../../Baseurl';
// import Skeleton1 from '../Skeleton';

// function Sheetpage() {
//     const [sheet, setSheet] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getSheet = async () => {
//             try {
//                 const res = await axios.get(`${baseUrl}/sheet`);
//                 setSheet(res.data);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         getSheet();
//     }, []);

//     return (
//         <div className='max-w-screen-xl container mx-auto lg:my-10 sm:my-3 dark:bg-slate-900 dark:text-white'>
//             <div className='mx-auto text-center lg:mb-10 max-w-screen-md'>
//                 <span className='font-bold text-xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white leading-tight tracking-wide '>
//                     Updated SDE Sheet : Top Coding Interview Problems
//                 </span>
//             </div>
//             <div className='flex justify-center'>
//                 <div className='w-full m-3 md:w-4/5 lg:w-4/4 dark:bg-slate-900 dark:text-white bg-white lg:p-10 p-2 lg:shadow border-gray-400 rounded-xl'>
//                     {loading ? (
//                         <Skeleton1 />
//                     ) : (
//                         <div className='space-y-5'>
//                             {sheet.map((item) => (
//                                 <Sheetcard key={item.id} item={item} />
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Sheetpage;

import React, { useEffect, useState } from 'react';
import Sheetcard from './Sheetcard';
import axios from "axios";
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';

function Sheetpage() {
    const [sheet, setSheet] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSheet = async () => {
            try {
                const res = await axios.get(`${baseUrl}/sheet`);
                const sortedData = res.data.sort((a, b) => a.id - b.id);
                setSheet(sortedData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getSheet();
    }, []);

    return (
        <div className='max-w-screen-xl container mx-auto lg:my-10 sm:my-3 dark:bg-slate-900 dark:text-white'>
            <div className='mx-auto text-center lg:mb-10 max-w-screen-md'>
                <span className='font-bold text-xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white leading-tight tracking-wide'>
                    Updated SDE Sheet : Top Coding Interview Problems
                </span>
            </div>
            <div className='flex justify-center'>
                <div className='w-full m-3 md:w-4/5 lg:w-4/4 dark:bg-slate-900 dark:text-white bg-white lg:p-10 p-2 lg:shadow border-gray-400 rounded-xl'>
                    {loading ? (
                        <Skeleton1 />
                    ) : (
                        <div className='space-y-5'>
                            {sheet.map((item) => (
                                <Sheetcard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sheetpage;
