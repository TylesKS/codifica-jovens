function HeroSection() {
  const audio = new Audio("./meow.mp3");
  let canPlay = true;
  const playSound = () => {
    if (!canPlay) return;
    audio.currentTime = 0;
    audio.play();
    audio.volume = 0.01;
    canPlay = false;
    setTimeout(() => {
      canPlay = true;
    }, 1000);
  };
  return (
    <div
      className="flex mt-30 flex-col lg:flex-row items-center justify-start min-h-[70vh] w-[37%] overflow-visible ml-8
    max-sm:min-h-[20vh] max-sm:text-center  max-sm:w-[calc(100%-2rem)] max-sm:mx-auto z-0 relative max-sm:mt-50"
    >
      <main>
        <h1 className="text-3xl font-thin">
          Hello World!
          <br />
          <span className="text-5xl">
            Eu sou{" "}
            <a
              className="hover:text-[var(--color)] duration-300"
              href="https://github.com/TylesKS"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victor Daniel
            </a>
            ,
            <a
              href="https://tylesks.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                onMouseOver={playSound}
                src="./meow.png"
                alt="Avatar"
                className="hover:scale-120 duration-200 rounded-full inline w-13 h-12 align-middle ml-1"
              />
            </a>
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
              <button className="border-2 w-[5.2em] border-white bg-black text-white py-2 px-2 rounded cursor-pointer duration-300 hover:border-black hover:scale-105 hover:bg-white hover:text-black">
                Aulas
              </button>
            </a>
            <a href="#gallery">
              <button className="border-2 w-[5.2em] border-black bg-white text-black py-2 px-2 rounded cursor-pointer duration-300 hover:border-white hover:scale-105 hover:text-white hover:bg-black">
                Turma
              </button>
            </a>
          </div>
        </h1>
      </main>
    </div>
  );
}

export default HeroSection;
