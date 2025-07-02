"use client";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-400/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl">
              <span className="text-green-400">alex@portfolio:~$</span>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="hover:text-green-300 transition-colors">./about</a>
              <a href="#projects" className="hover:text-green-300 transition-colors">./projects</a>
              <a href="#skills" className="hover:text-green-300 transition-colors">./skills</a>
              <a href="#contact" className="hover:text-green-300 transition-colors">./contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-green-300">alxmassy@dev:~$</span>
            <span className="ml-2 animate-pulse">|</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Hello, I'm </span>
            <span className="text-green-400">Alex Massy</span>
          </h1>
          <div className="text-xl md:text-2xl mb-8 space-y-2">
            <p><span className="text-gray-400 italic">Intern @DRDO</span></p>
            <p><span className="text-green-300">{'>'}</span> AI/ML Development</p>
            <p><span className="text-green-300">{'>'}</span> Full-Stack Development</p>
            <p><span className="text-green-300">{'>'}</span> Finance</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={()=>window.open('https://drive.google.com/file/d/1tLOqc9U2_DKWNEHT0rJvYuunFgljbVmd/view?usp=sharing','_blank')} className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer transition-all duration-300">
              ./view_resume
            </button>
            <button onClick={()=>window.open('https://www.linkedin.com/in/alex-massy-alx777/','_blank')} className="px-6 py-3 bg-green-400 text-black hover:bg-green-200 cursor-pointer transition-all duration-300">
              ./linkedin
            </button>
            <button onClick={()=>window.open('https://www.github.com/alxmassy','_blank')} className="px-6 py-3 bg-green-400 text-black hover:bg-green-200 cursor-pointer transition-all duration-300">
              ./github
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">
            <span className="text-green-300">alex@dev:~$</span> cat about.txt
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hi! Welcome to my digital workspace. I'm a engineering student who loves
                solving real world problems through code. I am a self taught developer with an 
                interest for AI/ML and finance.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not debugging code at 3 AM, you'll find me exploring new 
                technologies, or watching some random tech or gaming youtube videos.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded border border-green-400/20">
              <h3 className="text-green-400 mb-4">// Quick stats</h3>
              <div className="space-y-2 text-sm">
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
      <section id="projects" className="py-20 px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">
            <span className="text-green-300">alex@dev:~$</span> ls ./recent_projects
          </h2>
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/30 border border-green-400/20 p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-xl text-green-400 mb-2">fintel.exe</h3>
                <p className="text-gray-300 text-sm mb-4">
                  An ML system to predict short-term stock movement by leveraging news sentiment and technical analysis.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Python</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">FinBERT</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">XGBoost</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">PostgreSQL</span>
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://www.youtube.com/watch?v=6gytpbiClyE" target="_blank" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="https://github.com/alxmassy/fintel" target="_blank" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
              <div className="bg-gray-900/30 border border-green-400/20 p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-xl text-green-400 mb-2">vidhiAI.exe</h3>
                <p className="text-gray-300 text-sm mb-4">
                  An AI tool that assists lawyers with legal case research by automating document parsing and info retrieval.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Python</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">NLP</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">HTML/CSS</span>
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="https://www.youtube.com/watch?v=FTjgbdYyV84" target="_blank" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="https://github.com/alxmassy/VidhiAI" target="_blank" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
              <div className="bg-gray-900/30 border border-green-400/20 p-6 hover:border-green-400/40 transition-all">
                <h3 className="text-xl text-green-400 mb-2">phantom.exe</h3>
                <p className="text-gray-300 text-sm mb-4">
                  A cloud-connected kiosk system for document printing using a unique code and payment integration.
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">React</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Node.js</span>
                  <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1">Supabase</span>
                </div>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-green-400 hover:text-green-300">./demo</a>
                  <a href="#" className="text-green-400 hover:text-green-300">./code</a>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-8">
            <span className="text-green-300">alex@dev:~$</span> cat skills.json
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-green-400 mb-4">// Dev</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>C</li>
                <li>ML Frameworks</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 mb-4">// Web</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Restful API</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 mb-4">// Tools</h3>
              <ul className="space-y-2 text-gray-300">
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
      <section id="contact" className="py-20 px-6 border-t border-green-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl mb-8">
            <span className="text-green-300">alex@dev:~$</span> ./connect
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's Connect! and build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:work.alexmassy@gmail.com" className="text-green-400 hover:text-green-300">
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
      <footer className="border-t border-green-400/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>alex@dev:~$ echo "Made with ❤️"</p>
        </div>
      </footer>
    </div>
  );
}
