import React from 'react'

import MusicPlayer from './MusicPlayer'

export default function Header() {
  return (
    <header>
      <MusicPlayer url="/demo.mp3" />
    </header>
  )
}
