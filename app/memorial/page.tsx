'use client';
import './styles.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'memorial-app-data';

export default function MemorialDetails() {
  const [name, setName] = useState('');
  const [memory, setMemory] = useState('');
  const [memories, setMemories] = useState<{ name: string; memory: string }[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setMemories(JSON.parse(saved));
    } else {
      setMemories([
        { name: 'Nonna Maria', memory: 'Sempre gentile e sorridente.' },
        { name: 'Luca', memory: 'Un amico vero, sempre presente.' },
      ]);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  }, [memories]);

  function addMemory() {
    if (name.trim() && memory.trim()) {
      setMemories([{ name: name.trim(), memory: memory.trim() }, ...memories]);
      setName('');
      setMemory('');
    }
  }

  return (
    <div className="min-h-screen p-8 memorial-bg text-secondary-100 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full glass-card p-8 flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold memorial-title mb-2">Memorial Application Live Demo</h1>
        <p className="text-secondary-300 text-center mb-4">Crea e condividi un ricordo speciale.</p>
        <div className="w-full flex flex-col gap-3">
          <label className="text-secondary-200 font-semibold">Nome:</label>
          <input
            className="w-full p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none mb-2"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome della persona"
          />
          <label className="text-secondary-200 font-semibold">Ricordo:</label>
          <textarea
            className="w-full p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none mb-2"
            value={memory}
            onChange={e => setMemory(e.target.value)}
            placeholder="Scrivi un ricordo..."
            rows={2}
          />
          <button className="premium-btn w-full" onClick={addMemory} type="button">Aggiungi Ricordo</button>
        </div>
        <div className="w-full flex flex-col gap-4 mt-6">
          {memories.length === 0 ? (
            <div className="text-secondary-400 italic text-center">Nessun ricordo ancora.</div>
          ) : memories.map((m, idx) => (
            <div key={idx} className="bg-secondary-800/60 rounded-xl p-4 flex flex-col gap-1 shadow-md">
              <div className="font-semibold text-primary-400">{m.name}</div>
              <div className="text-secondary-100">{m.memory}</div>
            </div>
          ))}
        </div>
        <Link href="/" className="premium-btn mt-4">Back to Home</Link>
      </div>
    </div>
  );
}