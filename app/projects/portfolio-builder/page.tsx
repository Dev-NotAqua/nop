'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'portfolio-builder-data';
const THEME_KEY = 'portfolio-builder-theme';

const defaultProjects = [
  { name: 'Modern Landing Page', tags: ['React', 'UI/UX'] },
  { name: 'E-commerce UI', tags: ['Next.js', 'Tailwind'] },
  { name: 'Blog Platform', tags: ['TypeScript', 'Content'] },
];

export default function PortfolioBuilderDemo() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [projects, setProjects] = useState<{ name: string; tags: string[] }[]>([]);
  const [newProject, setNewProject] = useState('');
  const [newTags, setNewTags] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setName(parsed.name || '');
      setAvatar(parsed.avatar || null);
      // Type guard: ensure projects is an array of {name, tags}
      if (Array.isArray(parsed.projects) && parsed.projects.every((p: { name: string; tags: string[] }) => typeof p?.name === 'string' && Array.isArray(p?.tags))) {
        setProjects(parsed.projects);
      } else {
        setProjects(defaultProjects);
      }
    } else {
      setName('Mario Rossi');
      setAvatar(null);
      setProjects(defaultProjects);
    }
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, avatar, projects }));
  }, [name, avatar, projects]);
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.body.className = theme === 'light' ? 'bg-white text-black' : '';
  }, [theme]);

  function addProject() {
    if (newProject.trim()) {
      setProjects([...projects, { name: newProject.trim(), tags: newTags.split(',').map(t => t.trim()).filter(Boolean) }]);
      setNewProject('');
      setNewTags('');
    }
  }
  function removeProject(idx: number) {
    setProjects(projects.filter((_, i) => i !== idx));
  }
  function addTag(idx: number, tag: string) {
    if (!tag.trim()) return;
    setProjects(projects.map((p, i) => i === idx ? { ...p, tags: [...p.tags, tag.trim()] } : p));
  }
  function removeTag(idx: number, tagIdx: number) {
    setProjects(projects.map((p, i) => i === idx ? { ...p, tags: p.tags.filter((_, t) => t !== tagIdx) } : p));
  }
  function resetPortfolio() {
    setName('Mario Rossi');
    setAvatar(null);
    setProjects(defaultProjects);
  }
  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  }
  async function downloadPDF() {
    if (typeof window === 'undefined') return;
    const jsPDF = (await import('jspdf')).jsPDF;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Portfolio', 10, 15);
    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 10, 30);
    let y = 40;
    projects.forEach((p, i) => {
      doc.text(`Project ${i + 1}: ${p.name}`, 10, y);
      if (p.tags.length) doc.text(`Tags: ${p.tags.join(', ')}`, 15, y + 7);
      y += 15;
    });
    doc.save('portfolio.pdf');
  }

  return (
    <main className={theme === 'light' ? 'bg-white text-black min-h-screen' : 'min-h-screen'}>
      <div className="flex justify-end p-4">
        <button className="premium-btn mr-2" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? '🌙 Dark' : '☀️ Light'}</button>
        <button className="premium-btn" onClick={resetPortfolio}>Reset</button>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <div className="glass-card p-8 max-w-lg w-full flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Portfolio Builder Live Demo</h1>
          <p className="text-secondary-300 text-center">Crea e personalizza il tuo portfolio in tempo reale!</p>
          <div className="w-full flex flex-col gap-3 items-center">
            <label className="text-secondary-200 font-semibold">Avatar:</label>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-3xl text-white overflow-hidden">
                {avatar ? <Image src={avatar} alt="avatar" className="w-full h-full object-cover" width={80} height={80} unoptimized /> : '👤'}
              </div>
              <input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleAvatarChange} />
              <button className="premium-btn" onClick={() => fileInputRef.current?.click()}>Upload</button>
              {avatar && <button className="text-red-400 hover:text-red-600 ml-2" onClick={() => setAvatar(null)} title="Rimuovi">✕</button>}
            </div>
            <label className="text-secondary-200 font-semibold">Nome:</label>
            <input
              className="w-full p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none mb-2"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Il tuo nome"
            />
            <label className="text-secondary-200 font-semibold">Progetti:</label>
            <div className="flex gap-2 mb-2 w-full">
              <input
                className="flex-1 p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none"
                value={newProject}
                onChange={e => setNewProject(e.target.value)}
                placeholder="Aggiungi un progetto"
              />
              <input
                className="flex-1 p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none"
                value={newTags}
                onChange={e => setNewTags(e.target.value)}
                placeholder="Tag (es: React, UI)"
              />
              <button className="premium-btn px-4 py-2" onClick={addProject} type="button">Aggiungi</button>
            </div>
            <ul className="flex flex-col gap-1 w-full">
              {projects.map((proj, idx) => (
                <li key={idx} className="flex flex-col bg-secondary-800/60 rounded p-2 text-sm text-secondary-100 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{proj.name}</span>
                    <button className="text-red-400 hover:text-red-600 ml-2" onClick={() => removeProject(idx)} title="Rimuovi">✕</button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        {tag}
                        <button className="ml-1 text-red-400 hover:text-red-600" onClick={() => removeTag(idx, tagIdx)} title="Rimuovi tag">×</button>
                      </span>
                    ))}
                    <input
                      className="w-20 p-1 rounded bg-secondary-700/60 text-secondary-100 text-xs"
                      placeholder="+tag"
                      onKeyDown={e => {
                        if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                          addTag(idx, e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full bg-secondary-800/60 rounded-xl p-6 flex flex-col items-center gap-3 shadow-md mt-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-3xl text-white mb-2 overflow-hidden">
              {avatar ? <Image src={avatar} alt="avatar" className="w-full h-full object-cover" width={80} height={80} unoptimized /> : '👤'}
            </div>
            <div className="font-semibold text-lg text-white">{name || '—'}</div>
            <div className="flex flex-col gap-1 w-full">
              {projects.length === 0 ? (
                <div className="text-secondary-400 italic">Nessun progetto</div>
              ) : projects.map((proj, idx) => (
                <div key={idx} className="bg-secondary-700/60 rounded p-2 text-sm text-secondary-100 flex flex-col gap-1">
                  <span className="font-semibold">{proj.name}</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full gap-2 mt-4">
            <button className="premium-btn flex-1" onClick={downloadPDF}>Download PDF</button>
            <Link href="/" className="premium-btn flex-1 text-center">Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
} 