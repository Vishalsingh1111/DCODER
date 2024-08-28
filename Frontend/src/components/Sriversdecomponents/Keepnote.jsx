import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#root');

const NoteModal = ({ isOpen, onRequestClose, noteKey }) => {
    const [note, setNote] = useState('');

    useEffect(() => {
        if (noteKey) {
            const storedNote = localStorage.getItem(`note-${noteKey}`);
            if (storedNote) {
                setNote(storedNote);
            }
        }
    }, [noteKey]);

    const handleSave = () => {
        localStorage.setItem(`note-${noteKey}`, note);
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Note Modal"
            className="bg-white rounded-lg shadow-lg p-4 w-1/2  min-h-[500px] m-4 sm:m-6 md:m-10 lg:m-20 dark:bg-slate-700 dark:text-white"
            overlayClassName="fixed inset-0 bg-black bg-opacity-35 flex justify-center items-center">
            <div className="flex justify-between items-center py-2 mb-4 border-b">
                <h2 className="text-xl font-bold">Save Notes</h2>
                <button
                    className="text-white bg-purple-500 px-2 py-1 rounded hover:bg-purple-800"
                    onClick={onRequestClose}>
                    Close
                </button>
            </div>
            <textarea
                className="w-full px-2 rounded border dark:bg-slate-900 dark:text-white dark:border-none"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{ height: '450px' }}
            ></textarea>
            <div className="flex justify-end mt-2 space-x-2">
                <button
                    className="bg-gray-500 hover:bg-gray-800 text-white px-2 py-1 rounded"
                    onClick={onRequestClose}>
                    Cancel
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </Modal>

    );
};

export default NoteModal;
