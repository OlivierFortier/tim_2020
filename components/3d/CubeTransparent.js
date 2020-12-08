import { useFrame } from 'react-three-fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export default function CubeTransparent(props) {
  // expression déclarative d'un cube 3D  grace à react-three-fiber et Three.js

  // gestion du type de forme 3D
  const [forme, setForme] = useState(
    () => new THREE.BoxBufferGeometry(1, 1, 1)
  );
  useEffect(() => {
    switch (props.typeForme.typeDeForme) {
      case 'Cube':
        setForme(() => new THREE.BoxBufferGeometry(1, 1, 1));
        break;

      case 'Sphere':
        setForme(() => new THREE.SphereBufferGeometry(1, 6, 6));
        break;

      case 'Forme Aléatoire':
        setForme(() => new THREE.CylinderBufferGeometry(1, 1, 1, 6));
        break;

      case 'Triangle':
        setForme(() => new THREE.TetrahedronBufferGeometry());
        break;

      default:
        setForme(() => new THREE.BoxBufferGeometry(1, 1, 1));
        break;
    }
  }, [props.typeForme.typeDeForme]);

  // créer une référence au mesh
  const mesh = useRef();

  // avec ce hook, on anime le cube en dehors du cycle de vie de react, pour la performance
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh {...props} ref={mesh}>
      <lineSegments>
        <edgesGeometry attach="geometry" args={[forme]} />
        <lineBasicMaterial color={props.couleur3D} attach="material" />
      </lineSegments>
    </mesh>
  );
}
