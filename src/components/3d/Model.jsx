import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/planet.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials["Material.002"]}
        rotation={[-0.085, -0.018, 0.006]}
      />
    </group>
  );
}

useGLTF.preload("/planet.glb");
