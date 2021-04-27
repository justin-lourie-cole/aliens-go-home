import React from 'react'

export const CannonBall = props => {
  const ballStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px'
  }

  return (
    <ellipse
      style={ballStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="16"
      ry="16"
    />
  )
}
