import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { pointer } from "../lib/pointer";

function StarField({ count = 1100 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const geom = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18 - 1;

      const t = Math.random();
      if (t > 0.72) color.set("#7dd3fc");
      else if (t > 0.4) color.set("#e0f2fe");
      else color.set("#38bdf8");

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [count]);

  useEffect(() => () => geom.dispose(), [geom]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.012;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.03;
  });

  return (
    <points ref={points} geometry={geom}>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.82}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function EmberField({ count = 180 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.4) * 8;
    }
    return arr;
  }, [count]);

  const geom = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [positions]);

  useEffect(() => () => geom.dispose(), [geom]);

  useFrame((state) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      arr[ix + 1] += 0.004 + (i % 5) * 0.0006;
      arr[ix] += Math.sin(t * 0.4 + i) * 0.0015;
      if (arr[ix + 1] > 5.5) arr[ix + 1] = -5.2;
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geom}>
      <pointsMaterial
        size={0.045}
        color="#67e8f9"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Asteroids() {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(
    () => [
      { p: [4.8, -2.2, -3.2] as const, s: 0.42, r: 0.4 },
      { p: [5.6, 1.8, -4.1] as const, s: 0.28, r: 1.1 },
      { p: [-5.4, 2.4, -5] as const, s: 0.22, r: 0.7 },
      { p: [3.2, 3.1, -6] as const, s: 0.18, r: 2.2 },
      { p: [-4.6, -2.8, -4.4] as const, s: 0.32, r: 1.6 },
      { p: [6.2, -0.4, -5.5] as const, s: 0.2, r: 0.2 },
    ],
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      child.rotation.y += 0.0018 * (i + 1);
      child.rotation.x += 0.0009;
      child.position.y += Math.sin(t * 0.35 + i) * 0.0016;
    });
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <mesh key={i} position={item.p} scale={item.s} rotation={[item.r, item.r * 0.4, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0b1524"
            roughness={0.48}
            metalness={0.82}
            emissive="#083344"
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    const cam = state.camera;
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, pointer.nx * 0.55, 0.035);
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, pointer.ny * 0.28, 0.035);
    cam.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      dpr={isMobile ? [1, 1.15] : [1, 1.6]}
      camera={{ position: [0, 0, 6.2], fov: 52 }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      frameloop="always"
    >
      <fog attach="fog" args={["#030711", 8, 20]} />
      <ambientLight intensity={0.28} />
      <pointLight position={[4.5, 2.2, 3]} color="#67e8f9" intensity={6} distance={22} decay={0.6} />
      <pointLight position={[-5, -1.5, 2]} color="#0369a1" intensity={3} distance={18} decay={0.6} />
      <StarField count={isMobile ? 520 : 1100} />
      <EmberField count={isMobile ? 90 : 180} />
      <Asteroids />
      <CameraRig />
    </Canvas>
  );
}
