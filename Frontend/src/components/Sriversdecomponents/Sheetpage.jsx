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

    const handleNoteClick = (key) => {
        setCurrentNoteKey(key);
        setIsModalOpen(true);
    };

    return (
        <div className='max-w-screen-2xl container mx-auto lg:my-10 sm:my-3 dark:bg-slate-900 dark:text-white'>
            <div className='mx-auto text-center lg:mb-10 max-w-screen-md'>
                <div className='text-3xl text-red-500 mb-10 text-center'>
                    <span>Most Asked Problem For SDE Interview</span>
                </div>
            </div>
            <div className='flex justify-center'>

                <div className="w-full p-0 sm:p-5 md:p-8 lg:p-10 max-w-full mx-auto bg-[rgb(255,255,255)] dark:bg-slate-800 dark:border-none rounded-xl">
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
