import React from "react";

import MusicPlayer from './MusicPlayer';

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>@iagokrt. <p className="coffee"><strong>❤ coffee n' creativity ❤</strong></p></div>
        <MusicPlayer url="/demo.mp3" />
        <a className="blog-button" target="_blank" rel="noopener noreferrer" href='https://writeisland.netlify.app/'>Blog</a>
      </div>
    </header>
  );
}
