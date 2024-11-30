import React, { useEffect, useState } from 'react';
import Sheetcard from './Sheetcard';
import axios from "axios";
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';
import Searchbar from '../Searchbar';


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

    const handleNoteClick = (key) => {
        setCurrentNoteKey(key);
        setIsModalOpen(true);
    };

    return (
        <>


            <div className='flex flex-col sm:flex-row lg:flex-row justify-between  text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                <div className='flex flex-col space-y-4'>
                    <span>SDE SHEET Most Asked Problems.</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>
                <div className='lg:w-[580px] mr-2'>
                    <Searchbar />
                </div>
                <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-white text-sm text-red-500 border dark:bg-slate-900  border-red-500 px-5 py-3 rounded-md'>Download PDF</button>
                    </a>
                </div>
            </div>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 mb-10 lg:mb-10 sm:mb-3 dark:bg-slate-900 dark:text-white'>
                <div className='flex justify-center '>
                    <div className="w-full max-w-full mx-auto dark:bg-slate-900 dark:border-none rounded-lg">
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
        </>
    );
}

export default Sheetpage;
