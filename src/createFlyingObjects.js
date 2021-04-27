import {
  createInterval,
  maxFlyingObjects,
  flyingObjectsStarterPositions,
  flyingObjectsStarterYAxis
} from './utils/constants'

export default function createFlyingObjects(state) {
  if (!state.initialGameState.started) return state // game not running

  const now = new Date().getTime()
  const { lastObjectCreated, flyingObjects } = state.initialGameState
  const createNewObject =
    now - lastObjectCreated.getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects

  if (!createNewObject) return state // no need to create objects now

  const id = new Date().getTime()
  const prefdefinedPosition = Math.floor(Math.random() * maxFlyingObjects)
  const flyingObjectPosition =
    flyingObjectsStarterPositions[prefdefinedPosition]
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis
    },
    createdAt: new Date().getTime(),
    id
  }

  return {
    ...state,
    initialGameState: {
      ...state.initialGameState,
      flyingObjects: [...state.initialGameState.flyingObjects, newFlyingObject],
      lastObjectCreatedAt: new Date()
    }
  }
}
