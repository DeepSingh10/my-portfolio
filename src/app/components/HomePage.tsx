"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

function GalaxySpheres() {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const numPoints = 10000;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const arr: [number, number, number][] = new Array(numPoints).fill(0).map(() => {
      const radius = Math.random() * 40;
      const angle = Math.random() * Math.PI * 2;
      const inclination = Math.random() * Math.PI;

      const x = radius * Math.sin(inclination) * Math.cos(angle);
      const y = radius * Math.sin(inclination) * Math.sin(angle);
      const z = radius * Math.cos(inclination);

      return [x, y, z] as [number, number, number];
    });
    return arr;
  }, []);

  useEffect(() => {
    positions.forEach((pos, i) => {
      dummy.position.set(...pos);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [positions]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, numPoints]}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshLambertMaterial color="white" transparent={true} />
    </instancedMesh>
  );
}

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 40], fov: 20 }}>
        <OrbitControls />
        <ambientLight intensity={1} />
        <pointLight position={[1, 1, 1]} intensity={2} />
        <GalaxySpheres />
        <Text
          position={[0, 0, 0]}        // X, Y, Z position in 3D space
          fontSize={1}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Hi Myself, Deep Singh Yadav
        </Text>
      </Canvas>
    </div>
  );
}
