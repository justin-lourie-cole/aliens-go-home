import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { getCanvasPosition } from './utils/formulas'
import { Canvas } from './components/Canvas'

const App = props => {
  let canvasMousePosition

  useEffect(() => {
    setInterval(() => {
      props.moveObjects(canvasMousePosition)
    }, 10)
  })

  const trackMouse = event => {
    canvasMousePosition = getCanvasPosition(event)
  }

  return <Canvas angle={props.angle} trackMouse={trackMouse} />
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
}

export default App
