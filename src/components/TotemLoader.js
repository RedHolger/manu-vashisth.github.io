import { Suspense, useRef, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function ProceduralTotem() {
  const group = useRef();

  const bodyGeometry = useMemo(() => {
    const points = [
      new THREE.Vector2(0.012, 0.00),
      new THREE.Vector2(0.022, 0.05),
      new THREE.Vector2(0.040, 0.12),
      new THREE.Vector2(0.070, 0.28),
      new THREE.Vector2(0.130, 0.56),
      new THREE.Vector2(0.240, 0.86),
      new THREE.Vector2(0.430, 1.02),
      new THREE.Vector2(0.560, 1.08),
      new THREE.Vector2(0.630, 1.11),
      new THREE.Vector2(0.605, 1.145),
      new THREE.Vector2(0.500, 1.17),
      new THREE.Vector2(0.215, 1.24),
      new THREE.Vector2(0.155, 1.42),
      new THREE.Vector2(0.125, 1.72),
      new THREE.Vector2(0.105, 1.98),
      new THREE.Vector2(0.092, 2.20),
      new THREE.Vector2(0.088, 2.38),
    ];

    const geometry = new THREE.LatheGeometry(points, 128);
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: '#111111',
      metalness: 0.92,
      roughness: 0.20,
      clearcoat: 0.32,
      clearcoatRoughness: 0.18,
      reflectivity: 0.72,
      envMapIntensity: 1.0,
    });
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    const settle = Math.min(t / 2.8, 1);
    const wobbleAmp = THREE.MathUtils.lerp(0.22, 0.03, settle);
    const orbitAmpX = THREE.MathUtils.lerp(0.040, 0.004, settle);
    const orbitAmpZ = THREE.MathUtils.lerp(0.030, 0.003, settle);

    const spinSpeed =
      t < 1.0
        ? THREE.MathUtils.lerp(6.5, 11.5, t / 1.0)
        : THREE.MathUtils.lerp(11.5, 8.5, Math.min((t - 1.0) / 2.6, 1));

    if (!group.current) return;

    group.current.rotation.y += spinSpeed * delta;

    group.current.position.x = Math.sin(t * 5.7) * orbitAmpX;
    group.current.position.z = Math.cos(t * 5.1) * orbitAmpZ;

    group.current.rotation.z = Math.sin(t * 5.4) * wobbleAmp;
    group.current.rotation.x = Math.cos(t * 4.9) * wobbleAmp * 0.42;
  });

  return (
    <group ref={group} position={[0, -1.04, 0]} scale={0.62}>
      <mesh geometry={bodyGeometry} material={material} castShadow receiveShadow />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 5, 11]} />

      <ambientLight intensity={0.42} />
      <directionalLight position={[3.2, 4.6, 2.8]} intensity={1.05} castShadow />
      <spotLight position={[0, 5.5, 4.5]} angle={0.22} intensity={1.2} penumbra={1} />

      <Suspense fallback={null}>
        <ProceduralTotem />
        <Environment preset="studio" />
      </Suspense>

      <ContactShadows
        position={[0, -1.22, 0]}
        opacity={0.22}
        scale={1.7}
        blur={2.2}
        far={1.4}
        color="#000000"
      />
    </>
  );
}

export default function TotemLoader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="totem3d-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
        >
          <Canvas
            camera={{ position: [0, 0.35, 8.4], fov: 20 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: false }}
          >
            <Scene />
          </Canvas>

          <motion.div
            className="totem3d-copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.72] }}
            transition={{ delay: 0.9, duration: 1.8 }}
          >
            booting portfolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
