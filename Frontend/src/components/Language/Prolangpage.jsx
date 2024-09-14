import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { baseUrl } from '../../Baseurl';
import Skeleton1 from '../Skeleton';

function Content() {
    const [note, setNote] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNote = async () => {
            try {
                const res = await axios.get(`${baseUrl}/note`);
                setNote(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getNote();
    }, []);

    return (
        <>
            <div className='flex flex-col sm:flex-row lg:flex-row justify-between  bg-gradient-to-t from-[#fef3f3] to-white text-2xl font-semibold dark:bg-slate-900 dark:text-white text-gray-700 mb-5 pt-5 pb-5 pl-5 lg:pl-20 dark:from-slate-800'>
                <div className='flex flex-col space-y-4'>
                    <span>Get Notes of Every Languages For Revision.</span>
                    <span className='text-sm'>Last Updated: August 8, 2024</span>
                </div>
                {/* <div className='mt-4 sm:mt-0 lg:mt-4 sm:mr-20 lg:mr-20'>
                    <a href="path-to-your-file.pdf" download>
                        <button className='bg-white text-lg text-red-500 border border-red-500 px-5 py-3 rounded-xl'>Download PDF</button>
                    </a>
                </div> */}
            </div>

            <div className='max-w-screen-xl container mx-auto mb-10 md:px-20 px-4'>
                {loading ? (
                    <Skeleton1 />
                ) : (
                    <div className='max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 justify-items-center'>
                        {note.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Content;

