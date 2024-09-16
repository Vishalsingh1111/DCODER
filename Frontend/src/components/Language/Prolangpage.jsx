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
            <div className="max-w-screen-xl container mx-auto mb-10 px-4 md:px-20">
                {loading ? (
                    <Skeleton1 />
                ) : (
                    <div className="my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

