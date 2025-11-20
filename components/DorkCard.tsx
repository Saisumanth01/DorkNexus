import React from 'react';
import { Icons } from '../constants';

interface DorkCardProps {
  query: string;
  description?: string;
}

export const DorkCard: React.FC<DorkCardProps> = ({ query, description }) => {
  const handleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 animate-slide-up">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-nexus-cyan to-nexus-purple rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
        
        <div className="relative bg-nexus-900 border border-nexus-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-6">
          
          {/* Icon Circle */}
          <div className="w-20 h-20 bg-nexus-800 rounded-full flex items-center justify-center border border-nexus-700 shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-transform duration-300">
            <Icons.Search className="w-8 h-8 text-nexus-cyan" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Ready to Scan</h3>
            {description && (
              <p className="text-gray-400 text-sm max-w-xs mx-auto">{description}</p>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-white text-nexus-900 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] transform active:scale-95"
          >
            <span>LAUNCH RESULTS</span>
            <Icons.ExternalLink className="w-4 h-4" />
          </button>
          
           <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
            Query Generated Successfully
          </p>
        </div>
      </div>
    </div>
  );
};