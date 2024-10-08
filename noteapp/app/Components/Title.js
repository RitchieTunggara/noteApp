import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky} from '@fortawesome/free-solid-svg-icons';

function Title() {
  return (
    <div className="flex gap-2 items-center">
        <FontAwesomeIcon
            className={`w-10 h-10 p-2 bg-red-500 rounded-md text-white`}
            icon={faNoteSticky}
        />

        <div>
            <span className="font-bold text-red">Quick</span>
            <span>Notes</span>
        </div>

        <a
            className="inline-block rounded border border-indigo-600 px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 ml-auto"
            href="#"
            >
            Add a note
        </a>
    </div>
  )
}

export default Title
