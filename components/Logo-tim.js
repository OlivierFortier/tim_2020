/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import {  useFrame } from "react-three-fiber";

export default function Model(props) {
  const group = useRef();
  const leMesh = useRef()
  const { nodes, materials } = useGLTF("/logo-tim.glb");

  useFrame(() => (leMesh.current.rotation.x = leMesh.current.rotation.y += 0.01));

  return (
    <group ref={group} {...props}>
      <mesh
      ref={leMesh}
        material={materials.ramp_Orange}
        geometry={nodes.Logo_Low.geometry}
        position={[0, 0, 0.02]}
        scale={[25, 25, 25]}
      />
    </group>
  );
}

useGLTF.preload("/logo-tim.glb");
