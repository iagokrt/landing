import React from 'react'

import {
  FaGithub as Github,
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
  FaYoutube as Youtube
} from 'react-icons/fa'

const socials = {
  github: 'https://github.com/iagokrt',
  linkedin: 'https://www.linkedin.com/in/iagobarreto/',
  artstation: 'https://twitter.com/iagokrt',
  youtube: 'https://www.youtube.com/channel/UCSVD4tMIbM1FyyBgGY6zbwQ'
}

const Socials = () => {
  return (
    <article id="socials-icons-container">
      <a href={socials.github}>
        <Github color="#000111" size={42} />
      </a>
      <a href={socials.linkedin}>
        <Twitter color="#fff" size={42} />
      </a>
      <a href={socials.artstation}>
        <Youtube color="#ff0101" size={42} />
      </a>
      <a href={socials.artstation}>
        <Linkedin color="#1ca1f3" size={42} />
      </a>
    </article>
  )
}

export default Socials
