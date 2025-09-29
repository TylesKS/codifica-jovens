// PartnershipSection.jsx (substitua o conteúdo atual por este)
import React from "react";

const partnersData = [
  {
    name: "Gazin",
    foundedYear: 1966,
    logoSrc: "/gazin-logo.png",
    altText: "Logo do Grupo Gazin",
    primaryColor: "#0052FF",
    textColor: "#FFFFFF",
    description:
      "Uma das maiores redes de varejo do Brasil, com mais de 300 lojas e um forte compromisso com o desenvolvimento das comunidades onde atua.",
    url: "https://www.gazin.com.br",
  },
  {
    name: "Unipar",
    foundedYear: 1972,
    logoSrc: "/logouni.png",
    altText: "Logo da Unipar - Universidade Paranaense",
    primaryColor: "#D81921",
    textColor: "#FFFFFF",
    description:
      "Comprometida com a formação de profissionais qualificados, oferecendo cursos de graduação e pós-graduação que impulsionam o desenvolvimento social e científico.",
    url: "https://www.unipar.br",
  },
];

function PartnerCard({ name, foundedYear, description, logoSrc, altText, primaryColor, textColor, url }) {
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-md transform transition-all duration-300 hover:-translate-y-2 "
      aria-label={`Abrir site da ${name}`}
    >
      <div
        className="flex flex-col items-center text-center border rounded-2xl shadow-lg p-8 h-full "
        style={{
          background: hexToRgba(primaryColor, 0.03),
          border: `1px solid ${hexToRgba(primaryColor, 0.18)}`,
          boxShadow: `0 8px 30px ${hexToRgba(primaryColor, 0.07)}`,
        }}
      >
        <img src={logoSrc} alt={altText} className="w-36 h-12 mb-4 object-contain" />
        <h3 className="text-2xl font-semibold mb-1" style={{ color: textColor }}>
          {name}
        </h3>
        <p className="mt-2 text-sm text-white/60 font-mono">Fundada em {foundedYear}</p>
        <p className="mt-4 text-base text-white/80 leading-relaxed">{description}</p>
        <span className="mt-6 inline-block px-4 py-2 rounded-md text-sm font-medium border border-white/10 group-hover:border-[var(--color)] transition-colors">
          Visitar
        </span>
      </div>
    </a>
  );
}

export function PartnershipSection() {
  return (
    <section id="partnership" className="mt-120 scroll-mt-45 w-full px-6 sm:px-20 py-24 flex flex-col lg:flex-row items-center justify-center gap-12 bg-gradient-to-b from-black/20 via-slate-900/90 to-black/20">
      <PartnerCard {...partnersData[0]} />
      <div className="flex flex-col items-center text-white/80 my-4 lg:my-0">
        <span className="uppercase text-2xl tracking-widest font-light">Em parceria</span>
        <span className="text-6xl mt-2 transition-transform duration-300 hover:scale-125" role="img" aria-label="Aperto de mãos">🤝</span>
      </div>
      <PartnerCard {...partnersData[1]} />
    </section>
  );
}

export default PartnershipSection;
