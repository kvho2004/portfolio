import { AsciiRenderer } from "@react-three/drei";
import { ASCII_CONFIG } from "./useAsciiConfig";

export default function AsciiEffect() {
  const { characters, cellSize, color, invert } = ASCII_CONFIG;

  return (
    <AsciiRenderer
      characters={characters ?? " .:-+*=%@#"}
      cellSize={cellSize ?? 5}
      color={color ?? false}
      invert={invert ?? false}
    />
  );
}
