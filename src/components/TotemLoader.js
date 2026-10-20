import {
  Component,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
} from "@react-three/drei";
import * as THREE from "three";

// A turned, one-piece metal profile: short pointed foot, broad thin rim,
// concave shoulder, and a fine tapering spindle. Dimensions follow the references.
function SpinningTop({ reducedMotion }) {
  const precession = useRef();
  const tilt = useRef();
  const spin = useRef();
  const elapsed = useRef(0);
  const geometry = useMemo(() => {
    const profile = [
      [0, 0],
      [0.018, 0.018],
      [0.035, 0.065],
      [0.063, 0.15],
      [0.105, 0.255],
      [0.17, 0.36],
      [0.27, 0.47],
      [0.4, 0.56],
      [0.55, 0.625],
      [0.66, 0.66],
      [0.685, 0.675],
      [0.686, 0.692],
      [0.665, 0.708],
      [0.57, 0.735],
      [0.45, 0.775],
      [0.345, 0.835],
      [0.26, 0.915],
      [0.198, 1.02],
      [0.15, 1.145],
      [0.112, 1.29],
      [0.085, 1.44],
      [0.068, 1.6],
      [0.055, 1.73],
      [0.042, 1.79],
      [0.02, 1.805],
      [0, 1.805],
    ];
    const curve = new THREE.SplineCurve(
      profile.map(([r, y]) => new THREE.Vector2(r, y)),
    );
    return new THREE.LatheGeometry(curve.getPoints(180), 160);
  }, []);
  const roughness = useMemo(() => {
    // Fine concentric machining variation, deliberately subtle, not glitter.
    const size = 256;
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const value =
          150 + 13 * Math.sin(y * 2.73) + 4 * Math.sin(x * 1.17 + y * 3.1);
        const i = (y * size + x) * 4;
        data[i] = data[i + 1] = data[i + 2] = value;
        data[i + 3] = 255;
      }
    }
    const texture = new THREE.DataTexture(data, size, size);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  }, []);
  useEffect(
    () => () => {
      geometry.dispose();
      roughness.dispose();
    },
    [geometry, roughness],
  );
  useFrame((_, delta) => {
    if (!precession.current || reducedMotion) return;
    elapsed.current += Math.min(delta, 0.05);
    const t = elapsed.current;
    // Separate rotations preserve the physical contact point: precession about
    // world-up, nutation about the tip, then fast spin around the body's own axis.
    // This is an analytic heavy-top approximation, not a rigid-body simulation.
    const omega = 23 * Math.exp(-0.022 * t);
    const theta = 0.075 + 0.038 * (1 - Math.exp(-t / 6));
    precession.current.rotation.y +=
      (1.6 / (omega / 23)) * Math.min(delta, 0.05);
    tilt.current.rotation.z =
      theta + 0.012 * Math.exp(-t / 3) * Math.cos(t * 8);
    spin.current.rotation.y += omega * Math.min(delta, 0.05);
  });
  return (
    <group ref={precession} position={[0, 0.006, 0]}>
      <group ref={tilt} rotation={[0, 0, 0.085]}>
        <group ref={spin}>
          <mesh geometry={geometry} castShadow>
            <meshStandardMaterial
              color="#a49c91"
              metalness={1}
              roughness={0.58}
              roughnessMap={roughness}
              envMapIntensity={1.6}
            />
          </mesh>
          {/* A tiny lathed groove catches the key light on the spinning rim. */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.687, 0]}>
            <torusGeometry args={[0.679, 0.003, 6, 160]} />
            <meshStandardMaterial
              color="#655d54"
              metalness={1}
              roughness={0.34}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}
function Scene({ reducedMotion, onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return (
    <>
      <fog attach="fog" args={["#211a16", 8, 24]} />
      <ambientLight intensity={0.18} />
      <spotLight
        position={[-3, 5, 3]}
        color="#ffe5bd"
        intensity={65}
        angle={0.6}
        penumbra={1}
      />
      <Environment resolution={128}>
        <Lightformer
          form="rect"
          intensity={5}
          color="#fff0d9"
          position={[-3, 3, 2]}
          scale={[2, 5, 1]}
          rotation={[0, 0.9, 0]}
        />
        <Lightformer
          form="rect"
          intensity={3}
          color="#f6f3ef"
          position={[3, 2, 1]}
          scale={[1, 4, 1]}
          rotation={[0, -0.9, 0]}
        />
        <Lightformer
          form="rect"
          intensity={2}
          color="#b39478"
          position={[0, 4, -3]}
          scale={[5, 2, 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={0.7}
          color="#a4b1bb"
          position={[0, 1, 4]}
          scale={[5, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={2.5}
          color="#ded6c9"
          position={[-2, -2, 4]}
          scale={[5, 4, 1]}
          rotation={[0, 0.3, 0]}
        />
      </Environment>
      <SpinningTop reducedMotion={reducedMotion} />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.008, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />
        <MeshReflectorMaterial
          resolution={512}
          blur={[120, 40]}
          mixBlur={0.6}
          mixStrength={2}
          mirror={0.6}
          color="#655143"
          metalness={0.15}
          roughness={0.5}
          depthScale={0.35}
          minDepthThreshold={0.5}
          maxDepthThreshold={1.4}
        />
      </mesh>
      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.4}
        scale={5}
        blur={2.8}
        far={0.6}
        resolution={256}
        color="#080503"
      />
    </>
  );
}
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onReady();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export default function TotemLoader({ onReady }) {
  const [supported, setSupported] = useState(false);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const readyRef = useRef(onReady);
  readyRef.current = onReady;
  const markReady = useMemo(
    () => () => {
      setReady(true);
      readyRef.current?.();
    },
    [],
  );
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReducedMotion(reduced);
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    if (gl && !reduced) {
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      setSupported(true);
    } else {
      readyRef.current?.();
    }
  }, []);
  return (
    <div
      className="totem-scene"
      aria-label="A metallic spinning top precessing on a reflective tabletop"
      role="img"
    >
      {/* Local reference is also the fallback on devices without WebGL. */}
      {!ready && (
        <picture className="totem-reference">
          <source
            media="(prefers-reduced-motion: reduce)"
            srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/intro/totem-still.jpg`}
          />
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/intro/totem-reference.gif`} alt="" />
        </picture>
      )}
      {supported && (
        <SceneBoundary
          onReady={() => {
            setReady(false);
            setSupported(false);
            readyRef.current?.();
          }}
        >
          <Canvas
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 1.65, 7.5], fov: 32 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            onCreated={({ camera, gl }) => {
              camera.lookAt(0, 0.8, 0);
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.05;
              gl.domElement.addEventListener(
                "webglcontextlost",
                () => {
                  setReady(false);
                  setSupported(false);
                  readyRef.current?.();
                },
                { once: true },
              );
            }}
          >
            <Suspense fallback={null}>
              <Scene reducedMotion={reducedMotion} onReady={markReady} />
            </Suspense>
          </Canvas>
        </SceneBoundary>
      )}
    </div>
  );
}
