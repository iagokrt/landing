import React from 'react'

import Socials from './Socials'

const templateLocales = {
  thankYouLabel: 'with ❤',
  designLabel: 'Designed by @iagokrt'
}

const data = {
  katrin: 'https://sketchfab.com/katrin.701',
  github: 'https://github.com/iagokrt'
}

const Personal = () => {
  return (
    <>
      <h4>
        <a target="_blank" rel="noopener noreferrer" href={data.github}>
          {templateLocales.thankYouLabel}
        </a>
      </h4>
      <Socials />
      <a target="_blank" rel="noopener noreferrer" href={data.github}>
        {templateLocales.designLabel}
      </a>
    </>
  )
}

export default Personal
