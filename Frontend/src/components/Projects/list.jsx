import React from 'react';

const list = ({ item, onClick }) => {
    return (
        <div onClick={onClick} className=" md:flex-row w-full md:w-[350px] cursor-pointer ">
            <h4 className="text-base text-blue-900 font-semibold text-dark dark:text-white hover:underline">
                {item.header}
            </h4>
        </div>
    );
};
export default list;
