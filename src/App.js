import React, { Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

import { Html, useGLTFLoader } from 'drei';

import Header from './components/Header';
import { Section } from './components/section';

import { Lights } from './components/Lights';

const Model = () => {
  const gltf = useGLTFLoader('/armchairYellow.gltf', true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  const ref = React.useRef();

  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Art is a boom</h1>
          </div>
        </Html>
      </group>
    </Section> 
  );
};

function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
