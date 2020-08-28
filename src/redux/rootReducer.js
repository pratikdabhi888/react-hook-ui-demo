import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

// Register all reducer
const rootReducer = combineReducers({
  // user reducer state
  data: dataReducer
})

export default rootReducer
