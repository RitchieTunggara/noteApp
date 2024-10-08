"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { TagsInput } from "react-tag-input-component"; 

function NoteWindow({ onClose, onSave }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categories, setCategories] = useState(['All']);

    const handleSave = () => {
        // Create a new note object
        const newNote = {
            title,
            content,
            categories,
            date: new Date().toLocaleDateString(), // Automatically add the date
        };
        
        // Call the onSave function passed from the parent to add the note
        onSave(newNote);
        
        // Close the modal after saving
        onClose();
    };

    return (
        <div className="poppins p-8 w-[580px] h-[450px] bg-white absolute left-10 top-[-20px]">
            <div className="flex poppins-bold justify-between items-center">
                <div>Add a note</div>
                <FontAwesomeIcon 
                    className="size-4 cursor-pointer" 
                    icon={faClose}
                    onClick={onClose}
                />
            </div>
            <div>
                <label>
                    Note Title
                </label>
                <textarea 
                    placeholder="Add your title here ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 mt-1 outline-none rounded-md w-full h-10 text-[11px]">
                </textarea>
                <label>
                    Note Content
                </label>
                <textarea 
                    placeholder="Add your content here ..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="p-3 mt-1 outline-none rounded-md w-full h-28 text-[11px]">
                </textarea>
                <div>
                    <label>
                        Categories
                    </label>
                    <TagsInput
                        value={categories}
                        onChange={setCategories}
                        name="tags"
                        placeHolder="tags"
                    />
                    <em className="text-[10px]">press enter after input one tag</em>
                </div>
            </div>
            <div>
                <button 
                    onClick={handleSave}
                    className="inline-block rounded border border-indigo-600 px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 ml-auto cursor-pointer">
                    Save
                </button>
            </div>
        </div>
    );
}

export default NoteWindow;