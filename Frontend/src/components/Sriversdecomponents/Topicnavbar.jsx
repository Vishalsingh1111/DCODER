import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Topicnavbar() {
    const location = useLocation();

    const links = [
        { to: '/Basicdsapage', label: 'Basic DSA' },
        { to: '/Arraypage', label: 'Array & Matrix' },
        { to: '/Stringpage', label: 'String' },
        { to: '/Binarysearchpage', label: 'Binary Search' },
        { to: '/Stackqueuepage', label: 'Stack & Queue' },
        { to: '/Linkedlistpage', label: 'LinkedList' },
        { to: '/Binarytreepage', label: 'Binary Tree' },
        { to: '/Bstpage', label: 'Binary Search Tree' },
        { to: '/Graphpage', label: 'Graph' },
        { to: '/Heappage', label: 'Heap' },
        { to: '/Triepage', label: 'Trie' },
        { to: '/Dppage', label: 'Dynamic Programming' }
    ];

    return (
        <div className='text-left mx-4 dark:bg-slate-800 dark:text-gray-500 rounded md:mx-20 w-[250px] bg-white shadow justify-left'>
            <div className='bg-gray-500  dark:bg-slate-700 py-3 px-3 text-left rounded-t'>
                <span className='text-white text-xl'>STRIVER'S SDE SHEET</span>
            </div>

            <div className='flex flex-col'>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        className={`px-3 py-2 border-b ${location.pathname === link.to ? 'bg-gray-200' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Topicnavbar;
