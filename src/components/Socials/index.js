import React from 'react'

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="socials">
      <p><a href="https://github.com/iagokrt"><FaGithub color='#000111' size={32} />GitHub</a></p>
      <p><a href="https://www.linkedin.com/in/iagobarreto/"><FaLinkedin color='#fff' size={32} />LinkedIn</a></p>
      <p><a href="https://twitter.com/iagokrt"><FaTwitter color='#1ca1f3' size={32} />Twitter</a></p>
    </div>
  )
}
