import React from 'react'

import { gameWidth } from '../utils/constants'

export const StartGame = props => {
  const button = {
    x: gameWidth / -2, // half width
    y: -280, // minus means up (above 0)
    width: gameWidth,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: 'transparent',
      cursor: 'pointer'
    },
    onClick: props.onClick
  }

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -150, // 150 up
    style: {
      fontFamily: '"Joti One", cursive',
      fontSize: 60,
      fill: '#e3e3e3',
      cursor: 'pointer'
    },
    onClick: props.onClick
  }

  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>Tap to Start!</text>
    </g>
  )
}
