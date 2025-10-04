// Header.jsx
import "boxicons/css/boxicons.min.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const firstLinkRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (isMobileMenuOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const stopClose = (e) => e.stopPropagation();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="top-0 w-full backdrop-blur-2xl bg-black/30 flex justify-between items-center p-6 max-sm:justify-center z-50">
        <nav className="duration-500 cursor-default select-none font-arial-black text-3xl text-white flex gap-1 flex-wrap md:text-5xl rounded-sm px-2 py-1">
          <a href="#top" className="flex items-center gap-1">
        <div className="flex items-center border-2 border-transparent p-2 rounded-2xl duration-300 hover:border-[var(--color)]">
          {" "}
          <span className="text-[var(--color)]">{"<"}</span>
          <span>od</span>
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
        </div>
          </a>
        </nav>

        {/* desktop nav */}
              <nav className="space-x-12 max-sm:hidden max-lg:hidden text-xl">
        {/* Efeito da esquerda para direita */}
        <a
          href="#top"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Início
          <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-[var(--color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        {/* Efeito do meio para as bordas */}
        <a
          href="#about"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Sobre
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
        </a>

        {/* Efeito do meio para as bordas */}
        <a
          href="#partnership"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Parcerias
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
        </a>
        <a
          href="#professores"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Professores
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
          <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
       </a>
        <a
          href="#contact"
          className="p-1 relative group transition-colors duration-200 hover:text-[var(--color)]"
        >
          Contato
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[var(--color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
        <button
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden text-[2.2em] absolute right-4 mt-1 p-2 z-50 cursor-pointer bg-black/20 backdrop-blur-md rounded-lg hover:bg-black/30 transition-colors duration-300"
        >
          <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className="fixed left-0 right-0 top-[88px] bottom-0 z-40 flex items-start justify-center bg-black/25 backdrop-blur-lg transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)} // clique fora fecha
        >
          <div
            onClick={stopClose}
            className="mt-4 w-[95%] max-w-md rounded-b-xl rounded-t-none bg-[rgba(10,10,12,0.85)] border border-[rgba(255,255,255,0.04)] shadow-lg p-6 transform transition-transform duration-200 ease-out translate-y-0"
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col items-stretch gap-3 text-lg">
              <a
                href="#top"
                ref={firstLinkRef}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-center rounded-md hover:bg-[var(--color)]/10 transition-colors duration-200"
              >
                Início
                
              </a>

              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-center rounded-md hover:bg-[var(--color)]/10 transition-colors duration-200"
              >
                Sobre
              </a>

              <a
                href="#partnership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-center rounded-md hover:bg-[var(--color)]/10 transition-colors duration-200"
              >
                Parcerias
              </a>

              <a
                href="#professores"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-center rounded-md hover:bg-[var(--color)]/10 transition-colors duration-200"
              >
                Professores
              </a>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-center rounded-md hover:bg-[var(--color)]/10 transition-colors duration-200"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
