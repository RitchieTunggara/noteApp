"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';


const SingleNote = ({ date, title, content, categories = []}) => {
  
  return (
    <div className=" mt-4 mx-2 rounded-lg flex flex-col gap-2 border text-[12px] flex-1 border-red-500 bg-white shadow-md text-center p-3">
      <div className="flex justify-between items-center">
        {/* Header note */}
        <div className="text-[10px] text-gray-600 mt-1">
          {date}
        </div>
        <div className="w-3 h-3">
            <FontAwesomeIcon className='text-gray-500 select-none cursor-pointer'
            icon={faEllipsis}/>
        </div>
      </div>
      {/*  Title's Note */}
      <h3 className="mt-0.5 font-bold text-black">
        {title}
      </h3>
      {/* Note Body */}
      <p className="mt-2 text-black text-[11px]">
        {content} 
      </p>
      <div className="flex-grow"></div>
      {/* Category Note */}
      <div className="text-[10px] flex gap-2">
        {categories.map((cat, index) => (
          <div key={index} className="bg-red-600 p-1 rounded-md text-white px-3">
            <a 
              key={index} 
              href={`#${cat}`} 
              className="bg-red-600 p-1 rounded-md text-white px-3"
            >
              {cat}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleNote;
