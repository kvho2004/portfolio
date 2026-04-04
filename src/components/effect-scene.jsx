"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, Vector2 } from "three";
import { AsciiEffect } from "./ascii-effect";
import 

function UserModel(props) {
  const { scene } = useGLTF("/models/flower_pot.glb");

  const basicMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: "#917AFF",
        roughness: 0.12,
        metalness: 0,
        flatShading: false,
      }),
    [],
  );

  useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj;
      if (mesh.isMesh) {
        const originalMat = mesh.material;

        if (originalMat && originalMat.dispose && originalMat !== basicMat) {
          try {
            originalMat.dispose();
          } catch (e) {}
        }

        mesh.material = basicMat;
      }
    });

    return () => {
      try {
        if (basicMat && typeof basicMat.dispose === "function") {
          basicMat.dispose();
        }
      } catch (e) {}
    };
  }, [scene, basicMat]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/user-model.glb");

function DraggableUserModel({ isHovered = false }) {
  const groupRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const autoY = useRef(0);

  const AUTO_ROTATE_SPEED = 0.4;
  const HOVER_SPIN_MULTIPLIER = 2;
  const TILT_FORWARD = 0.3;
  const TILT_LEFT = -0.08;

  const spinSpeed = isHovered
    ? AUTO_ROTATE_SPEED * HOVER_SPIN_MULTIPLIER
    : AUTO_ROTATE_SPEED;

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!isDragging.current) {
      autoY.current += delta * spinSpeed;
    }

    groupRef.current.rotation.x = rotation.x + TILT_FORWARD;
    groupRef.current.rotation.y = rotation.y + autoY.current;
    groupRef.current.rotation.z = TILT_LEFT;
  });

  useEffect(() => {
    const container = document.querySelector("[data-model-canvas-container]");
    if (!container) return;

    const onPointerDown = (e) => {
      if (e.target.closest("canvas")) {
        isDragging.current = true;
        lastPointer.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;

      const dx = (e.clientX - lastPointer.current.x) * 0.005;
      const dy = (e.clientY - lastPointer.current.y) * 0.005;

      lastPointer.current = { x: e.clientX, y: e.clientY };

      setRotation((r) => ({ x: r.x - dy, y: r.y + dx }));
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      <UserModel scale={3} />
    </group>
  );
}

function CameraHoverZoom({ isHovered = false }) {
  const { camera } = useThree();

  const CAMERA_BASE_Z = 4.5;
  const CAMERA_ZOOMED_Z = CAMERA_BASE_Z / 1.1;

  useFrame(() => {
    const targetZ = isHovered ? CAMERA_ZOOMED_Z : CAMERA_BASE_Z;

    camera.position.z += (targetZ - camera.position.z) * 0.08;
    camera.position.x += (0 - camera.position.x) * 0.08;
    camera.position.y += (0 - camera.position.y) * 0.08;
  });

  return null;
}

function SceneWithDelayedComposer({
  resolution,
  mousePos,
  enableZoom = true,
  isHovered = false,
}) {
  const { gl } = useThree();
  const [composerReady, setComposerReady] = useState(false);
  const frameCount = useRef(0);

  useFrame(() => {
    frameCount.current++;

    if (frameCount.current >= 3 && !composerReady) {
      setTimeout(() => {
        try {
          const context = gl.getContext();
          if (context && !context.isContextLost?.()) {
            setComposerReady(true);
          }
        } catch (e) {}
      }, 100);
    }
  });

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Environment preset="studio" background={false} />
      <ambientLight intensity={0.08} />
      <directionalLight position={[2, 3.5, 6]} intensity={6} />
      <directionalLight position={[-2, 1.5, 4]} intensity={0.35} />

      <CameraHoverZoom isHovered={isHovered} />

      <Suspense fallback={null}>
        <DraggableUserModel isHovered={isHovered} />
      </Suspense>

      <OrbitControls
        enableRotate={false}
        enableZoom={enableZoom}
        enablePan={false}
      />

      {composerReady && (
        <EffectComposer>
          <AsciiEffect
            style="standard"
            cellSize={9}
            invert={true}
            color={true}
            characterSet="terminal"
            volumeShading={true}
            tintColor="#917AFF"
            resolution={resolution}
            mousePos={mousePos}
            postfx={{
              contrastAdjust: 1.8,
              brightnessAdjust: 0,
            }}
          />
        </EffectComposer>
      )}
    </>
  );
}

export function EffectScene({ className, enableZoom = true }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos] = useState(() => new Vector2(0, 0));
  const [resolution] = useState(() => new Vector2(1920, 1080));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateResolution = () => {
      const rect = container.getBoundingClientRect();
      resolution.set(rect.width || 1920, rect.height || 1080);
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.height - (e.clientY - rect.top);
      mousePos.set(x, y);
    };

    updateResolution();

    const ro = new ResizeObserver(updateResolution);
    ro.observe(container);

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      ro.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos, resolution]);

  return (
    <div
      ref={containerRef}
      data-model-canvas-container
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "100%",
        height: className ? "100%" : "100vh",
        minHeight: className ? 300 : undefined,
      }}
    >
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <SceneWithDelayedComposer
          resolution={resolution}
          mousePos={mousePos}
          enableZoom={enableZoom}
          isHovered={isHovered}
        />
      </Canvas>
    </div>
  );
}
