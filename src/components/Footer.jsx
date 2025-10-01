import React from "react";
import ContactForm from "./ContactForm";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaCat,
} from "react-icons/fa";

const audio = new Audio("./meow.mp3");
let canPlay = true;
const playSound = () => {
  if (!canPlay) return;
  audio.currentTime = 0;
  audio.play();
  audio.volume = 0.05;
  canPlay = false;
  setTimeout(() => {
    canPlay = true;
  }, 1000);
};

export default function Footer() {
  return (
    <div
      id="contact"
      className="w-full p-10 bg-black text-white border-t border-[var(--color)] mt-70"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <div className="text-4xl">
            <span className="text-[var(--color)]">{"<"}</span>
            <span>od</span>
            <span className="text-[var(--color)]">:</span>
            <span>fica</span>
            <span className="ml-2">Jo</span>
            <span className="">{"\\"}</span>
            <span className="text-[var(--color)]">{"/"}</span>
            <span>ens</span>
            <span className="text-[var(--color)]">_</span>
          </div>

          <p className="text-base font-thin mt-5">
            Projeto educacional focado em tecnologia e formação. Aqui você
            encontra conteúdos, materiais e parcerias que ajudam jovens a se
            aproximarem da área de TI.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.linkedin.com/in/victor-daniel-dos-santos-lima-856498342/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-10 h-10 rounded transition-transform hover:scale-110 hover:bg-white/5 text-[var(--color)]"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://github.com/TylesKS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center justify-center w-10 h-10 rounded transition-transform hover:scale-110 hover:bg-white/5 text-[var(--color)]"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.instagram.com/tylesk.508/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 rounded transition-transform hover:scale-110 hover:bg-white/5 text-[var(--color)]"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://wa.me/554499235323"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-10 h-10 rounded transition-transform hover:scale-110 hover:bg-white/5 text-[var(--color)]"
              title="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://tylesks.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSound}
              onFocus={playSound}
              aria-label="Gato"
              className="flex items-center justify-center w-10 h-10 rounded transition-transform hover:scale-110 hover:bg-white/5 text-[var(--color)]"
              title="Miau"
            >
              <FaCat size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-center mt-2">
          <h4 className="text-lg font-semibold mb-3">Navegação</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="#top" className="hover:text-[var(--color)] transition-colors">
              Início
            </a>
            <a href="#about" className="hover:text-[var(--color)] transition-colors">
              Sobre
            </a>
            <a href="#partnership" className="hover:text-[var(--color)] transition-colors">
              Parcerias
            </a>
            <a href="#professores" className="hover:text-[var(--color)] transition-colors">
              Professores
            </a>
          </nav>

          <div className="mt-6 text-xs text-gray-400 tex">
            <div>Rua Pedrelina Macedo e Silva, 100 - Centro, Douradina - PR</div>
            <div>Telefone: (44) 3663-8000</div>
          </div>
        </div>

        <div className="flex flex-col mt-2">
          <h4 className="text-lg font-semibold mb-3 ">Entre em Contato</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
