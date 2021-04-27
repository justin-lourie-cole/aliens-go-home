import React from 'react'

import { FlyingObjectBase, FlyingObjectTop } from './'

export const FlyingObject = props => (
  <g>
    <FlyingObjectBase position={props.position} />
    <FlyingObjectTop position={props.position} />
  </g>
)
