"use client";
import React, { useState } from 'react';
import Title from './Title';
import Categories from './Categories';
import NotesArea from './NotesArea';

function Application(props) {
  const [notes, setNotes] = useState([]); // Manage notes in Application

  const handleSaveNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]); // Add new note to notes state
  };

  return (
    <div className="w-full min-h-screen lg:max-w-[1080px] lg:max-h-[720px] bg-white rounded-md shadow-md p-7 mx-auto text-center">
      <Title onSave={handleSaveNote}/>
      <Categories />
      <NotesArea notes={notes}/>
    </div>
  );
}

export default Application;