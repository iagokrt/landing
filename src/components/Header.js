import React from "react";

import MusicPlayer from './MusicPlayer';

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>@iagokrt. <p className="coffee"><strong>❤ coffee n' creativity ❤</strong></p></div>
        <nav>
          <ul>
            <li className='btn'>
              <a target="_blank" rel="noopener noreferrer" href='https://github.com/iagokrt'>Projects</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href='https://writeisland.netlify.app/'>Blog</a>
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
