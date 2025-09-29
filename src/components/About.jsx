function About() {
  return (
    <div className="mt-80">
      <section className="relative z-0 scroll-mt-70 w-[90%] mx-auto" id="about">
        <h1 className="text-4xl mb-2">Sobre o Projeto Codifica Jovens</h1>
        <div className="flex justify-between max-sm:flex-col">
          <h2 className="text-3xl mb-5 font-extralight">
            Uma parceria transformadora para o futuro da tecnologia.
          </h2>
          <h2 className="text-3xl mb-5 font-extralight text-right max-sm:hidden">
            Por que esta é uma grande oportunidade?
          </h2>
        </div>
        <div className="flex justify-between max-sm:flex-col">
          <div className="w-[45%] max-sm:mx-auto max-sm:flex-col max-sm:w-[100%]">
            <p className="text-2xl/snug">
              O Codifica Jovens é a união da gigante{" "}
              <a
                href="https://www.gazin.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className=" duration-150 hover:text-blue-500"
              >
                Gazin
              </a>{" "}
              com a excelência acadêmica da{" "}
              <a
                href="https://www.unipar.br"
                target="_blank"
                rel="noopener noreferrer"
                className=" duration-150 hover:text-red-500"
              >
                Unipar
              </a>
              , uma parceria que transforma código em carreira. Nossa missão é
              construir o futuro de jovens talentos da tecnologia através de uma
              imersão total, onde você aprende programação na prática e
              resolvendo desafios reais. Com aulas ministradas por professores
              que são profissionais do mercado, focamos no seu desenvolvimento
              completo, estimulando o pensamento crítico, a criatividade e o
              trabalho em equipe que as empresas valorizam.
            </p>
            <br></br>
          </div>
          <div className="w-[45%] max-sm:mx-auto max-sm:flex-col max-sm:w-[100%] text-right max-sm:text-left">
            <h2 className="lg:hidden md:hidden sm:hidden text-3xl mb-5 font-extralight">
              Por que esta é uma grande oportunidade?
            </h2>
            <p className="text-2xl/snug">
              Mais que um curso, este é o seu passaporte para o sucesso. Em um
              mercado competitivo, o Codifica Jovens é o seu diferencial, pois
              unimos as melhores habilidades técnicas com as competências
              comportamentais que fazem a diferença. Você terá uma conexão
              direta com o ambiente corporativo da Gazin, construindo um
              networking valioso desde o início para se destacar na carreira. Ao
              final, você sai com uma experiência de alto nível e estará não
              apenas preparado para o mercado, mas pronto para inovar como um
              verdadeiro agente de transformação.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
