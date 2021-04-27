import { createSlice } from '@reduxjs/toolkit'
import { calculateAngle } from './utils/formulas'
import createFlyingObjects from './createFlyingObjects'

const objectsSlice = createSlice({
  name: 'game',
  initialState: {
    angle: 45,
    initialGameState: {
      started: false,
      kills: 0,
      lives: 3,
      lastObjectCreated: new Date(),
      flyingObjects: []
    }
  },
  reducers: {
    moveObjects: (state, action) => {
      if (!action.payload) return state
      const mousePosition = action.payload || {
        x: 0,
        y: 0
      }

      const newState = createFlyingObjects(state)

      const { x, y } = mousePosition
      const angle = calculateAngle(0, 0, x, y)
      newState.angle = angle
      state = newState
    },
    startGame: state => {
      state.initialGameState.started = true
    }
  }
})

export const { moveObjects, startGame } = objectsSlice.actions
export default objectsSlice.reducer
