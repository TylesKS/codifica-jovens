function HeroSection() {
  return (
    <div
      className="flex mt-30 flex-col lg:flex-row items-center justify-start min-h-[70vh] max-w-[40%] min-md:ml-8 overflow-visible min-lg:ml-32
    max-sm:min-h-[20vh] max-sm:text-center  max-sm:w-[calc(100%-2rem)] max-sm:mx-auto z-40 relative max-sm:mt-50"
    >
      <main>
        <h1 className="text-2xl font-normal">
          Hello World!
          <br />
          <span className="text-7xl font-black">
            Eu sou{" "}
            <a
              className="bg-gradient-to-r from-violet-900 to-indigo-600 bg-clip-text hover:text-transparent duration-300"
              href="https://github.com/TylesKS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor Daniel
            </a>
            ,
          </span>
          <span className="text-light font-thin">
            <br />
            Codifica Jovens
            <br />
            Transformando talentos em desenvolvedores do futuro.
            <br />
            Parceria exclusiva Gazin & Unipar
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
