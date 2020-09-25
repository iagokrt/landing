import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>@iagokrt.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Projects</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Socials</a>
            </li>
            <li className='btn'>
              <a href='/'>write</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
