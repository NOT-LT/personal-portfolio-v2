import "@react-three/fiber";

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: unknown;
    meshLineMaterial: unknown;
  }
}
