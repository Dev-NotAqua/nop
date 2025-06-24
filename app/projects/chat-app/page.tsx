'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const STORAGE_KEY = 'chat-app-data-v2';
const EMOJIS = ['😀','😂','😍','👍','❤️','🎉','😎','😢','🔥','🙏'];

export default function ChatAppDemo() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ user: string; text: string; reactions: { [emoji: string]: number } }[]>([]);
  const [room, setRoom] = useState('General');
  const [rooms, setRooms] = useState<string[]>(['General']);
  const [newRoom, setNewRoom] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setUsername(parsed.username || 'User');
      setRooms(parsed.rooms || ['General']);
      setRoom(parsed.room || 'General');
      setMessages(parsed.messages || []);
    } else {
      setUsername('User');
      setRooms(['General']);
      setRoom('General');
      setMessages([
        { user: 'Bot', text: 'Ciao! 👋', reactions: {} },
        { user: 'User', text: 'Ciao! Come va?', reactions: {} },
        { user: 'Bot', text: 'Tutto bene, sto provando la demo!', reactions: {} },
      ]);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ username, messages, room, rooms }));
  }, [username, messages, room, rooms]);

  function sendMessage() {
    if (message.trim()) {
      setMessages([...messages, { user: username || 'User', text: message.trim(), reactions: {} }]);
      setMessage('');
      setShowEmojis(false);
    }
  }
  function addReaction(idx: number, emoji: string) {
    setMessages(messages.map((msg, i) =>
      i === idx ? { ...msg, reactions: { ...msg.reactions, [emoji]: (msg.reactions[emoji] || 0) + 1 } } : msg
    ));
  }
  function switchRoom(r: string) {
    setRoom(r);
    setMessages([]);
  }
  function createRoom() {
    if (newRoom.trim() && !rooms.includes(newRoom.trim())) {
      setRooms([...rooms, newRoom.trim()]);
      setRoom(newRoom.trim());
      setMessages([]);
      setNewRoom('');
    }
  }
  function clearChat() {
    setMessages([]);
  }
  function exportChat() {
    const text = messages.map(m => `${m.user}: ${m.text} ${Object.entries(m.reactions).map(([e, n]) => n > 0 ? `${e}×${n}` : '').join(' ')}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${room}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-secondary-900 to-primary-900/10">
      <div className="glass-card p-8 max-w-lg w-full flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Real-Time Chat App Live Demo</h1>
        <p className="text-secondary-300 text-center">Chatta in tempo reale!</p>
        <div className="w-full flex flex-col gap-2">
          <label className="text-secondary-200 font-semibold">Username:</label>
          <input
            className="w-full p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none mb-2"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Il tuo nome"
          />
        </div>
        <div className="w-full flex gap-2 mb-2">
          <select className="flex-1 p-2 rounded-lg bg-secondary-700/60 text-secondary-100" value={room} onChange={e => switchRoom(e.target.value)}>
            {rooms.map((r, i) => <option key={i} value={r}>{r}</option>)}
          </select>
          <input className="w-32 p-2 rounded-lg bg-secondary-700/60 text-secondary-100" value={newRoom} onChange={e => setNewRoom(e.target.value)} placeholder="Nuova stanza" />
          <button className="premium-btn px-2" onClick={createRoom}>Crea</button>
        </div>
        <div className="w-full bg-secondary-800/60 rounded-xl p-6 flex flex-col gap-2 shadow-md min-h-[200px] max-h-64 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] px-4 py-2 mb-1 rounded-2xl text-white ${msg.user === username ? 'self-end bg-secondary-700/80' : 'self-start bg-primary-500/80'}`}
            >
              <span className="font-semibold mr-2">{msg.user}:</span> {msg.text}
              <div className="flex gap-1 mt-1">
                {EMOJIS.map(e => (
                  <button key={e} className="text-lg" onClick={() => addReaction(idx, e)} title={`React with ${e}`}>{e}{msg.reactions[e] ? `×${msg.reactions[e]}` : ''}</button>
                ))}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="w-full flex gap-2 mt-2 items-center">
          <input
            className="flex-1 p-2 rounded-lg bg-secondary-700/60 text-secondary-100 focus:outline-none"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Scrivi un messaggio..."
            onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
          />
          <button className="premium-btn px-2" onClick={() => setShowEmojis(!showEmojis)} type="button">😊</button>
          <button className="premium-btn px-4 py-2" onClick={sendMessage} type="button">Invia</button>
        </div>
        {showEmojis && (
          <div className="flex flex-wrap gap-2 bg-secondary-800/80 rounded-lg p-2 mt-2">
            {EMOJIS.map(e => (
              <button key={e} className="text-2xl" onClick={() => { setMessage(message + e); setShowEmojis(false); }}>{e}</button>
            ))}
          </div>
        )}
        <div className="flex w-full gap-2 mt-4">
          <button className="premium-btn flex-1" onClick={clearChat}>Clear Chat</button>
          <button className="premium-btn flex-1" onClick={exportChat}>Export Chat</button>
          <Link href="/" className="premium-btn flex-1 text-center">Back to Home</Link>
        </div>
      </div>
    </main>
  );
} 