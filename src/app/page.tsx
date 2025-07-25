"use client";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-400/20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg sm:text-xl">
              <span className="text-green-400">alex@portfolio:~$</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-4 md:space-x-8">
              <a href="#about" className="hover:text-green-300 transition-colors">./about</a>
              <a href="#projects" className="hover:text-green-300 transition-colors">./projects</a>
              <a href="#skills" className="hover:text-green-300 transition-colors">./skills</a>
              <a href="#contact" className="hover:text-green-300 transition-colors">./contact</a>
            </div>
            {/* Mobile Navigation */}
            <div className="sm:hidden flex space-x-2 text-sm">
              <a href="#about" className="hover:text-green-300 transition-colors">about</a>
              <a href="#projects" className="hover:text-green-300 transition-colors">projects</a>
              <a href="#contact" className="hover:text-green-300 transition-colors">contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <span className="text-green-300 text-sm sm:text-base">alxmassy@dev:~$</span>
            <span className="ml-2 animate-pulse">|</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Hello, I'm </span>
            <span className="text-green-400 block sm:inline">Alex Massy</span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 space-y-1 sm:space-y-2">
            <p><span className="text-gray-400 italic">Intern @DRDO</span></p>
            <p><span className="text-green-300">{'>'}</span> AI/ML Development</p>
            <p><span className="text-green-300">{'>'}</span> Full-Stack Development</p>
            <p><span className="text-green-300">{'>'}</span> Finance</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={()=>window.open('https://drive.google.com/file/d/1mmibmRFAV3rrXukgzdppFZWdkHqGvEk3/view?usp=sharing','_blank')} className="w-full sm:w-auto px-4 sm:px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer transition-all duration-300 text-center">
              ./view_resume
            </button>
            <button onClick={()=>window.open('https://www.linkedin.com/in/alex-massy-alx777/','_blank')} className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-green-400 text-black hover:bg-green-200 cursor-pointer transition-all duration-300 text-center">
              ./linkedin
            </button>
            <button onClick={()=>window.open('https://www.github.com/alxmassy','_blank')} className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-green-400 text-black hover:bg-green-200 cursor-pointer transition-all duration-300 text-center">
              ./github
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8">
            <span className="text-green-300">alex@dev:~$</span> cat about.txt
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Hi! Welcome to my digital workspace. I'm a engineering student who loves
                solving real world problems through code. I am a self taught developer with an 
                interest for AI/ML and finance.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                When I'm not debugging code at 3 AM, you'll find me exploring new 
                technologies, or watching some random tech or gaming youtube videos.
              </p>
            </div>
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded border border-green-400/20">
              <h3 className="text-green-400 mb-4 text-sm sm:text-base">// Quick stats</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p><span className="text-green-300">lines_of_code:</span> 50,000+</p>
                <p><span className="text-green-300">coffee_consumed:</span> ∞</p>
                <p><span className="text-green-300">bugs_fixed:</span> too_many_to_count</p>
                <p><span className="text-green-300">status:</span> always_learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8">
            <span className="text-green-300">alex@dev:~$</span> ls ./recent_projects
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gray-900/30 border border-green-400/20 p-4 sm:p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-lg sm:text-xl text-green-400 mb-2">fintel.exe</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">
                  An ML system to predict short-term stock movement by leveraging news sentiment and technical analysis.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Python</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">FinBERT</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">XGBoost</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">PostgreSQL</span>
                </div>
                <div className="flex space-x-4 text-xs sm:text-sm">
                  <a href="https://www.youtube.com/watch?v=6gytpbiClyE" target="_blank" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="https://github.com/alxmassy/fintel" target="_blank" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
              <div className="bg-gray-900/30 border border-green-400/20 p-4 sm:p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-lg sm:text-xl text-green-400 mb-2">vidhiAI.exe</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">
                  An AI tool that assists lawyers with legal case research by automating document parsing and info retrieval.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Python</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">NLP</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">HTML/CSS</span>
                </div>
                <div className="flex space-x-4 text-xs sm:text-sm">
                  <a href="https://www.youtube.com/watch?v=FTjgbdYyV84" target="_blank" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="https://github.com/alxmassy/VidhiAI" target="_blank" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
              <div className="bg-gray-900/30 border border-green-400/20 p-4 sm:p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-lg sm:text-xl text-green-400 mb-2">phantom.exe</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-4">
                  A cloud-connected kiosk system for document printing using a unique code and payment integration.
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">React</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Node.js</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Supabase</span>
                </div>
                <div className="flex space-x-4 text-xs sm:text-sm">
                  <a href="#" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="#" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8">
            <span className="text-green-300">alex@dev:~$</span> cat skills.json
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-green-400 mb-4 text-sm sm:text-base">// Dev</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Python</li>
                <li>C/C++</li>
                <li>ML Frameworks</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 mb-4 text-sm sm:text-base">// Web</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Restful API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 mb-4 text-sm sm:text-base">// Tools</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>Jupyter Lab</li>
                <li>Azure</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8">
            <span className="text-green-300">alex@dev:~$</span> ./connect
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Let's Connect! and build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="mailto:work.alexmassy@gmail.com" className="text-green-400 hover:text-green-300 break-all">
              work.alexmassy@gmail.com
            </a>
            <a href="https://github.com/alxmassy" className="text-green-400 hover:text-green-300">
              github.com/alxmassy
            </a>
            <a href="https://www.linkedin.com/in/alex-massy-alx777/" className="text-green-400 hover:text-green-300">
              linkedin.com/in/alxmassy
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/20 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm sm:text-base">
          <p>alex@dev:~$ echo "Made with ❤️"</p>
        </div>
      </footer>
    </div>
  );
}
