import React, { Suspense } from 'react';
import './App.scss';

import { Html, useGLTFLoader } from 'drei';

import { Canvas } from 'react-three-fiber';

import Header from './components/Header';

import { Section } from './components/section';

const Model = () => {
  const gltf = useGLTFLoader('/armchairYellow.gltf', true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh position={[0, 35, 0]}>
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
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
