
import { Canvas } from "react-three-fiber";
import CubeTransparent from "./CubeTransparent";

export default function Canvas3D({classeCanvas, couleurDuCube}) {
    return (
        <Canvas className={classeCanvas}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CubeTransparent
            couleur3D={couleurDuCube}
            position={[0, 0, 0]}
            scale={[3, 3, 3]}
          />
        </Canvas>
    )
}
