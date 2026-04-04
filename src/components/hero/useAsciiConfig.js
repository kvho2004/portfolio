

export const ASCII_CONFIG = {
    characters: " .:-+*=%@#",
    cellSize: 5,
    invert: false,
    color: false,
};

export const SCENE_CONFIG = {
    modelPath: `${import.meta.env.BASE_URL}models/flower_pot.glb`,
    modelScale: 6,
    modelPosition: [0, -2, 0],
    lights: {
        ambient: 0.02,
        directional: [
        { position: [2, 3.5, 6], intensity: 2 },
        { position: [-2, 1.5, 4], intensity: 0.35 },
        ],
    },
};
