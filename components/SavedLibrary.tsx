import React from 'react';
import { SavedDork } from '../types';
import { Icons, CATEGORIES } from '../constants';

interface SavedLibraryProps {
  savedDorks: SavedDork[];
  onLoad: (dork: SavedDork) => void;
  onDelete: (id: string) => void;
}

export const SavedLibrary: React.FC<SavedLibraryProps> = ({ savedDorks, onLoad, onDelete }) => {
  if (savedDorks.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto mt-12 animate-fade-in">
      <div className="flex items-center justify-between mb-6 border-b border-nexus-800 pb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Icons.Save className="w-5 h-5 text-nexus-cyan" />
          Saved Library
        </h3>
        <span className="text-xs font-mono text-nexus-purple bg-nexus-900/50 px-3 py-1 rounded-full border border-nexus-800">
          {savedDorks.length} ITEMS
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedDorks.map((item) => {
          const categoryConfig = CATEGORIES.find(c => c.id === item.category);
          return (
            <div 
              key={item.id}
              className="group bg-nexus-800/30 border border-nexus-800 rounded-xl p-4 hover:border-nexus-600 hover:bg-nexus-800/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`${categoryConfig?.color || 'text-gray-400'}`}>
                      {categoryConfig?.icon || <Icons.Search className="w-4 h-4"/>}
                    </span>
                    <span className="font-semibold text-gray-200 group-hover:text-white truncate max-w-[180px]">
                      {item.name || 'Untitled Dork'}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(item.id);
                    }}
                    className="text-gray-600 hover:text-red-400 transition-colors p-1"
                    title="Delete"
                  >
                    <Icons.Trash className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs font-mono text-gray-500 line-clamp-2 bg-nexus-900/50 p-2 rounded border border-nexus-800/50 mb-3">
                  {item.dork}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-gray-600 font-mono">
                  {new Date(item.timestamp).toLocaleDateString()}
                </span>
                <button
                  onClick={() => onLoad(item)}
                  className="text-xs font-bold text-nexus-cyan hover:text-white uppercase tracking-wider flex items-center gap-1"
                >
                  Load <Icons.ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
