import './styles.css';
import Link from 'next/link';
import Image from 'next/image';
import SpotifyPlayer from './components/SpotifyPlayer';
import ScrollReveal from './components/ScrollReveal';
import FlagIcon from './components/FlagIcon';
// Add this GitHubIcon component
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.83 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
  </svg>
);

const skills = [
  { skill: 'JavaScript', category: 'Frontend', icon: '/nop/icons/javascript.svg' },
  { skill: 'TypeScript', category: 'Frontend', icon: '/nop/icons/typescript.svg' },
  { skill: 'React', category: 'Frontend', icon: '/nop/icons/react.svg' },
  { skill: 'Next.js', category: 'Fullstack', icon: '/nop/icons/nextjs.svg' },
  { skill: 'Node.js', category: 'Backend', icon: '/nop/icons/nodejs.svg' },
  { skill: 'TailwindCSS', category: 'Styling', icon: '/nop/icons/tailwindcss.svg' },
  { skill: 'C#', category: 'Backend', icon: '/nop/icons/csharp.svg' },
  { skill: 'C++', category: 'Systems', icon: '/nop/icons/cplusplus.svg' },
  { skill: 'Python', category: 'Scripting', icon: '/nop/icons/python.svg' },
  { skill: 'Kotlin', category: 'Mobile', icon: '/nop/icons/kotlin.svg' },
  { skill: 'Lua', category: 'Scripting', icon: '/nop/icons/lua.svg' },
  { skill: 'Java', category: 'Backend', icon: '/nop/icons/java.svg' },
  { skill: 'PHP', category: 'Backend', icon: '/nop/icons/php.svg' }
];

const description = `As a passionate developer, I specialize in creating impactful web experiences. My expertise includes JavaScript, TypeScript, React for frontend, and Node.js, C# for backend development. I take pride in writing clean, efficient code that enhances performance and maintainability. My portfolio includes projects like the FiveM Cheat tool and Memorial Application, showcasing my ability to tackle complex challenges. I'm always eager to learn and contribute to exciting projects that make a difference.`;

export default function Home() {
  return (
    <main className="min-h-screen p-4 intro-animation">
      <div className="max-w-4xl mx-auto py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold gold-text lucid-hover p-4 rounded-lg">
              疤脸 ЙѳPяацяа
            </h1>
            <p className="text-xl text-secondary-500 animate-fade-in">Developer & Creator</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <a href="https://github.com/Dev-NotAqua"
              className="group bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-secondary-700/70 transition-all flex flex-col items-center relative overflow-hidden animate-float hover:shadow-lg hover:shadow-primary-500/10 border border-secondary-700 hover:border-primary-400 lucid-hover"
              style={{ animationDelay: '0s', width: '180px' }}>
              <div className="w-8 h-8 mb-2 text-secondary-400 group-hover:text-primary-400 transition-colors duration-500 flex items-center justify-center">
                <GitHubIcon />
              </div>
              <span className="block font-medium text-base transition-colors duration-500 group-hover:text-primary-400 text-center">GitHub</span>
              <span className="text-secondary-400 transition-colors duration-500 group-hover:text-primary-300 text-sm text-center">@setsnopraura</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://x.com/DevAqua_"
              className="group bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-secondary-700/70 transition-all flex flex-col items-center relative overflow-hidden animate-float hover:shadow-lg hover:shadow-primary-500/10 border border-secondary-700 hover:border-primary-400 lucid-hover"
              style={{ animationDelay: '0.2s', width: '180px' }}>
              <div className="w-8 h-8 mb-2 text-secondary-400 group-hover:text-primary-400 transition-colors duration-500 flex items-center justify-center">
                <TwitterIcon />
              </div>
              <span className="block font-medium text-base transition-colors duration-500 group-hover:text-primary-400 text-center">Twitter</span>
              <span className="text-secondary-400 transition-colors duration-500 group-hover:text-primary-300 text-sm text-center">@DevAqua_</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://discord.com/users/JustMateNp"
              className="group bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl hover:bg-secondary-700/70 transition-all flex flex-col items-center relative overflow-hidden animate-float hover:shadow-lg hover:shadow-primary-500/10 border border-secondary-700 hover:border-primary-400 lucid-hover"
              style={{ animationDelay: '0.4s', width: '180px' }}>
              <div className="w-8 h-8 mb-2 text-secondary-400 group-hover:text-primary-400 transition-colors duration-500 flex items-center justify-center">
                <DiscordIcon />
              </div>
              <span className="block font-medium text-base transition-colors duration-500 group-hover:text-primary-400 text-center">Discord</span>
              <span className="text-secondary-400 transition-colors duration-500 group-hover:text-primary-300 text-sm text-center">JustMateNp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </section>

        <SpotifyPlayer />

        {/* Skills Section */}
        <ScrollReveal>
          <section className="section-animation">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-text-glow">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map(({ skill, category, icon }) => (
                <div key={skill}
                  className="skill-card p-4 bg-secondary-800/50 backdrop-blur-sm rounded-xl hover:bg-secondary-700/70 transition-all group border border-secondary-700 hover:border-primary-400 lucid-hover">
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src={icon}
                      alt={skill}
                      width={32}
                      height={32}
                      className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    />
                    <h3 className="text-lg font-medium text-secondary-400 group-hover:text-primary-400 transition-colors duration-500">
                      {skill}
                    </h3>
                  </div>
                  <span className="text-sm text-secondary-500 group-hover:text-primary-300 transition-colors duration-500">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Projects Section */}
        <section className="section-animation">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-text-glow">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/cheat">
              <ProjectCard
                title="FiveM Cheat"
                description="A custom cheat tool developed for the FiveM platform, enhancing gameplay with unique features."
                image="/nop/cheat.png"
              />
            </Link>
            <Link href="/memorial">
              <ProjectCard
                title="Memorial Application"
                description="An application designed to create and manage memorials, offering a space for remembrance."
                image="/nop/memorial.png"
              />
            </Link>
          </div>
        </section>

        {/* Languages Section */}
        <ScrollReveal>
          <section className="section-animation max-w-2xl mx-auto relative py-10 px-4">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl blur-xl -z-10"></div>
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-text-glow drop-shadow-lg filter drop-shadow-md">
              <span className="relative inline-block">
                Languages
                <span className="absolute inset-0 blur-md bg-gradient-to-r from-purple-600/50 via-primary-500/50 to-blue-600/50 opacity-60 -z-10 transform scale-110"></span>
                <span className="absolute inset-0 blur-sm bg-gradient-to-r from-primary-400 to-primary-600 opacity-40 -z-5"></span>
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="language-card bg-gradient-to-br from-secondary-800/80 to-secondary-900/80 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-primary-400 transition-all group overflow-hidden relative shadow-xl hover:shadow-2xl">
                <div className="flag-wrapper flex items-center mb-4">
                  <div className="w-16 h-10 animate-flag-wave">
                    <FlagIcon
                      country="italy"
                      showTooltip={true}
                      tooltipContent="Lingua madre - Fluente in tutte le competenze"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-500">Italiano</h3>
                    <span className="text-primary-400 font-semibold text-sm mt-1">Madrelingua</span>
                  </div>
                </div>
                <div className="mt-2 mb-1 text-xs text-secondary-300 font-medium">Livello di competenza</div>
                <div className="w-full bg-secondary-700/50 h-3 rounded-full overflow-hidden shadow-inner" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Livello madrelingua italiano">
                  <div className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 h-full rounded-full language-bar-animation" style={{ width: '100%' }}></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-700 ease-in-out"></div>
              </div>

              <div className="language-card bg-gradient-to-br from-secondary-800/80 to-secondary-900/80 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-primary-400 transition-all group overflow-hidden relative shadow-xl hover:shadow-2xl">
                <div className="flag-wrapper flex items-center mb-4">
                  <div className="w-16 h-10 animate-flag-wave">
                    <FlagIcon
                      country="uk"
                      showTooltip={true}
                      tooltipContent="Ottima padronanza in lettura, scrittura e conversazione"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-500">Inglese</h3>
                    <span className="text-primary-400 font-semibold text-sm mt-1">Avanzato</span>
                  </div>
                </div>
                <div className="mt-2 mb-1 text-xs text-secondary-300 font-medium">Livello di competenza</div>
                <div className="w-full bg-secondary-700/50 h-3 rounded-full overflow-hidden shadow-inner" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="Livello avanzato inglese">
                  <div className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 h-full rounded-full language-bar-animation" style={{ width: '90%' }}></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-700 ease-in-out"></div>
              </div>

              <div className="language-card bg-gradient-to-br from-secondary-800/80 to-secondary-900/80 backdrop-blur-sm p-6 rounded-xl border border-secondary-700 hover:border-primary-400 transition-all group overflow-hidden relative shadow-xl hover:shadow-2xl">
                <div className="flag-wrapper flex items-center mb-4">
                  <div className="w-16 h-10 animate-flag-wave">
                    <FlagIcon
                      country="france"
                      showTooltip={true}
                      tooltipContent="Buona comprensione e comunicazione di base"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors duration-500">Francese</h3>
                    <span className="text-primary-400 font-semibold text-sm mt-1">Intermedio</span>
                  </div>
                </div>
                <div className="mt-2 mb-1 text-xs text-secondary-300 font-medium">Livello di competenza</div>
                <div className="w-full bg-secondary-700/50 h-3 rounded-full overflow-hidden shadow-inner" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="Livello intermedio francese">
                  <div className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 h-full rounded-full language-bar-animation" style={{ width: '75%' }}></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* About Section */}
        <ScrollReveal>
          <section className="section-animation max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent animate-text-glow">
              About Me
            </h2>
            <div className="description-block">
  {description.split('. ').map((sentence: string, index: number) => (
    <div key={index} className={index % 2 === 0 ? 'description-block-left' : 'description-block-right'}
      style={{
        backgroundColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.1)',
        borderColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.2)',
        margin: index % 2 === 0 ? '0 20% 0 0' : '0 0 0 20%'
      }}
    >
      {sentence}.
    </div>
  ))}
</div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}

function ProjectCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <div className="bg-secondary-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-secondary-700/70 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-500/10 border border-secondary-700 hover:border-primary-400 lucid-hover">
      <div className="cheat-image">
        <Image src={image} alt={title} width={800} height={400} className="w-full h-48 object-cover rounded-lg mb-4" />
      </div>
      <h3 className="font-medium text-xl mb-2 transition-colors duration-500 hover:text-primary-400">{title}</h3>
      <div className="description-block">
  {description.split('. ').map((sentence: string, index: number) => (
    <div key={index} className={index % 2 === 0 ? 'description-block-left' : 'description-block-right'}
      style={{
        backgroundColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0.1)',
        borderColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.2)',
        margin: index % 2 === 0 ? '0 20% 0 0' : '0 0 0 20%'
      }}
    >
      {sentence}.
    </div>
  ))}
</div>
    </div>
  );
}