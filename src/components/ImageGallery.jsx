import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const images = [
  {
    id: 1,
    src: "/turmainiciosetembro.jpg",
    alt: "Foto do dia 06 de Setembro. ",
    credit: "Aula de Robótica",
  },
  {
    id: 2,
    src: "/turmalauana.jpg",
    alt: "Selfie com a Lauana. Foto do dia 06 de Setembro. ",
    credit: "Aula de Robótica",
  },
  {
    id: 3,
    src: "/Turma27-9.jpg",
    alt: "Foto do dia 27 de Setembro.",
    credit: "Aula de Realidade Virtual e Aumentada",
  },
  {
    id: 4,
    src: "/foto-27-9-2.jpg",
    alt: "Foto do dia 27 de Setembro.",
    credit: "Aula de Realidade Virtual e Aumentada",
  },
  {
    id: 5,
    src: "/Foto-04-10.jpg",
    alt: "Foto do dia 04 de Outubro.",
    credit: "Aula de Realidade Virtual e Aumentada",
  },
  {
    id: 6,
    src: "/Aula_Excel_25-10.jpg",
    alt: "Foto do dia 25 de Outubro.",
    credit: "Aula de Excel",
  }
];

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentImageIndex(slideIndex);
  };

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (!isPaused && !modalOpen) {
      const timerId = setInterval(goToNextImage, 3000);
      return () => clearInterval(timerId);
    }
  }, [currentImageIndex, isPaused, modalOpen, goToNextImage]);

  const currentImage = images[currentImageIndex];

  return (
    <div
      id="gallery"
      className=" w-[calc(100%-3rem)] max-w-3xl mx-auto my-12 z-0 group mt-50 scroll-mt-60"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="text-4xl font-thin mb-10 text-center">Nossa Galeria</h1>
      <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-[var(--color)]/80">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover aspect-video flex-shrink-0 cursor-pointer"
              onClick={openModal}
            />
          ))}
        </div>
        <button
          onClick={goToPreviousImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                currentImageIndex === slideIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[99] p-4 animate-fadeIn"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="bg-gray-900/60 border-2 border-[var(--color)]/30 ring-1 ring-white/10 rounded-lg p-4 relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full p-1.5 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Fechar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto rounded-lg mb-4 max-h-[80vh] object-contain"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {currentImage.alt}
                </h3>
                <p className="text-sm text-gray-400">
                  Conteúdo do dia: {currentImage.credit}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default ImageGallery;
