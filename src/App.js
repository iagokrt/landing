import React, { useRef, useEffect, Suspense } from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';

import state from './components/state';
import Header from './components/Header';
import { Lights } from './components/Lights';
import { HTMLContent } from './components/Content';

function App() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop)

  useEffect(() => void onScroll({ target: scrollArea.current}), []);

  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent 
            domContent={domContent} 
            modelPath={"/teacup.gltf"}
            positionY={250}
            bgColor={'#000111'}
          >
            <h1 className="title">Art! Design & Technology</h1>
          </HTMLContent>
          <HTMLContent 
            domContent={domContent} 
            modelPath="/dino.gltf" 
            positionY={0}
            bgColor={'#114455'}
          > 
              <h1 className="title art">About me</h1>
          </HTMLContent>
          <HTMLContent 
          domContent={domContent} 
          modelPath="/devil.gltf" 
          positionY={-300}
          bgColor={'#919eed'}
        > 
            <h1 className="title art">art is a buum</h1>
        </HTMLContent>
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} >
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </>
  );
}

export default App;
