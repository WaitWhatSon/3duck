import React from "react";

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useLoader } from '@react-three/fiber'

export default function NewModel() {

//   const myMesh = React.useRef();
  const materials = useLoader(MTLLoader, "./duck_0.mtl");
  const obj = useLoader(OBJLoader, "./duck_0.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     // myMesh.current.rotation.x = a;
//     // myMesh.current.rotation.y = a;
//     obj.current.rotation.x = a;
//     obj.current.rotation.y = a;
//   });

  return (
    // <mesh ref={myMesh}>
    //   <boxBufferGeometry args={[5, 2, 2]} />
    //   {/* <meshBasicMaterial color="royalblue"/> */}
    //   <meshPhongMaterial color="royalblue"/>
    // </mesh>

    <React.Suspense fallback={null}>
        <primitive object={obj} />
    </React.Suspense>
    
  );
}