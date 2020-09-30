import React, { useRef, useEffect, Suspense } from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';

import Header from './components/Header';
import Personal from './components/Personal';
import { Stack } from './components/Personal/Stack';
import { Copyright } from './components/Personal/Copyright';

import state from './components/state';
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
            modelPath={"/lamp.gltf"}
            positionY={250}
            bgColor={'#0A1241'}
            rotateVelocity={0.002}
            meshX={0}
            meshY={-20}
            meshScale={[12,12,12]}
          >
            <h1 className="title">Art! Design & Technology</h1>
          </HTMLContent>
          <HTMLContent 
            domContent={domContent} 
            modelPath="/rose.gltf" 
            positionY={0}
            bgColor={'#152583'}
            rotateVelocity={-0.005}
            meshX={20}
            meshY={-85}
            meshScale={[0.1, 0.1, 0.1]}
          > 
              <h1 className="title title-about">About me</h1>
              <Personal />
          </HTMLContent>
          <HTMLContent 
          domContent={domContent} 
          modelPath="/sphere.gltf" 
          positionY={-250}
          bgColor={'#0A1241'}
          rotateVelocity={0.002}
          meshX={0}
          meshY={-20}
          meshScale={[15, 15, 15]}
        > 
            <h1 className="title title-tech">Technologies</h1>
            <Stack />
        </HTMLContent>
          <HTMLContent 
          domContent={domContent} 
          modelPath="/teacup.gltf" 
          positionY={-550}
          bgColor={'#7D92E9'}
          rotateVelocity={0.002}
          meshX={110}   
          meshY={-50}
          meshScale={[4.5, 4.5, 4.5]}
        > 
            <h1 className="title">art is a buum</h1>
            <Copyright />
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
