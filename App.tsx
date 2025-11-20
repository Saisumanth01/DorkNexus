import React, { useState, useEffect } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { DorkCard } from './components/DorkCard';
import { SavedLibrary } from './components/SavedLibrary';
import { HelpManual } from './components/HelpManual';
import { CATEGORIES, Icons } from './constants';
import { SearchCategory, HistoryItem, SavedDork } from './types';

const App: React.FC = () => {
  const [category, setCategory] = useState<SearchCategory>(SearchCategory.MOVIES);
  const [searchTerm, setSearchTerm] = useState('');
  const [manualDorkInput, setManualDorkInput] = useState(''); // For manual mode
  const [customDorkName, setCustomDorkName] = useState(''); // For saving manual dorks
  const [generatedDork, setGeneratedDork] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [savedDorks, setSavedDorks] = useState<SavedDork[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load persisted data
  useEffect(() => {
    const savedHist = localStorage.getItem('dorkHistory');
    const savedLib = localStorage.getItem('savedDorks');
    if (savedHist) {
      try { setHistory(JSON.parse(savedHist)); } catch (e) { console.error(e); }
    }
    if (savedLib) {
      try { setSavedDorks(JSON.parse(savedLib)); } catch (e) { console.error(e); }
    }
  }, []);

  const addToHistory = (term: string, cat: SearchCategory) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      term,
      category: cat,
      timestamp: Date.now()
    };
    const newHistory = [newItem, ...history].slice(0, 20);
    setHistory(newHistory);
    localStorage.setItem('dorkHistory', JSON.stringify(newHistory));
  };

  const saveDork = () => {
    const dorkToSave = category === SearchCategory.MANUAL ? manualDorkInput : generatedDork;
    if (!dorkToSave) return;

    let defaultName = 'Untitled';
    if (category === SearchCategory.MANUAL) {
       defaultName = manualDorkInput.length > 25 ? manualDorkInput.substring(0, 25) + '...' : manualDorkInput;
    } else {
       defaultName = `${category} - ${searchTerm || 'Untitled'}`;
    }

    const name = customDorkName.trim() || defaultName;
    
    const newSaved: SavedDork = {
      id: Date.now().toString(),
      name,
      dork: dorkToSave,
      category,
      timestamp: Date.now()
    };

    const newLibrary = [newSaved, ...savedDorks];
    setSavedDorks(newLibrary);
    localStorage.setItem('savedDorks', JSON.stringify(newLibrary));
    setCustomDorkName('');
  };

  const deleteSavedDork = (id: string) => {
    const newLib = savedDorks.filter(d => d.id !== id);
    setSavedDorks(newLib);
    localStorage.setItem('savedDorks', JSON.stringify(newLib));
  };

  const loadSavedDork = (saved: SavedDork) => {
    setCategory(saved.category);
    if (saved.category === SearchCategory.MANUAL) {
      setManualDorkInput(saved.dork);
      setCustomDorkName(saved.name);
    } else {
      // Try to reverse engineer term from name if possible, or just set dork directly
      // Simplest is to set the generated dork directly and maybe clear search term
      setGeneratedDork(saved.dork);
      setSearchTerm(saved.name.split(' - ')[1] || '');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to build dork for standard categories
  useEffect(() => {
    if (category === SearchCategory.MANUAL) {
      return;
    }

    if (!searchTerm.trim()) {
      setGeneratedDork('');
      return;
    }

    const config = CATEGORIES.find(c => c.id === category);
    if (!config) return;

    let dork = config.baseDork || '';
    
    // If we have extensions, append them
    if (config.extensions && config.extensions.length > 0) {
      const extString = `(${config.extensions.join('|')})`;
      // If baseDork is empty, just use extString
      dork = dork ? `${dork} ${extString}` : extString;
    }

    const cleanTerm = searchTerm.replace(/"/g, '');
    dork = `${dork} "${cleanTerm}"`;

    setGeneratedDork(dork);
  }, [searchTerm, category]);

  const activeConfig = CATEGORIES.find(c => c.id === category);

  return (
    <div className="min-h-screen bg-nexus-900 text-gray-200 font-sans pb-20 selection:bg-nexus-cyan selection:text-nexus-900">
      
      {/* Navigation & Header */}
      <header className="sticky top-0 z-50 border-b border-nexus-800 bg-nexus-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-nexus-900/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-nexus-cyan to-nexus-purple flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Icons.Search className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">DorkNexus</h1>
          </div>
          <div className="flex gap-4 text-sm font-medium">
             <button 
                onClick={() => setShowHistory(!showHistory)}
                className={`flex items-center gap-2 transition-colors ${showHistory ? 'text-nexus-cyan' : 'text-gray-400 hover:text-white'}`}
             >
                <Icons.History className="w-4 h-4" />
                History
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12">
        
        {/* Hero Section */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan to-nexus-purple">Intelligence</span> Gathering
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Construct precision Google queries to uncover hidden files, sensitive portals, and exposed directories.
          </p>
        </div>

        <CategorySelector selected={category} onSelect={setCategory} />

        {/* Input Area */}
        <div className="relative z-10 bg-nexus-800/40 rounded-2xl p-1.5 shadow-2xl shadow-black/50 border border-nexus-700/50 backdrop-blur-sm animate-slide-up">
          
          {category === SearchCategory.MANUAL ? (
            <div className="p-4">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-bold text-nexus-cyan uppercase tracking-wider">Raw Dork Editor</span>
               </div>
               <textarea 
                 value={manualDorkInput}
                 onChange={(e) => setManualDorkInput(e.target.value)}
                 placeholder="Enter your custom Google Dork here (e.g., site:target.com filetype:pdf)..."
                 className="w-full h-32 bg-nexus-900/80 border border-nexus-700 rounded-lg p-4 text-sm font-mono text-white focus:border-nexus-cyan focus:ring-1 focus:ring-nexus-cyan outline-none resize-none"
               />
               <div className="flex gap-2 mt-4">
                 <input 
                   type="text" 
                   value={customDorkName}
                   onChange={(e) => setCustomDorkName(e.target.value)}
                   placeholder="Name this dork (optional)"
                   className="flex-1 bg-nexus-900/50 border border-nexus-700 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-nexus-cyan"
                 />
                 <button 
                   onClick={saveDork}
                   disabled={!manualDorkInput.trim()}
                   className="bg-nexus-700 hover:bg-nexus-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   <Icons.Save className="w-4 h-4" /> Save
                 </button>
               </div>
               
               <HelpManual />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2 p-2">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                   {activeConfig?.icon}
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={activeConfig?.placeholder || `Search...`}
                  className="w-full h-14 bg-nexus-900/50 border border-transparent focus:border-nexus-700 rounded-xl text-white placeholder-gray-500 pl-12 pr-4 text-lg outline-none transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && generatedDork) {
                       window.open(`https://www.google.com/search?q=${encodeURIComponent(generatedDork)}`, '_blank');
                       addToHistory(searchTerm, category);
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Results Area */}
        {(generatedDork || (category === SearchCategory.MANUAL && manualDorkInput)) && (
          <div className="mt-8 relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-nexus-cyan/20 to-nexus-purple/20 blur-xl opacity-50 rounded-full pointer-events-none" />
             <DorkCard 
                query={category === SearchCategory.MANUAL ? manualDorkInput : generatedDork} 
                description={activeConfig?.description} 
             />
             
             {/* Save Button for Standard modes */}
             {category !== SearchCategory.MANUAL && generatedDork && (
               <div className="flex justify-center mt-4">
                 <div className="inline-flex items-center gap-2 bg-nexus-800/50 rounded-lg p-1 border border-nexus-700">
                    <input 
                      type="text" 
                      value={customDorkName}
                      onChange={(e) => setCustomDorkName(e.target.value)}
                      placeholder="Save as..."
                      className="bg-transparent border-none text-sm text-white px-3 py-1 outline-none w-40 placeholder-gray-500"
                    />
                    <button 
                      onClick={saveDork}
                      className="bg-nexus-700 hover:bg-nexus-600 text-gray-200 p-2 rounded-md transition-colors"
                      title="Save to Library"
                    >
                      <Icons.Save className="w-4 h-4" />
                    </button>
                 </div>
               </div>
             )}
          </div>
        )}

        {/* Content Switcher: Library vs History */}
        {showHistory ? (
          <div className="max-w-3xl mx-auto mt-16 animate-fade-in">
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-nexus-800 pb-2">
              <Icons.History className="w-4 h-4" />
              Recent Activity
            </h3>
            <div className="grid gap-3">
              {history.length === 0 && <p className="text-gray-600 text-center py-8">No history yet.</p>}
              {history.map((item) => {
                 const catConfig = CATEGORIES.find(c => c.id === item.category);
                 return (
                   <div 
                     key={item.id}
                     onClick={() => {
                       setCategory(item.category);
                       setSearchTerm(item.term);
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                     className="group flex items-center justify-between p-4 rounded-xl bg-nexus-800/20 border border-nexus-800/50 hover:border-nexus-700 hover:bg-nexus-800/50 cursor-pointer transition-all"
                   >
                     <div className="flex items-center gap-4">
                       <div className={`p-2 rounded-lg bg-nexus-900/80 border border-nexus-800 ${catConfig?.color || 'text-gray-500'}`}>
                         {catConfig?.icon || <Icons.Search className="w-4 h-4" />}
                       </div>
                       <div>
                         <span className="text-gray-200 font-medium group-hover:text-white block">{item.term}</span>
                         <span className="text-xs text-gray-500">{catConfig?.label || 'Unknown'}</span>
                       </div>
                     </div>
                     <span className="text-xs text-gray-600 font-mono bg-nexus-900 px-2 py-1 rounded">
                       {new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                     </span>
                   </div>
                 );
              })}
            </div>
          </div>
        ) : (
          <SavedLibrary 
            savedDorks={savedDorks} 
            onLoad={loadSavedDork}
            onDelete={deleteSavedDork}
          />
        )}

      </main>
    </div>
  );
};

export default App;