import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './slice'

const store = configureStore({ reducer: gameReducer })

export default store
