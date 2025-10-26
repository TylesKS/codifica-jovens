import React, { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { Model } from "./Model";
function EnvSafe({ file = "/hdri/potsdamer_platz_1k.hdr", background = true }) {
  const { scene } = useThree();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    new RGBELoader().load(
      file,
      (texture) => {
        if (cancelled) return;
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
        if (background) scene.background = texture;
      },
      undefined,
      () => setFailed(true)
    );
    return () => {
      cancelled = true;
    };
  }, [file, background, scene]);

  return failed ? (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 2]} intensity={2} />
    </>
  ) : null;
}

function WebGLGuard() {
  const { gl } = useThree();
  useEffect(() => {
    const onLost = (e) => {
      e.preventDefault();
      console.warn("WebGL context lost");
    };
    gl.domElement.addEventListener("webglcontextlost", onLost, { passive: false });
    return () => gl.domElement.removeEventListener("webglcontextlost", onLost);
  }, [gl]);
  return null;
}

export default function Viewer() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="
        absolute min-lg:right-[-15vw] min-lg:w-[80em] min-md:right-[-0em] min-md:w-[30em] min-md:top-60 min-lg:top-0  min-md:h-[28em] min-lg:h-[57em] min-lg:mt-10 top-0 overflow-x-hidden z-10
        max-sm:relative max-sm:mx-auto max-sm:mt-0 max-sm:w-[20em] max-sm:h-[20em] max-sm:right-0
        max-sm:hidden"
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ fov: 30, position: [8, 0, 0] }}
        onCreated={({ gl }) => {
          if ("outputColorSpace" in gl) gl.outputColorSpace = THREE.SRGBColorSpace;
          else gl.outputEncoding = THREE.sRGBEncoding;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.0;
        }}
      >
        <Suspense fallback={null}>
          <EnvSafe file="/hdri/potsdamer_platz_1k.hdr" background />
          <Stage
            controls={ref}
            preset="rembrandt"
            intensity={1}
            environment={null}
            adjustCamera={false}
          >
            <Model />
          </Stage>
        </Suspense>

        <OrbitControls
          ref={ref}
          autoRotate={true}
          autoRotateSpeed={2}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <WebGLGuard />
      </Canvas>
    </div>
  );
}
