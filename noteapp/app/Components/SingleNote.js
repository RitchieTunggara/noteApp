import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const SingleNote = () => {
  return (
    <div className=" mt-4 mx-2 rounded-lg flex flex-col gap-2 border text-[12px] flex-1 border-red-500 bg-white shadow-md text-center p-3">
      <div className="flex justify-between items-center">
        {/* Header note */}
        <div className="text-[10px] text-gray-600 mt-1">
            08 October 2024
        </div>
        <div className="w-3 h-3">
            <FontAwesomeIcon className='text-gray-500 select-none cursor-pointer'
            icon={faEllipsis}/>
        </div>
      </div>
      {/*  Title's Note */}
      <h3 className="mt-0.5 font-bold text-black">
        lorem ipsum
      </h3>
      {/* Note Body */}
      <p className="mt-2 text-black text-[11px]">
       Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day.
      </p>
      {/* Category Note */}
      <div className="text-[10px] flex gap-2">
        <div className="bg-red-600 p-1 rounded-md text-white px-3">study</div>
        <div className="bg-red-600 p-1 rounded-md text-white px-3">projects</div>
      </div>
    </div>
  )
}

export default SingleNote
