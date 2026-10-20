import React from 'react';
import { useApp } from '../context/AppContext';

function CategoryChips({ categories: propCategories, selectedCategory: propSelected, onSelectCategory }) {
  const context = useApp();
  const categories = propCategories || context.categories;
  const selectedCategory = propSelected !== undefined ? propSelected : context.selectedCategory;
  const handleSelect = onSelectCategory || context.setSelectedCategory;

  return (
    <div className="category-chips-container">
      <div className="chips-scroll-wrapper">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              className={`chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryChips;
