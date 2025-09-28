import React from 'react';



const partnersData = [
  {
    name: 'Gazin',
    foundedYear: 1966,
    logoSrc: '/gazin-logo.png',
    altText: 'Logo do Grupo Gazin',
    primaryColor: '#0052FF', 
    textColor: '#FFFFFF',    
    description: 'Uma das maiores redes de varejo do Brasil, com mais de 300 lojas e um forte compromisso com o desenvolvimento das comunidades onde atua.',
    url: 'https://www.gazin.com.br',
  },
  {
    name: 'Unipar',
    foundedYear: 1972,
    logoSrc: '/logouni.png', 
    altText: 'Logo da Unipar - Universidade Paranaense',
    primaryColor: '#D81921', 
    textColor: '#D81921',    
    description: 'Comprometida com a formação de profissionais qualificados, oferecendo cursos de graduação e pós-graduação que impulsionam o desenvolvimento social e científico.',
    url: 'https://www.unipar.br',
  },
];

function PartnerCard({  foundedYear, description, logoSrc, altText, primaryColor, textColor, url }) {
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div
      className="
        group flex flex-col items-center text-center
        w-full max-w-md h-auto sm:h-80
        border rounded-2xl
        shadow-lg p-8
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
      "
      style={{
        backgroundColor: hexToRgba(primaryColor, 0.05),
        borderColor: hexToRgba(primaryColor, 0.2),
        boxShadow: `0 0 25px ${hexToRgba(primaryColor, 0.15)}`,
      }}
    ><a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logoSrc} alt={altText} className='w-36 mb-4' />
      </a>
      <h2
        className="text-4xl font-bold drop-shadow-md transition-colors duration-300 group-hover:drop-shadow-xl"
        style={{ color: textColor }}
      >
        {name}
      </h2>
      <p className="mt-2 text-sm text-white/60 font-mono">
        Fundada em {foundedYear}
      </p>
      <p className="mt-4 text-base text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}


export function PartnershipSection() {
  return (
    <section
    id='partnership'
      className="
      scroll-mt-60
        w-full relative z-0
        mt-[12em] sm:mt-[20em]
        px-6 sm:px-20 py-24
        flex flex-col lg:flex-row
        items-center justify-center
        gap-12 lg:gap-16
        bg-gradient-to-b from-black via-slate-900/90 to-black
      "
    >
      <PartnerCard {...partnersData[0]} />

      <div className="flex flex-col items-center text-white/80 my-4 lg:my-0">
        <span className="uppercase text-xs tracking-widest font-light">Em parceria</span>
        <span
          className="text-6xl mt-2 transition-transform duration-300 hover:scale-125"
          role="img"
          aria-label="Aperto de mãos"
        >
          🤝
        </span>
      </div>

      <PartnerCard {...partnersData[1]} />
    </section>
  );
}

export default PartnershipSection;