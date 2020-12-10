import React from 'react'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.3} />

      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  )
}
