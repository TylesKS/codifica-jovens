import React, { useState } from "react";

export default function About() {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const LeftText = (
    <>
      O Codifica Jovens é a união da gigante{' '}
      <a
        href="https://www.gazin.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-300 hover:text-blue-500"
      >
        Gazin
      </a>{' '}
      com a excelência acadêmica da{' '}
      <a
        href="https://www.unipar.br"
        target="_blank"
        rel="noopener noreferrer"
        className="duration-300 hover:text-red-500"
      >
        Unipar
      </a>
      , uma parceria que transforma código em carreira. Nossa missão é
      construir o futuro de jovens talentos da tecnologia através de uma
      imersão total, onde você aprende programação na prática e resolvendo
      desafios reais. Com aulas ministradas por professores que são
      profissionais do mercado, focados no seu desenvolvimento completo,
      estimulando o pensamento crítico, a criatividade e o trabalho em
      equipe que as empresas valorizam.
    </>
  );

  const RightText = (
    <>
      Mais que um curso, este é o seu passaporte para o sucesso. Em um
      mercado competitivo, o Codifica Jovens é o seu diferencial, pois
      unimos as melhores habilidades técnicas com as competências
      comportamentais que fazem a diferença. Você terá uma conexão direta
      com o ambiente corporativo da Gazin, construindo um networking valioso
      desde o início para se destacar na carreira. Ao final, você sai com
      uma experiência de alto nível e estará não apenas preparado para o
      mercado, mas pronto para inovar como um verdadeiro agente de
      transformação.
    </>
  );

  return (
    <div id="about" className="mt-60 scroll-mt-70 max-sm:scroll-mt-45">
      <section className="md:hidden w-[92%] mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-2">Sobre o Projeto Codifica Jovens</h1>
        <h2 className="text-xl mb-4 font-extralight">Uma parceria transformadora para o futuro da tecnologia.</h2>
        <article className="mb-6">
          <p
            className={`text-base leading-relaxed transition-max-h duration-300 overflow-hidden ${
              openLeft ? 'max-h-[1000px]' : 'max-h-26'
            }`}
            aria-expanded={openLeft}
          >
            {LeftText}
          </p>
          <button
            onClick={() => setOpenLeft(!openLeft)}
            className="mt-2 text-[var(--color)] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            aria-controls="left-text"
            aria-expanded={openLeft}
          >
            {openLeft ? 'Ler menos' : 'Ler mais'}
          </button>
        </article>

        <article>
          <h3 className="text-lg font-medium mb-2">Por que é uma grande oportunidade?</h3>
          <p
            className={`text-base leading-relaxed transition-max-h duration-300 overflow-hidden ${
              openRight ? 'max-h-[1000px]' : 'max-h-26'
            }`}
            aria-expanded={openRight}
          >
            {RightText}
          </p>
          <button
            onClick={() => setOpenRight(!openRight)}
            className="mt-2 text-[var(--color)] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color)]"
            aria-controls="right-text"
            aria-expanded={openRight}
          >
            {openRight ? 'Ler menos' : 'Ler mais'}
          </button>
        </article>
      </section>
      <section className="hidden md:block w-[90%] mx-auto">
        <div className="rounded-2xl shadow-2xl p-8 bg-transparent backdrop-blur-[0.1em]">
          <header className="mb-6">
            <h1 className="text-4xl font-semibold">Sobre o Projeto Codifica Jovens</h1>
            <div className="flex justify-between mt-2">
              <p className="text-xl font-extralight">Uma parceria transformadora para o futuro da tecnologia.</p>
              <h2 className="text-xl font-extralight text-right">Por que esta é uma grande oportunidade?</h2>
            </div>
          </header>

          <div className="grid grid-cols-2 gap-30">
            <div>
              <p className="text-[1.25rem] leading-relaxed">{LeftText}</p>
            </div>

            <div>
              <p className="text-[1.25rem] leading-relaxed text-right">{RightText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
