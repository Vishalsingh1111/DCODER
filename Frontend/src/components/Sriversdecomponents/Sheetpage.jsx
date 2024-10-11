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
        <div className='max-w-screen-2xl container mx-auto lg:mb-10 sm:mb-3 dark:bg-slate-900 dark:text-white'>
            <div className='flex justify-center'>
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
    );
}

export default Sheetpage;
