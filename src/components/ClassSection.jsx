import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const professores = [
  {
    id: 1,
    nome: 'Cleber',
    imagem: '/Professor-Cleber.png',
    thumbnail: '/Professor_Cleber_Thumb.png',
    cargo: 'Professor de Office: Word e Lógica de Programação',
    aulas: [
      { nome: 'Office: Word', data: '28/06', link: '/' },
      { nome: 'Lógica de Programação', data: '19/07', link: '/Logica de Programação-19-07.rar' },
      { nome: 'Lógica de Programação', data: '30/08', link: '/LogicadeProgramação30-08.rar' },
      { nome: 'Ofice: Excel', data: '18/10 e 25/10', link: '/Office-Excel-18-10_25-10.rar' }
    ],
    social: {
      github: '#',
      linkedin: 'https://www.linkedin.com/in/prof-msc-cleber-de-souza-relli-15179a42/',
      whatsapp: 'https://wa.me/554688126759',
    },
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
      { nome: 'Realidade Virtual e Aumentada', data: '04/10', link: '/Aula_Realidade_Virtual_e_Aumentada_4_10.rar' },
      { nome: '', data: '01/11', link: '/' },
    ],
    social: {
      github: '#',
      linkedin: 'https://www.linkedin.com/in/eduardamaganhaalmeida/',
      whatsapp: 'https://wa.me/554391921420',
    },
  },
];

function SocialIcon({ href, children, label }) {
  const isDisabled = !href || href === '#';
  return (
    <a
      href={isDisabled ? undefined : href}
      onClick={(e) => isDisabled && e.preventDefault()}
      target={isDisabled ? undefined : '_blank'}
      rel={isDisabled ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className={
        `inline-flex items-center justify-center p-2 rounded-full transition-transform duration-200 ` +
        (isDisabled
          ? 'opacity-40 cursor-not-allowed bg-white/5'
          : 'hover:scale-110 bg-white/5 hover:bg-white/10')
      }
    >
      {children}
    </a>
  );
}

function ProfessorCard({ nome, imagem, thumbnail, cargo, aulas, social = {}, imagePosition = 'left' }) {
  return (
    <div
      className={`bg-[var(--color)]/10 border border-blue-500/30 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 duration-300 transition-all ease-in-out overflow-hidden flex ${
        imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
      } h-full`}
    >
      <div className="relative w-2/5 max-sm:hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
        <img
          src={imagem}
          alt={`Professor ${nome}`}
          draggable="false"
          className="px-0 relative z-10 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
      </div>

      <div className="flex flex-col p-6 w-3/5 max-sm:w-full text-left h-full">
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

        <div id="classes" className="scroll-mt-30 flex flex-col gap-y-3 flex-1">
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
                <span className="flex items-center gap-3 ">
                  <span classnam>{aula.nome}</span>
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-blue-300">{aula.data}</span>
                  {isBlocked ? (
                    <i className="bx bx-block text-blue-400 text-lg" title="Sem arquivo para download" aria-hidden="true" />
                  ) : (
                    <i className="bx bx-download text-blue-400 text-lg" title="Baixar arquivo" aria-hidden="true" />
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-auto pt-4 flex items-center gap-3 border-t border-white/10">
          <SocialIcon href={social.github} label={`${nome} GitHub`}>
            <FaGithub className="text-2xl text-white" />
          </SocialIcon>
          <SocialIcon href={social.linkedin} label={`${nome} LinkedIn`}>
            <FaLinkedin className="text-2xl text-white" />
          </SocialIcon>
          <SocialIcon href={social.whatsapp} label={`${nome} WhatsApp`}>
            <FaWhatsapp className="text-2xl text-white" />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
}

function ClassSection() {
  return (
    <div className="mt-50 w-full my-20 px-4 scroll-mt-30" id="professores">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl  font-thin text-center mb-12 text-white">
          Nossos Professores
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch justify-items-center">
          {professores.map((professor, index) => (
            <ProfessorCard
              key={professor.id}
              nome={professor.nome}
              imagem={professor.imagem}
              thumbnail={professor.thumbnail}
              cargo={professor.cargo}
              aulas={professor.aulas}
              social={professor.social}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClassSection;
