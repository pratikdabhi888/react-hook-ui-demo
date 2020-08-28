import {
  FETCH_USERS_SUCCESS,
  FETCH_ARTICLES_SUCCESS
} from './dataTypes'

// Initial state values for userReducer
const initialState = {
  users: [],
  articles: []
}

/**
 * User reducer return state based on action
 * @param state
 * @param action
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        }
    case FETCH_ARTICLES_SUCCESS:
      debugger
      return {
        articles: action.payload,
        }
    default: return state
  }
}

export default reducer
