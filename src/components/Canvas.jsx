import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Sky,
  Ground,
  CannonPipe,
  CannonBase,
  CannonBall,
  CurrentScore,
  FlyingObject,
  Heart,
  StartGame,
  Title
} from './'

import { moveObjects, startGame } from '../objectsSlice'
import { getCanvasPosition } from '../utils/formulas'

export const Canvas = () => {
  const dispatch = useDispatch()
  const gameStarted = useSelector(state => state.initialGameState.started)
  const flyingObjects = useSelector(
    state => state.initialGameState.flyingObjects
  )

  let mouseCanvasPosition

  useEffect(() => {
    setInterval(() => {
      dispatch(moveObjects(mouseCanvasPosition))
    }, 10)
  })

  const trackMouse = event => {
    mouseCanvasPosition = getCanvasPosition(event)
  }

  const gameHeight = 1200
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight
  ]
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}>
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe />
      <CannonBase />
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />
      <Heart position={{ x: -300, y: 35 }} />
      {!gameStarted && (
        <g>
          <StartGame onClick={() => dispatch(startGame())} />
          <Title />
        </g>
      )}

      {gameStarted && (
        <g>
          {flyingObjects.map(flyingObject => (
            <FlyingObject
              key={flyingObject.id}
              position={flyingObject.position}
            />
          ))}
        </g>
      )}
    </svg>
  )
}
