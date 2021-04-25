import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Sky, Ground, CannonPipe, CannonBase } from './'

import { moveObjects } from '../slice'
import { getCanvasPosition } from '../utils/formulas'

export const Canvas = () => {
  const dispatch = useDispatch()

  let mouseCanvasPosition

  useEffect(() => {
    setInterval(() => {
      dispatch(moveObjects(mouseCanvasPosition))
    }, 10)
  })

  const trackMouse = event => {
    mouseCanvasPosition = getCanvasPosition(event)
  }

  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ]
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}>
      <Sky />
      <Ground />
      <CannonPipe />
      <CannonBase />
    </svg>
  )
}
