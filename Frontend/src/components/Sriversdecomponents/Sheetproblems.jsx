import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import leetcodesvg from '../../../public/leetcode.svg';
import notesvg from '../../../public/note.svg';
import NoteModal from './Keepnote';
import emptyStar from '../../../public/empty-start.svg';
import filledStar from '../../../public/fill-star.svg';

function Sheetproblems({ item }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNoteKey, setCurrentNoteKey] = useState('');
    const [isStarred, setIsStarred] = useState(false);

    useEffect(() => {
        const storedCheckboxState = localStorage.getItem(`checkbox-${item.name}`);
        if (storedCheckboxState !== null) {
            setIsChecked(JSON.parse(storedCheckboxState));
        }

        const storedStarState = localStorage.getItem(`starred-${item.name}`);
        if (storedStarState !== null) {
            setIsStarred(JSON.parse(storedStarState));
        }
    }, [item.name]);

    const handleCheckboxChange = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        localStorage.setItem(`checkbox-${item.name}`, JSON.stringify(newState));
    };

    const handleStarClick = () => {
        const newState = !isStarred;
        setIsStarred(newState);
        localStorage.setItem(`starred-${item.name}`, JSON.stringify(newState));
    };

    const getLevelClass = (level) => {
        switch (level) {
            case 'Hard':
                return 'bg-red-500';
            case 'Medium':
                return 'bg-yellow-500';
            case 'Easy':
                return 'bg-green-500';
            default:
                return '';
        }
    };

    const handleNoteClick = (key) => {
        setCurrentNoteKey(key);
        setIsModalOpen(true);
    };

    return (
        <>
            <tr className={`dark:bg-slate-900 dark:text-white border-t-2 border-gray-400 ${isChecked ? 'bg-gray-300' : ''}`}>
                <td className='text-center'>
                    <label>
                        <input
                            type="checkbox"
                            className="checkbox dark:bg-slate-700 dark:text-white"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                    </label>
                </td>
                <td className='border-r-2 border-gray-400 border-l-2'><span>{item.name}</span></td>
                <td className='border-r-2 border-gray-400 text-left'>
                    <span className={`${getLevelClass(item.Level)} text-white px-2 py-1 w-16 rounded-lg`}>{item.Level}</span>
                </td>
                <td className='border-r-2 border-gray-400 text-center'><Link to={item.article}>Soon</Link></td>
                <td className='text-center'><Link to={item.link} className="text-red-500 hover:underline"><img src={leetcodesvg} alt="LeetCode" className="mx-auto w-[23px]" /></Link></td>
                <td className='border-l-2 border-gray-400 text-center'>
                    <img
                        src={isStarred ? filledStar : emptyStar}
                        alt="Revision"
                        className='cursor-pointer w-[26px] mx-auto'
                        onClick={handleStarClick}
                    />
                </td>
                <td className='border-l-2 border-gray-400'>
                    <img
                        src={notesvg}
                        alt="Note"
                        className='cursor-pointer w-[26px] mx-auto'
                        onClick={() => handleNoteClick(item.name)}
                    />
                </td>
            </tr>
            <NoteModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                noteKey={currentNoteKey}
            />
        </>
    );
}

export default Sheetproblems;
