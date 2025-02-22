import './styles.css';
import Link from 'next/link';

export default function MemorialDetails() {
  return (
    <div className="min-h-screen p-8 cheat-bg text-secondary-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="cheat-image">
          <img 
            src="/nop/memorial.png" 
            alt="Memorial Application" 
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold cheat-title">
            Memorial Application Features
          </h1>

          {/* Core Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Core Features</h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="feature-item">
                <span className="font-medium text-primary-400">Memorial Creation</span> - 
                Easy-to-use interface for creating memorials
              </div>
              <div className="feature-item">
                <span className="font-medium text-primary-400">Memory Sharing</span> - 
                Platform for sharing memories and stories
              </div>
              {/* Add more features as needed */}
            </div>
          </div>

          <Link href="/" className="inline-block back-button">
            <span className="button-content">
              <span className="button-text">Back to Home</span>
              <span className="button-icon">←</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}