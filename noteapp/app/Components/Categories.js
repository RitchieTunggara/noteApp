import React, { useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState(['All']); // Default categories
  const [activeCategory, setActiveCategory] = useState('All'); // Store the active category
  const [newCategory, setNewCategory] = useState(''); // Store the new category input

  // Handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category); // Set active category
  };

  // Handle adding a new category
  const handleAddCategory = (e) => {
    e.preventDefault(); // Prevent form from refreshing
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]); // Add new category
      setNewCategory(''); // Clear input field
    }
  };

  return (
    <div>
      {/* Category buttons */}
      <nav className="gap-4 mt-5 inline-flex rounded-lg border border-sky-100 bg-blue-600 p-1" aria-label="Tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`inline-block rounded-md px-4 py-2 text-sm ${
              activeCategory === category ? 'bg-white text-blue-500 shadow-sm' : 'text-white hover:text-gray-700'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Input field to add new categories */}
      {/* <form onSubmit={handleAddCategory} className="mt-4 flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="inline-block rounded border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
          Add Category
        </button>
      </form> */}
    </div>
  );
};

export default Categories;