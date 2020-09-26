import React from "react";

import MusicPlayer from './MusicPlayer';

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>@iagokrt.</div>
        <nav>
          <ul>
            <li className='btn'>
              <a href='https://github.com/iagokrt'>Projects</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <MusicPlayer url="/demo.mp3" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
