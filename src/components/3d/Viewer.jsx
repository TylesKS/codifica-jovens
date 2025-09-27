import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './Model'
export default function Viewer() {
    const ref = useRef()
    return (
        <div
            className="
                absolute right-[-15vw] w-[60em] h-[57em] mt-10 top-0 overflow-x-hidden z-10
                max-sm:relative max-sm:mx-auto max-sm:mt-0 max-sm:w-[20em] max-sm:h-[20em] max-sm:right-0
                max-sm:hidden"
        >
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [8, 0, 0] }}>
                <Suspense fallback={null}>
                    <Stage
                        controls={ref}
                        preset="rembrandt"
                        intensity={1}
                        environment="city"
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

            </Canvas>
        </div>
    )
}
