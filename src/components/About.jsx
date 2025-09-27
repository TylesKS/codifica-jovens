function About() {
  return (
    <div className="mt-80">
      <section
        className="relative z-10 scroll-mt-70 w-[90%] mx-auto"
        id="about"
      >
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
            <p className="text-1xl">
              O projeto Codifica Jovens nasce de uma colaboração visionária
              entre a Gazin e a Unipar (Universidade Paranaense), com o objetivo
              de abrir portas e construir futuros promissores para jovens
              talentos na área da tecnologia. Entendemos que a educação é o
              principal motor do desenvolvimento e, ao unir a expertise de
              mercado da Gazin com a excelência acadêmica da Unipar, criamos um
              ambiente de aprendizado dinâmico, prático e alinhado com as
              demandas do setor.
            </p>
            <p>
              Este curso foi desenhado para ser uma jornada de imersão no
              universo da programação e do desenvolvimento de sistemas. Aqui, os
              alunos têm a oportunidade única de aprender com profissionais
              atuantes e professores altamente qualificados, em uma estrutura
              que combina teoria e prática de forma eficaz. As aulas são
              projetadas para desafiar os estudantes a resolver problemas reais,
              incentivando o pensamento crítico, a criatividade e o trabalho em
              equipe.
            </p>
            <br></br>
          </div>
          <div className="w-[45%] max-sm:mx-auto max-sm:flex-col max-sm:w-[100%] text-right max-sm:text-left">
            <h2 className="lg:hidden md:hidden sm:hidden text-3xl mb-5 font-extralight">
              Por que esta é uma grande oportunidade?
            </h2>
            <p>
              Mais do que um curso, o Codifica Jovens é um passaporte para o
              futuro. Em um mercado tecnológico cada vez mais competitivo, o
              projeto oferece um diferencial significativo para a carreira. O
              programa foca não apenas no conhecimento técnico em programação e
              desenvolvimento de software, mas também nas habilidades
              comportamentais que são essenciais para o sucesso profissional,
              preparando os jovens de forma completa.
            </p>
            <p>
              A parceria com a Gazin proporciona aos alunos uma conexão direta
              com o ambiente corporativo e uma perspectiva real dos desafios da
              área. Essa é a chance de construir um networking valioso e de se
              destacar para uma das grandes empresas do país. Ao final do curso,
              os jovens saem mais preparados para o mercado, com uma experiência
              educacional de alto nível, chancelada pela Unipar e pela Gazin,
              prontos para inovar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
