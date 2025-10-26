import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [name, setName] = useState('');
  const finalName = "Victor Daniel";

  useEffect(() => {
    let i = 0;
    const speed = 120;
    const interval = setInterval(() => {
      setName(finalName.slice(0, i + 1));
      i++;
      if (i >= finalName.length) {
        clearInterval(interval);
        setName(finalName);
      }
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex min-lg:mt-30 min-md:mt-50 flex-col lg:flex-row items-center justify-start min-h-[70vh] max-w-[50%] ml-12 overflow-visible min-lg:ml-28
    max-sm:min-h-[20vh] max-sm:text-center max-sm:w-[calc(100%-2rem)] max-sm:mx-auto z-40 relative max-sm:mt-50"
    >
      <main>
        <h1 className="text-2xl font-normal">
<span className="hello-neon">Hello World!</span>
          <br />
          <h1 className="text-6xl sm:text-7xl font-black max-sm:w-80">
            Eu sou{" "}
            <a
              className="bg-gradient-to-r from-violet-900 to-indigo-600 bg-clip-text hover:text-transparent duration-300 break-words"
              href="https://github.com/TylesKS"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
            ,
          </h1>
          <span className="text-light font-thin ">
            Apresento uma iniciativa transformadora para o futuro.
            
            <br />
            Codifica Jovens. Transformando talentos em desenvolvedores do futuro.
          </span>
          <div className="flex gap-8 max-sm:justify-around mt-10">
<a href="#classes">
  <button className="inline-flex items-center justify-center gap-2 border-2 border-white bg-black text-white py-2 px-4 rounded cursor-pointer duration-300 hover:border-black hover:scale-105 hover:bg-white hover:text-black">
    <i className="bx bx-book-open" aria-hidden="true"></i>
    <span className="mb-1">Aulas</span>
  </button>
</a>

<a href="#gallery">
  <button className="inline-flex items-center justify-center gap-2 border-2 border-black bg-white text-black py-2 px-4 rounded cursor-pointer duration-300 hover:border-white hover:scale-105 hover:text-white hover:bg-black">
    <i className="bx bx-group" aria-hidden="true"></i>
    <span className="mb-1">Turma</span>
  </button>
</a>

          </div>
        </h1>
      </main>
    </div>
  );
}

export default HeroSection;
