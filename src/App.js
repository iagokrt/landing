import React, { Suspense } from 'react';
import './App.scss';

import { Canvas, useFrame } from 'react-three-fiber';

import { Html, useGLTFLoader } from 'drei';

import Header from './components/Header';
import { Section } from './components/section';

import { Lights } from './components/Lights';

const Model = ({ modelPath }) => {
  const gltf = useGLTFLoader(modelPath, true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = ({children, modelPath, positionY }) => {
  const ref = React.useRef();

  useFrame(() => (ref.current.rotation.y += 0.01));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html fullscreen>{children}</Html>
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
          <HTMLContent modelPath="/armchairYellow.gltf" positionY={250}>
            <div className="container">
              <h1 className="title">Art is a boom</h1>
            </div>
          </HTMLContent>

        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
