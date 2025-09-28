import "boxicons/css/boxicons.min.css";

function Header() {
  return (
    <div className="top-0 w-full backdrop-blur-2xl flex justify-between items-center p-6 max-sm:justify-center z-20 fixed">
      <nav className="duration-500 cursor-default select-none hover:text-[var(--color)] hover:cursor-pointer font-arial-black text-3xl text-white flex gap-1 flex-wrap md:text-5xl hover:border-2 hover:border-[rgba(var(--color-hover),0.45)] border-2 border-transparent rounded-lg px-2 py-1">
        <span className="text-[var(--color)] mt-0.5">{"<"}</span>
        <span className="">od</span>
        <span className="text-[var(--color)]">:</span>
        <span>fica</span>
        <span className="ml-2">Jo</span>
        <span className="text-[1.2em] sm:text-[1em] mt-1 max-sm:mt-0 max-lg:mt-0">
          {"\\"}
        </span>
        <span className="text-[1.2em] sm:text-[1em] mt-1 max-sm:mt-0 max-lg:mt-0 text-[var(--color)]">
          {"/"}
        </span>
        <span>ens</span>
        <span className="text-[var(--color)]">_</span>
      </nav>
      <nav className="space-x-12 max-sm:hidden max-lg:hidden text-xl">
        <a
          href="#top"
          className=" p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Início
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[var(--color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Sobre
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
        </a>
        <a
          href="#partnership"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Parcerias
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
        </a>
        <a
          href="#turma"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Professores
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
        </a>
        <a
          href="#gallery"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Turma
          <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-[var(--color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      <button className="lg:hidden text-[2.5em] absolute right-0 mt-1 p-2 z-50 cursor-pointer">
        <i class="bx bx-menu"></i>
      </button>
    </div>
  );
}
export default Header;
