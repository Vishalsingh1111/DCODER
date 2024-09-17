import React from 'react';

const truncateText = (text, length) => {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
};

const Projectcard = ({ item, onClick }) => {
    return (
        <div className='mx-auto max-w-screen-lg'>
            <div onClick={onClick}>
                <div className="h-full border-t bg-[#ffffff] dark:border shadow shadow-black/40 group dark:border-gray-600 hover:shadow-md hover:shadow-black/70 rounded-xl cursor-pointer hover:shadow-lg space-y-2 dark:bg-slate-900 dark:text-white">
                    <img src={item.image1} alt="Project" className="w-full h-48 object-cover p-6 pb-0 rounded-t" />
                    <div className='bg-gradient-to-t from-[#f2f4fb] to-[#ffffff] p-6 pt-2 rounded-xl space-y-3 dark:from-slate-800'>
                        <h3 className="mt-2 text-xl">{truncateText(item.header, 40)}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{truncateText(item.text, 60)}</p>
                        <p className='text-red-500'>Read More ..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projectcard;
