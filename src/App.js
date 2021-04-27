import React, { useEffect } from 'react'

import { Canvas } from './components/Canvas'

const App = () => {
  useEffect(() => {
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas')
      cnv.style.width = `${window.innerWidth}px`
      cnv.style.height = `${window.innerHeight}px`
    }
    window.onresize()
  })

  return <Canvas />
}

export default App
