import React, { useState } from 'react';

function Sheetheadingtitle() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    };

    return (
        <div className='text-center mb-5 '>
            <div className='mb-5 flex justify-center '>
                <select
                    className='bg-green-600 text-white text-left pl-2 w-[250px] py-3 rounded-t-md text-xl'
                    onChange={handleSelectChange}
                    value={selectedCategory}
                >
                    <option value="" disabled>SORT PROBLEMS</option>
                    <option value="/Miscellaneous">Miscellaneous</option>
                    <option value="/Easy">Easy</option>
                    <option value="/Medium">Medium</option>
                    <option value="/Hard">Hard</option>
                </select>
            </div>
        </div>
    );
}

export default Sheetheadingtitle;
