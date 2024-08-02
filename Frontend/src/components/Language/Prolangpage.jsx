import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card'
function Content() {

    //calling Api

    const [note, setNote] = useState([]);
    useEffect(() => {
        const getNote = async () => {
            try {
                const res = await axios.get("http://localhost:4001/note");
                console.log("res.data");
                setNote(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getNote();
    }, []);


    return (
        <>

            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='pt-10 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We are providing the best content<span className='text-red-500 font-bold'> Here!</span>
                    </h1>
                    <p className='mt-5'>
                        Explore our platform for free access to a wide range of educational content, expertly curated just for you. Enhance your knowledge without any cost!
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 justify-items-center'>
                    {note.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>


        </>
    )
}

export default Content