import { createSlice } from '@reduxjs/toolkit'
import { calculateAngle } from './utils/formulas'

const slice = createSlice({
  name: 'game',
  initialState: { angle: 45 },
  reducers: {
    moveObjects: (state, action) => {
      if (!action.payload) return state

      const { x, y } = action.payload
      const angle = calculateAngle(0, 0, x, y)
      state.angle = angle
    }
  }
})

export const { moveObjects } = slice.actions
export default slice.reducer
