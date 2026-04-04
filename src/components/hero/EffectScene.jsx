// hero/EffectScene.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, memo } from "react";
import UserModel from "./UserModel";
import AsciiEffect from "./AsciiEffect";
import { SCENE_CONFIG } from "./useAsciiConfig";

// memo() prevents re-renders from parent state changes (crucial for WebGL)
const EffectScene = memo(function EffectScene() {
  return (
    <Canvas 
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl = {{alpha: true}}>
      <ambientLight intensity={SCENE_CONFIG.lights.ambient} />
      {SCENE_CONFIG.lights.directional.map((light, i) => (
        <directionalLight
          key={i}
          position={light.position}
          intensity={light.intensity}
        />
      ))}
      <Suspense fallback={null}>
        <UserModel />
      </Suspense>
      <AsciiEffect />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
});

export default EffectScene;
