import React from 'react'

const Categories = (props) => {
  return (
    <div>
        <div>
            <nav className="gap-4 mt-5 inline-flex rounded-lg border border-sky-100 bg-blue-600 p-1" arial-label="Tabs">
                <button
                    className="inline-block rounded-md px-4 py-2 text-sm text-white hover:text-gray-700 focus:relative"
                >
                    All
                </button>

                <button
                    className="inline-block rounded-md px-4 py-2 text-sm text-white hover:text-gray-700 focus:relative"
                >
                    Study
                </button>

                <button
                    className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
                >
                    Projects
                </button>
            </nav>
        </div>
    </div>
  )
}

export default Categories;
