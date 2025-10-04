import React from 'react';

const professores = [
  {
    id: 1,
    nome: 'Cleber',
    imagem: '/Professor_Placeholder.png',
    thumbnail: '/Professor_Placeholder_Thumb.png',
    cargo: 'Professor de Office: Word e Lógica de Programação',
    aulas: [
      { nome: 'Office: Word', data: '28/06', link: '/' },
      { nome: 'Lógica de Programação', data: '19/07', link: '/' },
      { nome: 'Lógica de Programação', data: '30/08', link: '/LogicadeProgramação30-08.rar' },
    ],
  },
  {
    id: 2,
    nome: 'Eduarda',
    imagem: '/Eduarda.png',
    thumbnail: '/EduardaThumb.png', 
    cargo: 'Professora de Robótica e Realidade Virtual e Aumentada',
    aulas: [
      { nome: 'Introdução à Robótica', data: '06/09', link: '/Robotica06-09.rar' },
      { nome: 'Realidade Virtual e Aumentada', data: '27/09', link: '/RealidadeAumentadaeVirtual-27-9.zip' },
      { nome: 'Realidade Virtual e Aumentada', data: '04/10', link: '/' },
    ],
  },
];

function ProfessorCard({ nome, imagem, thumbnail, cargo, aulas, imagePosition = 'left' }) {
  return (
    <div className={`w-[35em] max-w-2xl bg-[var(--color)]/10 border border-blue-500/30 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 duration-300 transition-all ease-in-out overflow-hidden flex ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className=" relative w-2/5 max-sm:hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
        <img 
          src={imagem} 
          alt={`Professor ${nome}`} 
          draggable="false" 
          className="px-2 relative z-10 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
      </div>
      <div className="flex flex-col p-6 w-3/5 max-sm:w-full text-left">
        <div className="max-sm:flex max-sm:items-center max-sm:gap-4">
          <img 
            src={thumbnail} 
            alt={`${nome} thumbnail`}
            className="hidden max-sm:block w-16 h-16 rounded-full object-cover border-2 border-blue-500/50"
          />
          <div>
            <h2 className="text-4xl font-bold text-white max-sm:text-2xl">{nome}</h2>
            <p className="font-light text-md text-gray-300 mt-1 max-sm:text-sm">
              {cargo}
            </p>
          </div>
        </div>
        
        <hr className="my-4 border-gray-600" /> 
        
        <div id="classes" className="flex flex-col gap-y-3">
          {aulas.map((aula, index) => {
            const isBlocked = !aula.link || aula.link === '/' || aula.link.trim() === '';
            const itemKey = `${nome}-${index}`;

            return (
              <a
                key={itemKey}
                href={isBlocked ? undefined : aula.link}
                onClick={(e) => isBlocked && e.preventDefault()}
                aria-disabled={isBlocked}
                className={
                  `mt-5 py-5 px-3 text-sm rounded-lg transition-colors duration-300 cursor-pointer flex justify-between items-center ` +
                  (isBlocked
                    ? 'bg-blue-950/20 text-gray-400 cursor-not-allowed hover:bg-red-500/10'
                    : 'bg-indigo-500/15 hover:bg-indigo-500/30 text-gray-200')
                }
              >
                <span className="flex items-center gap-3">
                  <span>{aula.nome}</span>
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-blue-300">{aula.data}</span>
                  {isBlocked ? (
                    <i
                      className="bx bx-block text-blue-400 text-lg"
                      title="Sem arquivo para download"
                      aria-hidden="true"
                    />
                  ) : (
                    <i
                      className="bx bx-download text-blue-400 text-lg"
                      title="Baixar arquivo"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ClassSection() {
  return (
    <div className="mt-50 w-full my-20 px-4 scroll-mt-40" id="professores">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          Nossos Professores
        </h1>
        <div className="flex flex-wrap justify-center items-stretch gap-10">
          {professores.map((professor, index) => (
            <ProfessorCard
              key={professor.id}
              nome={professor.nome}
              imagem={professor.imagem}
              thumbnail={professor.thumbnail}
              cargo={professor.cargo}
              aulas={professor.aulas}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassSection;
