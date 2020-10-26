import { useFrame } from "react-three-fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function CubeTransparent(props) {

    //créer une référence au mesh
  const mesh = useRef();

  //avec ce hook, on anime le cube en dehors du cycle de vie de react, pour la performance
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //créer un cube de facon impérative, sinon ca bug avec les edges
  const cube = useMemo(() => new THREE.BoxBufferGeometry(1, 1, 1));

  return (
    <mesh {...props} ref={mesh}>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[cube]} />
        <lineBasicMaterial color="white" attach="material" />
      </lineSegments>
    </mesh>
  );
}
