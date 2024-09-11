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
        <div className='max-w-screen-xl container mx-auto md:px-20 px-4'>
            <div className='pt-10 flex flex-col items-center justify-center text-center'>
                <h1 className='text-2xl text-black dark:text-white  md:text-4xl'>
                    We are providing the best content<span className='text-red-500 font-bold'> Here!</span>
                </h1>
                <p className='mt-5'>
                    Explore our platform for free access to a wide range of educational content, expertly curated just for you. Enhance your knowledge without any cost!
                </p>
            </div>

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
    );
}

export default Content;

