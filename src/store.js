import { configureStore } from '@reduxjs/toolkit'
import objectsReducer from './objectsSlice'

const store = configureStore({ reducer: objectsReducer })

export default store
