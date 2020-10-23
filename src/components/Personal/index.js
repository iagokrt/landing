import React from 'react'

import Socials from '../Socials';

export default function Personal() {
  return (
    <div className="personal">
    <aside>
      <p className="profile">I'm a <strong>software developer</strong> who loves nature and well designed things.</p>
      <p className="profile">I'm based out in <strong>Brazil</strong>, living on an island located south in Santa Catarina.</p>
      <p className="profile">I consider myself as a <strong>Creative Developer</strong>.</p>
      <p className="profile">Graphic Designer <strong></strong> background with <strong>CorelDraw</strong>.</p>
      <p className="profile">I also practice acoustic guitar on free time.</p>
      <p className="profile">If you wanna know more about me. Here you can find my socials.</p>
      <div>
        <Socials />
      </div>
    </aside>
  </div>
  )
}
