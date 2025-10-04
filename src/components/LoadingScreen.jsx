import { useState, useEffect } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [isComplete, setIsComplete] = useState(false);
  const [logoText, setLogoText] = useState({
    start: ' ',
    od: '  ',
    colon: ' ',
    fica: '    ',
    jo: '  ',
    backslash: ' ',
    slash: ' ',
    ens: '   ',
    underscore: ' '
  });

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
    const finalText = {
      start: '<',
      od: 'od',
      colon: ':',
      fica: 'fica',
      jo: 'Jo',
      backslash: '\\',
      slash: '/',
      ens: 'ens',
      underscore: '_'
    };

    if (prefersReduced) {
      setLogoText(finalText);
      setIsComplete(true);
      setTimeout(onLoadingComplete, 300);
      return;
    }

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    // slightly faster timings than before
    const flashBase = 20; // before: 30
    const flashInc = 6;   // before: 8
    const afterChar = 40; // before: 60

    const animatePart = async (key, final) => {
      const width = final.length;
      let current = Array(width).fill(' ');
      for (let i = 0; i < width; i++) {
        const flashes = 6;
        for (let f = 0; f < flashes; f++) {
          current[i] = randomChar();
          setLogoText(prev => ({ ...prev, [key]: current.join('') }));
          await sleep(flashBase + f * flashInc);
        }
        current[i] = final[i];
        setLogoText(prev => ({ ...prev, [key]: current.join('') }));
        await sleep(afterChar);
      }
      if (width === 0) {
        setLogoText(prev => ({ ...prev, [key]: final }));
      }
      await sleep(60);
    };

    let cancelled = false;
    const animate = async () => {
      const sequence = ['start', 'od', 'colon', 'fica', 'jo', 'backslash', 'slash', 'ens', 'underscore'];
      for (const part of sequence) {
        if (cancelled) return;
        await animatePart(part, finalText[part]);
      }
      if (cancelled) return;
      await sleep(300);
      setIsComplete(true);
      setTimeout(onLoadingComplete, 400);
    };

    animate();

    return () => {
      cancelled = true;
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-neutral-900 to-black opacity-95" />

        <div
          className="absolute -left-8 -top-12 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 rounded-full filter blur-2xl sm:blur-3xl opacity-30 animate-blob"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.55), transparent 35%), radial-gradient(circle at 70% 70%, rgba(236,72,153,0.35), transparent 25%)'
          }}
        />

        <div
          className="absolute right-[-8%] bottom-[-8%] w-44 sm:w-64 md:w-80 h-44 sm:h-64 md:h-80 rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-2000"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(34,197,94,0.30), transparent 40%)'
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,left,rgba(255,255,255,0.02),transparent_40%)]" />
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(12px, -8px) scale(1.04); } /* menos movimento pra mobile */
          66% { transform: translate(-10px, 10px) scale(0.98); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; } /* leve redução no período */
        .animation-delay-2000 { animation-delay: 2s; }
        @media (prefers-reduced-motion: reduce) {
          .animate-blob { animation: none !important; }
        }
      `}</style>

      <div
        className="flex items-center border-2 border-transparent p-2 rounded-2xl duration-300 text-5xl max-sm:text-3xl max-md:text-4xl font-mono px-4"
        style={{ maxWidth: 'min(95%, 720px)', wordBreak: 'break-word', justifyContent: 'center' }}
      >
        <span className="text-[var(--color)] w-auto sm:w-[1ch] transition-all duration-200 ease-out">{logoText.start}</span>
        <span className="text-white w-auto sm:w-[2ch] transition-all duration-200 ease-out">{logoText.od}</span>
        <span className="text-[var(--color)] w-auto sm:w-[1ch] transition-all duration-200 ease-out">{logoText.colon}</span>
        <span className="text-white w-auto sm:w-[4ch] transition-all duration-200 ease-out">{logoText.fica}</span>
        <span className="text-white ml-4 w-auto sm:w-[2ch] transition-all duration-200 ease-out">{logoText.jo}</span>
        <span className="text-white text-[1.05em] sm:text-[1.2em] mt-1 max-sm:mt-0 max-lg:mt-0 w-auto sm:w-[1ch] transition-all duration-200 ease-out">
          {logoText.backslash}
        </span>
        <span className="text-[var(--color)] text-[1.05em] sm:text-[1.2em] mt-1 max-sm:mt-0 max-lg:mt-0 w-auto sm:w-[1ch] transition-all duration-200 ease-out">
          {logoText.slash}
        </span>
        <span className="text-white w-auto sm:w-[3ch] transition-all duration-200 ease-out">{logoText.ens}</span>
        <span className="text-[var(--color)] w-auto sm:w-[1ch] transition-all duration-200 ease-out">{logoText.underscore}</span>
      </div>
    </div>
  );
}
