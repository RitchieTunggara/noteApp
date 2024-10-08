import React from 'react';
import SingleNote from './SingleNote';

const NotesArea = () => {
  return (
    <div className="grid grid-cols-3 h-[500px] overflow-auto mt-4">
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
      <SingleNote/>
    </div>
  )
}

export default NotesArea
