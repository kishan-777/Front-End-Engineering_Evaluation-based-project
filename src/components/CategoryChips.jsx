import React from 'react';

/**
 * CategoryChips Component
 * Horizontal scrollable filter pills to quickly categorize content.
 */
function CategoryChips({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-chips-container">
      <div className="chips-scroll-wrapper">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              className={`chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
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
