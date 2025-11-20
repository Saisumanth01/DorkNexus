import React from 'react';

export enum SearchCategory {
  MOVIES = 'MOVIES',
  MUSIC = 'MUSIC',
  BOOKS = 'BOOKS',
  SOFTWARE = 'SOFTWARE',
  IMAGES = 'IMAGES',
  LOGINS = 'LOGINS',
  DOCUMENTS = 'DOCUMENTS',
  SOFTWARE_SPECIFIC = 'SOFTWARE_SPECIFIC',
  GITHUB = 'GITHUB',
  CLOUD = 'CLOUD',
  MANUAL = 'MANUAL',
}

export interface CategoryConfig {
  id: SearchCategory;
  label: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  extensions?: string[];
  baseDork?: string;
  placeholder?: string;
}

export interface DorkResult {
  title: string;
  query: string;
  description: string;
  engineUrl: string;
}

export interface HistoryItem {
  id: string;
  term: string;
  category: SearchCategory;
  timestamp: number;
}

export interface SavedDork {
  id: string;
  name: string;
  dork: string;
  category: SearchCategory;
  timestamp: number;
}