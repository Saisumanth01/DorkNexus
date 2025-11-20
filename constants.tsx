import React from 'react';
import { SearchCategory, CategoryConfig } from './types';

// Icons as SVG components
export const Icons = {
  Film: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 3v18" /><path d="M17 7.5h4" /><path d="M17 16.5h4" /></svg>
  ),
  Music: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
  ),
  Book: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
  ),
  Disc: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M6.5 17.5 12 12" /></svg>
  ),
  Image: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
  ),
  Search: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
  ),
  ExternalLink: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  Copy: (props: React.SVGProps<SVGSVGElement>) => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
  ),
  History: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
  ),
  Lock: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  ),
  FileText: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
  ),
  Terminal: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></svg>
  ),
  Edit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
  ),
  Trash: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
  ),
  Save: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
  ),
  Github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
  ),
  Cloud: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" /><path d="M19 19a3 3 0 0 1 0-6h-1a5 5 0 0 0-9 3" /><path d="M16 13h.01" /><path d="M12 13.5a2.5 2.5 0 1 0-4-4" /></svg>
  )
};

export const CATEGORIES: CategoryConfig[] = [
  {
    id: SearchCategory.MOVIES,
    label: 'Movies & TV',
    icon: <Icons.Film className="w-5 h-5" />,
    description: 'Find video files in open directories',
    color: 'text-nexus-cyan',
    extensions: ['mkv', 'mp4', 'avi', 'mov', 'mpg', 'wmv', 'flv'],
    baseDork: '(intitle:"index.of" OR intitle:"index of") "Parent Directory" -inurl:(jsp|php|html|aspx|htm|cf|shtml)',
    placeholder: 'Search for movie or show titles...'
  },
  {
    id: SearchCategory.MUSIC,
    label: 'Music',
    icon: <Icons.Music className="w-5 h-5" />,
    description: 'Find high quality audio files',
    color: 'text-pink-400',
    extensions: ['mp3', 'flac', 'wav', 'ogg', 'aac', 'm4a', 'wma'],
    baseDork: '(intitle:"index.of" OR intitle:"index of") "Parent Directory" -inurl:(jsp|php|html|aspx|htm|cf|shtml)',
    placeholder: 'Search for artists or albums...'
  },
  {
    id: SearchCategory.BOOKS,
    label: 'Books',
    icon: <Icons.Book className="w-5 h-5" />,
    description: 'Locate eBooks, PDFs and documents',
    color: 'text-yellow-400',
    extensions: ['pdf', 'epub', 'mobi', 'azw3', 'cbz', 'cbr'],
    baseDork: 'intitle:"index.of" -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)',
    placeholder: 'Search by title or author...'
  },
  {
    id: SearchCategory.LOGINS,
    label: 'Logins',
    icon: <Icons.Lock className="w-5 h-5" />,
    description: 'Find admin portals and login pages',
    color: 'text-red-400',
    extensions: [],
    baseDork: '(inurl:login | inurl:admin | inurl:cpanel | inurl:dashboard | inurl:portal | intitle:"Login")',
    placeholder: 'Target domain (e.g., "target.com") or system type...'
  },
  {
    id: SearchCategory.DOCUMENTS,
    label: 'Sensitive',
    icon: <Icons.FileText className="w-5 h-5" />,
    description: 'Exposed confidential documents',
    color: 'text-orange-400',
    // Moved extensions to baseDork using 'ext:' for better accuracy (not just text match)
    extensions: [],
    baseDork: '(ext:pdf OR ext:docx OR ext:xlsx OR ext:pptx OR ext:txt OR ext:env OR ext:log OR ext:xml OR ext:conf) (intext:confidential OR intext:password OR intext:budget OR intext:internal)',
    placeholder: 'Keywords (e.g., "financial report", "users list")...'
  },
  {
    id: SearchCategory.SOFTWARE_SPECIFIC,
    label: 'Server Info',
    icon: <Icons.Terminal className="w-5 h-5" />,
    description: 'Specific software versions or server pages',
    color: 'text-indigo-400',
    extensions: [],
    baseDork: 'intitle:"index of" "server at"',
    placeholder: 'e.g., "Apache Tomcat/7.0.55" or "Ubuntu"...'
  },
  {
    id: SearchCategory.GITHUB,
    label: 'GitHub',
    icon: <Icons.Github className="w-5 h-5" />,
    description: 'Exposed secrets and configs on GitHub',
    color: 'text-gray-200',
    // Using explicit extension filtering for GitHub searches
    extensions: [],
    baseDork: 'site:github.com (ext:env OR ext:json OR ext:yml OR ext:config OR ext:key OR ext:pem)',
    placeholder: 'e.g., "AWS_ACCESS_KEY" or "password"...'
  },
  {
    id: SearchCategory.CLOUD,
    label: 'Cloud',
    icon: <Icons.Cloud className="w-5 h-5" />,
    description: 'Exposed AWS S3, Azure blobs, etc.',
    color: 'text-blue-300',
    extensions: [],
    baseDork: 'site:s3.amazonaws.com | site:blob.core.windows.net | site:googleapis.com',
    placeholder: 'Company name or file type...'
  },
  {
    id: SearchCategory.SOFTWARE,
    label: 'Software',
    icon: <Icons.Disc className="w-5 h-5" />,
    description: 'Executables, ISOs, and APKs',
    color: 'text-nexus-purple',
    extensions: ['exe', 'dmg', 'iso', 'apk', 'msi', 'rar', 'zip', 'tar.gz'],
    baseDork: '(intitle:"index.of" OR intitle:"index of") "Parent Directory" -inurl:(jsp|php|html|aspx|htm|cf|shtml)',
    placeholder: 'Software name...'
  },
  {
    id: SearchCategory.IMAGES,
    label: 'Images',
    icon: <Icons.Image className="w-5 h-5" />,
    description: 'Image directories',
    color: 'text-nexus-green',
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'],
    baseDork: '(intitle:"index.of" OR intitle:"index of") -inurl:(jsp|php|html|aspx|htm|cf|shtml)',
    placeholder: 'Image topic...'
  },
  {
    id: SearchCategory.MANUAL,
    label: 'Manual',
    icon: <Icons.Edit className="w-5 h-5" />,
    description: 'Write raw dorks from scratch',
    color: 'text-white',
    extensions: [],
    baseDork: '',
    placeholder: 'site:example.com filetype:pdf...'
  }
];