import React from 'react';
import { Icons } from '../constants';

export const HelpManual: React.FC = () => {
  return (
    <div className="mt-6 bg-nexus-900/50 border border-nexus-800 rounded-xl overflow-hidden animate-fade-in">
      <div className="bg-nexus-800/50 p-4 border-b border-nexus-700 flex items-center gap-2">
        <Icons.Book className="w-4 h-4 text-nexus-cyan" />
        <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider">Dorking Reference Manual</h3>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="text-nexus-cyan font-bold mb-3 border-b border-nexus-800 pb-1">Basic Operators</h4>
          <ul className="space-y-3">
            <li className="flex flex-col gap-1">
              <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">site:</code> <span className="text-gray-400">Limit results to a site</span></div>
              <p className="text-xs text-gray-500">Example: <span className="text-gray-300">site:github.com password</span></p>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">filetype:</code> <span className="text-gray-400">Specific file extensions</span></div>
              <p className="text-xs text-gray-500">Example: <span className="text-gray-300">filetype:pdf confidential</span></p>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">inurl:</code> <span className="text-gray-400">Find text in the URL</span></div>
              <p className="text-xs text-gray-500">Example: <span className="text-gray-300">inurl:admin-login.php</span></p>
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">intitle:</code> <span className="text-gray-400">Find text in title</span></div>
              <p className="text-xs text-gray-500">Example: <span className="text-gray-300">intitle:"index of"</span></p>
            </li>
          </ul>
        </div>
         <div>
          <h4 className="text-nexus-cyan font-bold mb-3 border-b border-nexus-800 pb-1">Advanced Syntax</h4>
          <ul className="space-y-3">
            <li className="flex flex-col gap-1">
               <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">-operator</code> <span className="text-gray-400">Exclude results</span></div>
               <p className="text-xs text-gray-500">Example: <span className="text-gray-300">site:gov -site:nasa.gov</span></p>
            </li>
            <li className="flex flex-col gap-1">
               <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">"phrase"</code> <span className="text-gray-400">Exact match</span></div>
               <p className="text-xs text-gray-500">Example: <span className="text-gray-300">"internal use only"</span></p>
            </li>
            <li className="flex flex-col gap-1">
               <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">|</code> or <code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">OR</code> <span className="text-gray-400">Boolean OR</span></div>
               <p className="text-xs text-gray-500">Example: <span className="text-gray-300">site:facebook.com | site:twitter.com</span></p>
            </li>
            <li className="flex flex-col gap-1">
               <div className="flex justify-between items-center"><code className="text-nexus-purple font-mono bg-nexus-900 px-1.5 rounded">*</code> <span className="text-gray-400">Wildcard</span></div>
               <p className="text-xs text-gray-500">Example: <span className="text-gray-300">site:*.edu</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};