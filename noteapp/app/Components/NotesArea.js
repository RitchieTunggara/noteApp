"use client";
import React, { useState } from 'react';
import SingleNote from './SingleNote';

const NotesArea = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Test Note',
      content: 'This is a test note content',
      categories: ['All', 'project'],
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: 'Another Note',
      content: 'This is another test note',
      categories: ['study', 'projects'],
      date: new Date().toLocaleDateString(),
    },
  ]);

  return (
    <div className="h-[500px] overflow-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <SingleNote 
            key={note.id} 
            title={note.title} 
            content={note.content} 
            categories={note.categories}
            date={note.date}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesArea
