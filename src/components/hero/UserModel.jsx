// hero/UserModel.jsx
import { useGLTF } from "@react-three/drei";
import { SCENE_CONFIG } from "./useAsciiConfig";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"; 



export default function UserModel() {
    const { scene } = useGLTF(SCENE_CONFIG.modelPath);

    const ref = useRef();
    
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5; // Rotate at a constant speed
        }
    });

    return <
        primitive
            ref={ref} 
            object={scene} 
            scale={SCENE_CONFIG.modelScale} 
            position={SCENE_CONFIG.modelPosition} />;
}
