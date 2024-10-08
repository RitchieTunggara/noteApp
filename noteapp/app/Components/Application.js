import React from 'react';
import Title from './Title';
import Categories from './Categories';
import NotesArea from './NotesArea';

function Application(props) {
  return (
    <div className="w-full min-h-screen lg:max-w-[1080px] lg:max-h-[720px] bg-white rounded-md shadow-md p-7 mx-auto text-center">
      <Title />
      <Categories />
      <NotesArea />
    </div>
  );
}

export default Application;