import React from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';

import { Html } from 'drei';

import Header from './components/Header';



function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Art is a boom</h1>
          </div>
        </Html>
      </Canvas>
    </>
  );
}

export default App;
