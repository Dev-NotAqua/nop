'use client';

export default function SpotifyPlayer() {
  return (
    <div className="relative glass-card p-4 my-8">
      <iframe 
        src="https://open.spotify.com/embed/track/29CqjSgueQYgqG227LyQ87?utm_source=generator&theme=0" 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="encrypted-media"
        className="rounded-lg"
      />
    </div>
  );
} 