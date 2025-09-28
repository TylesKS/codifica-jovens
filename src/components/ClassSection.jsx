import "boxicons/css/boxicons.min.css";

function ClassSection() {
  return (
    <div>
      <section className="mt-40 relative z-0 h-[100%] w-full">
        <div className="p-4">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-center text-6xl py-8" id="turma">
              Professores
            </h1>
            <div className="grid grid-cols-2 grid-rows-11 gap-2">
              <div className="row-span-6 justify-center flex items-center relative">
                <img
                  src="/Eduarda.png"
                  alt="Professor Cleber"
                  className="relative z-10 max-sm:mt-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              </div>
              <div className="col-start-1 row-start-7">
                <h1 className="text-4xl">Cleber</h1>
              </div>
              <div className="col-start-1 row-start-8">
                <div className="flex w-[50%] max-sm:w-[90%] mx-auto justify-between">
                  <div className="">
                    Professor de Office: Word e Lógica de Programação
                  </div>
                  <div className=""></div>
                </div>
              </div>
              <div className="col-start-1 row-start-9">
                <div className="flex w-[50%] max-sm:w-[90%] mx-auto justify-between">
                  <div className="">28/06</div>
                  <div className="text-right">Office: Word</div>
                </div>
              </div>
              <div className="col-start-1 row-start-10">
                <div className="flex w-[50%] max-sm:w-[90%] mx-auto justify-between">
                  <div className="">19/07</div>
                  <div className="text-right">Lógica de Programação</div>
                </div>
              </div>
              <div className="col-start-1 row-start-11">
                <div className="w-[50%] max-sm:w-[90%] mx-auto relative group cursor-pointer p-1">
                  <a
                    href="/LogicadeProgramação30-08.rar"
                    download="LogicadeProgramação30-08.rar"
                    className=""
                  >
                    <div className="flex justify-between w-full hover:text-[var(--color)] transition-colors duration-300">
                      <div className="text-left">30/08</div>
                      <div className="flex items-center gap-2">
                        <div className="">Logica de Programação</div>
                        <i class="bx bx-download"></i>
                      </div>
                    </div>
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                    <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                  </a>
                </div>
              </div>
              <div className="row-span-6 col-start-2 row-start-1 justify-center flex items-center max-sm:mt-40 relative">
                <img
                  src="/Eduarda.png"
                  alt="Professora Eduarda"
                  className="relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 pointer-events-none"></div>
              </div>
              <div className="col-start-2 row-start-7">
                <h1 className="text-3xl">Eduarda</h1>
              </div>
              <div className="col-start-2 row-start-8">
                <div className="flex w-[50%] max-sm:w-[90%] mx-auto justify-between">
                  <div className="">
                    Professora de Robótica e Realidade Virtual e Aumentada
                  </div>
                  <div className=""></div>
                </div>
              </div>
              <div className="col-start-2 row-start-9">
                <div className="w-[50%] max-sm:w-[90%] mx-auto relative group cursor-pointer p-1">
                  <a
                    href="/Robotica06-09.rar"
                    download="Robotica06-09.rar"
                    className=""
                  >
                    <div className="flex justify-between w-full hover:text-[var(--color)] transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <i class="bx bx-download"></i>
                        <div className="text-left">Robótica</div>
                      </div>
                      <div className="">06/09</div>
                    </div>

                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                    <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                  </a>
                </div>
              </div>
              <div className="col-start-2 row-start-10">
                <div className="w-[50%] max-sm:w-[90%] mx-auto relative group cursor-pointer p-1">
                  <a
                    href="/Robotica06-09.rar"
                    download="RealidadeAumentadaeVirtual-27-9.zip"
                    className=""
                  >
                    <div className="flex justify-between w-full hover:text-[var(--color)] transition-colors duration-300">
                      <div className="flex items-center gap-2">
                        <i class="bx bx-download"></i>
                        <div className="text-left">
                          Realidade Virtual e Aumentada
                        </div>
                      </div>
                      <div className="">27/09</div>
                    </div>
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                    <span className="absolute bottom-0 right-1/2 h-[2px] w-0 bg-[var(--color)] origin-left transition-all duration-300 group-hover:w-1/2"></span>
                  </a>
                </div>
              </div>
              <div className="col-start-2 row-start-11">
                <div className="flex w-[50%] max-sm:w-[90%] mx-auto justify-between">
                  <div className="text-left">Realidade Virtual e Aumentada</div>
                  <div className="">03/10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassSection;
