import React from 'react'
import uuid from 'uuid'
import enhancer from './Icon.hoc'

const Star = ({color, borderColor = color, ...props}) => {
  const id = uuid()

  return (
    <svg
    viewBox="0 0 40 38"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <path
        id={id}
        d="M20 31.414L7.64 37.886 10 24.178 0 14.471l13.82-2L20 0l6.18 12.471 13.82 2-10 9.707 2.36 13.708z"
        stroke={borderColor}
      />
    </defs>
    <use fill={color} xlinkHref={`#${id}`} fillRule="evenodd" />
  </svg>
  )
}

export default enhancer(Star)
