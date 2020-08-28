import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_USERS_SUCCESS,
} from './dataTypes'


/**
 * fetch user success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

/**
 * fetch user success action
 * @param users
 * @returns {{payload: *, type: string}}
 */
export const fetchArticlesSuccess = articles => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  }
}
