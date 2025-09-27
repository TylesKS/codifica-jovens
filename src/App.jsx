
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Viewer from "./components/3d/Viewer"
import ParticlesBG from "./components/ParticlesBG";
import PartnershipSection from "./components/PartnershipSection";
import ClassSection from "./components/ClassSection";
import ImageGallery from "./components/ImageGallery"
import About from "./components/About"
function App() {
  return (
    <>
      <ParticlesBG />
      <div className="h-0 max-sm:w-[10rem] w-[40rem] absolute top-[30%] right-0 overflow-x-hidden shadow-[0_0_1600px_40px_#9000ff] -rotate-[40deg] z-10"></div>
      <div className="h-0 max-sm:w-[10rem] w-[40rem] absolute top-[60%] right-0 overflow-x-hidden shadow-[0_0_1600px_40px_#9000ff] -rotate-[40deg] z-10"></div>
      <Header />
      <HeroSection />
      <About />
      <PartnershipSection />
      <Viewer />
      <ClassSection />
      <ImageGallery />
    </>
  )
}

export default App