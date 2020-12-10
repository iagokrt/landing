import React, { useRef, useEffect, Suspense } from 'react'
import './App.scss'

import { Canvas } from 'react-three-fiber'

import Header from './components/Header'
import Personal from './components/Personal'

import state from './components/state'
import Lights from './components/Lights'
import Loader from './components/Loader'
import { HTMLContent } from './components/Content'

const me = {
  title: 'Art! Design & Technology'
}

function App() {
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)

  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Header />
      <Loader />
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath={'/lamp.gltf'}
            positionY={250}
            bgColor={'#0C1241'}
            rotateVelocity={0.002}
            meshX={0}
            meshY={-20}
            meshScale={[12, 12, 12]}
          >
            <h1>{me.title}</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/rose.gltf"
            positionY={0}
            bgColor={'#001233'}
            rotateVelocity={-0.005}
            meshX={20}
            meshY={5}
            meshZ={22}
            meshScale={[12, 12, 12]}
          >
            <h1>About You</h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/sphere.gltf"
            positionY={-250}
            bgColor={'#023E7D'}
            rotateVelocity={-0.005}
            meshX={20}
            meshY={45}
            meshScale={[1.5, 1.5, 1.5]}
          >
            <h1>About Me</h1>
            <Personal />
          </HTMLContent>
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </>
  )
}

export default App
