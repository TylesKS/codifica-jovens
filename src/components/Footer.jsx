import React from "react";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <div
      id="contact"
      className="w-full p-10 bg-black text-white border-t border-[var(--color)] mt-70"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <p className="text-base font-thin mt-5">
            Projeto educacional focado em tecnologia e formação. Aqui você
            encontra conteúdos, materiais e parcerias que ajudam jovens a se
            aproximarem da área de TI.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-lg font-semibold mb-3">Navegação</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a
              href="#top"
              className="hover:text-[var(--color)] transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="hover:text-[var(--color)] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#partnership"
              className="hover:text-[var(--color)] transition-colors"
            >
              Parcerias
            </a>
            <a
              href="#professores"
              className="hover:text-[var(--color)] transition-colors"
            >
              Professores
            </a>
          </nav>

          <div className="mt-6 text-xs text-gray-400">
            <div>Rua Pedrelina Macedo e Silva, 100 - Centro, Douradina - PR</div>
            <div>Telefone: (44) 3663-8000</div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col ">
          <h4 className="text-lg font-semibold mb-3 ">Entre em Contato</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Footer;
