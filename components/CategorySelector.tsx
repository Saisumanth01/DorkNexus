import React from 'react';
import { CATEGORIES } from '../constants';
import { SearchCategory } from '../types';

interface CategorySelectorProps {
  selected: SearchCategory;
  onSelect: (id: SearchCategory) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex overflow-x-auto pb-4 gap-3 hide-scrollbar snap-x">
        {CATEGORIES.map((cat) => {
          const isSelected = selected === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 border shrink-0 snap-start
                ${isSelected 
                  ? 'bg-nexus-800 border-nexus-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-105' 
                  : 'bg-nexus-900/50 border-nexus-700/50 text-gray-400 hover:border-nexus-600 hover:text-gray-200 hover:bg-nexus-800'
                }
              `}
            >
              <span className={`${isSelected ? cat.color : 'text-gray-500'} transition-colors`}>
                {cat.icon}
              </span>
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
